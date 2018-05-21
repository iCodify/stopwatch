var interval;
var time = 0;
var startStopClicked = false;

setListeners();

function setUpInterval () {
  interval = setInterval(function(){
      time=time+0.01;
      document.getElementById("time").innerHTML = Math.round(time * 100) / 100;
  }, 10);
}

function setListeners() {
  document.getElementById("startStop").addEventListener("click", function(){
    if (startStopClicked === false) {
      setUpInterval();
      startStopClicked = true;
    }
    else {
      clearInterval(interval);
      startStopClicked = false;
    }
  });

  document.getElementById("reset").addEventListener("click", function(){
    clearInterval(interval);
    startStopClicked = false;
    time = 0;
    document.getElementById("time").innerHTML = time;
  });

    document.getElementById("recordTime").addEventListener("click", function(){
      
    });
  }