(function() {
  'use strict';
  
  var words = [
    'RED',
    'HOT',
    'CHILI',
    'PEPPER',
    'AERO',
    'SMITH',
    'COLD',
    'PLAY'
  ];
  var currentWord;
  var currentLocation;
  var score;
  var miss;
  var timer;
  var openingTimer;
  var openingTimerId;
  var info = document.getElementById('info');
  var msg = document.getElementById('msg');
  var target = document.getElementById('target');
  var scoreLabel = document.getElementById('score');
  var missLabel = document.getElementById('miss');
  var timerLabel = document.getElementById('timer');
  var isStarted = false;
  var timerId;

  function init() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    currentLocation = 0;
    score = 0;
    miss = 0;
    timer = 10 * 100;
    openingTimer = 3;
    msg.textContent = 'CLICK TO START';
    msg.className = '';
    target.textContent = currentWord;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    timerLabel.textContent = formatTimer(timer);
    isStarted = false;
  }

  init();

  function updateTimer() {
    timerId = setTimeout(function() {
      timer--;
      timerLabel.textContent = formatTimer(timer);
      if(timer <= 0) {
        clearTimeout(timerId);
        console.log('end');
        result();
        return;
      }
      updateTimer();
    }, 10);
  }

  function formatTimer(t) {
    t = ('0000' + t).slice(-4);
    t = String(t.slice(0, 2) + ':' + t.slice(2));
    return t;
  }

  function setTarget() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    target.textContent = currentWord;
    currentLocation = 0;
  }

  function opening() {
    openingTimerId = setTimeout(function () {
      openingTimer--;
      msg.textContent = openingTimer + ' SECOND TO START';
      opening();
      if (openingTimer < 0) {
        clearTimeout(openingTimerId);
        info.className = 'info is-open';
        isStarted = true;
        updateTimer();
      }
    }, 1000);
  }

  function result() {
    init();
    info.className = 'info';
  }

  info.addEventListener('click', function() {
    msg.className = 'is-show';
    setTimeout(function() {
      msg.textContent = openingTimer + ' SECOND TO START';
      opening();
    }, 500);
  });

  // window.addEventListener('click', function() {
  //   if(!isStarted) {
  //     isStarted = true;
  //     updateTimer();
  //     setTarget();
  //   }
  // });

  window.addEventListener('keyup', function(e) {
    // console.log(String.fromCharCode(e.keyCode));
    if(!isStarted) return;
    if(String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
      currentLocation++;
      var placeholder = '';
      for(var i = 0; i < currentLocation; i++) {
        placeholder += '_';
      }
      target.textContent = placeholder + currentWord.substr(currentLocation);
      // console.log('score');
      score++;
      scoreLabel.textContent = score;
      if(currentLocation === currentWord.length) {
        setTarget();
      }
    } else {
      // console.log('miss');
      miss++;
      missLabel.textContent = miss;
    }
  });

})();