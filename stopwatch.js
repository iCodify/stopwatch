var interval;
var time = 0;
var startStopClicked = false;
var numberOfLogs = 1;


setListeners();


function setListeners() {

  document.getElementById("menu").addEventListener("click", function(){
    let buttonId = event.path[0].id;
    //call function accordingly to what button is pressed
    window[buttonId]();
  });
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
  numberOfLogs = 1;
  document.getElementById("time").innerHTML = time;
  document.getElementById("log").innerHTML = "";

}


function recordTime() {
	
  if (time!== 0 && startStopClicked) {
    document.getElementById("log").innerHTML += '<div id="log'+numberOfLogs+'"><span>'+numberOfLogs+': </span><span>'+Math.round(time * 100) / 100+'</span></div>';
    numberOfLogs++;
  }

}


function keypressSort() {

  let key = event.key;
  if(key === "s" || key === "S") startStop();
  else if (key === "r" || key === "R") reset();
  else if ( key === "t" || key === "T") recordTime();

}