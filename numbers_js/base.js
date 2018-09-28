(function() {
  'use strict';

  // var numbers = [1,2,3,4,5,6,7,8,9];
  // var board = document.getElementById('board');
  // function init() {
  //   for(var i  = numbers.length -1; i >=0; i--) {
  //     var rand = Math.floor(Math.random() * ( i + 1 ) );
  //     [numbers[i], numbers[rand]] = [numbers[rand], numbers[i]]
  //   }
  // }
  // init();

  var board = document.getElementById('board');
  var btn = document.getElementById('btn');
  var score = document.getElementById('score');

  var SIZE = 3;
  var currentNum = 0;
  var startTime;
  var timerId;
  

  function initBoard() {
    var i;
    var panels = [];
    var panel;

    while(board.firstChild) {
      board.removeChild(board.firstChild);
    }

    for (i = 0; i <  SIZE * SIZE; i++) {
      panels.push(createPanel(i));
    }
  
    while(panels.length) {
      panel = panels.splice(Math.floor(Math.random() * panels.length), 1);
      board.appendChild(panel[0]);
    }
  }

  function runTimer() {
    score.textContent = ((Date.now() - startTime) / 1000).toFixed(2);
    timerId = setTimeout(function(){
      runTimer();
    }, 10)
  }

  function createPanel(num) {
    var panel;
    panel = document.createElement('li');
    panel.className = 'panel hide';
    panel.textContent = num;
    panel.addEventListener('click', function() {
      if((this.textContent - 0) === currentNum) {
        this.className = 'panel flipped';
        currentNum++;
      }
      if(currentNum === SIZE * SIZE) {
        clearTimeout(timerId);
      }
    })
    return panel;
  }

  initBoard();

  btn.addEventListener('click', function() {
    var panels = document.getElementsByClassName('panel');
    var i;
    if(typeof timerId !== 'undefined') {
      clearTimeout(timerId);
    }
    currentNum = 0;
    initBoard();
    for (i = 0; i < panels.length; i++){
      panels[i].className = 'panel';
    }
    btn.textContent = 'RESTART?';
    btn.className = 'restart';
    startTime = Date.now();
    runTimer();
  })

  
  

})();