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
  var timeToCountDown = 4 * 1000;
  var timerId;

  function updateTimer(t) {
    var d = new Date(t);
    var m = ('0' + d.getMinutes()).slice(-2);
    var s = ('0' + d.getSeconds()).slice(-2);
    var ms = ('00' + d.getMilliseconds()).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown() {
    timerId = setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      // console.log(timeLeft);
      if (timeLeft < 0) {
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
    startTime = Date.now();
    countDown();
  })

})();