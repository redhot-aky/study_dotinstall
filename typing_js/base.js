(function() {
  'use strict';
  
  var words = [
    'red',
    'hot',
    'chili',
    'pepper',
    'aero',
    'smith'
  ];
  var currentWord;
  var currentLocation;
  var score;
  var miss;
  var target = document.getElementById('target');
  var scoreLabel = document.getElementById('score');
  var missLabel = document.getElementById('miss');
  var isStarted = false;

  function init() {
    currentWord = 'Click to start';
    currentLocation = 0;
    score = 0;
    miss = 0;
    target.textContent = currentWord;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
  }

  init();

  function setTarget() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    target.textContent = currentWord;
    currentLocation = 0;
  }

  window.addEventListener('click', function() {
    if(!isStarted) {
      isStarted = true;
      setTarget();
    }
  });

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