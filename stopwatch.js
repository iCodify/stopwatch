var interval;
var time = 0;
var startStopClicked = false;
var numberOfLogs = 0;


setListeners();


function setListeners() {

  document.getElementById("startStop").addEventListener("click", startStop);
  document.getElementById("reset").addEventListener("click", reset);
  document.getElementById("recordTime").addEventListener("click", recordTime);
  document.addEventListener("keypress", keypressSort);

}


function startInterval () {

  interval = setInterval(function(){
      time=time+0.01;
      document.getElementById("time").innerHTML = Math.round(time * 100) / 100;
  }, 10);

}


function startStop() {

  if (startStopClicked === false) {
    startInterval();
    startStopClicked = true;
  }
  else {
    clearInterval(interval);
    startStopClicked = false;
  }

}


function reset() {

  clearInterval(interval);
  startStopClicked = false;
  time = 0;
  document.getElementById("time").innerHTML = time;
  document.getElementById("log").innerHTML = "";

}


function recordTime() {

  if (time!== 0) {
    document.getElementById("log").innerHTML += '<div id="log'+numberOfLogs+'">'+Math.round(time * 100) / 100+'</div>';
    numberOfLogs++;
  }

}


function keypressSort() {

  let key = event.key;
  
  if(key === "s" || key === "S") startStop();
  else if (key === "r" || key === "R") reset();
  else if ( key === "t" || key === "T") recordTime();
  else return console.log(key);

}