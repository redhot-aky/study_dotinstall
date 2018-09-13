(function() {
  'use strict';
  //test

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  var timeToCountDown = 0;
  var timerId;
  var isRunning = false;

  function updateTimer(t) {
    var d = new Date(t);
    var m = ('0' + d.getMinutes()).slice(-2);
    var s = ('0' + d.getSeconds()).slice(-2);
    var ms = ('00' + d.getMilliseconds()).slice(-3);
    var timeString = m + ':' + s + '.' + ms;
    timer.textContent = timeString;
    document.title = timeString;
  }

  function countDown() {
    timerId = setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      // console.log(timeLeft);
      if (timeLeft < 0) {
        isRunning = false;
        start.textContent = 'start';
        clearTimeout(timerId);
        timeLeft = 0;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    if(!isRunning) {
      isRunning = true;
      start.textContent = 'stop';
      startTime = Date.now();
      countDown();
    } else {
      isRunning = false;
      start.textContent = 'start';
      timeToCountDown = timeLeft;
      clearTimeout(timerId);
    }
    
  });

  min.addEventListener('click', function() {
    if(isRunning) return;
    timeToCountDown += 60 * 1000;
    if (timeToCountDown >= 60 * 60 * 1000) timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click', function() {
    if(isRunning) return;
    timeToCountDown += 1000;
    if (timeToCountDown >= 60 * 60 * 1000) timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });

  reset.addEventListener('click', function() {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });


})();