(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');

  var cards = [
    'crown',
    'apple-alt',
    'bell',
    'dove',
    'archive',
    'plane',
    'server'
  ];

  var timers = [];

  var stopCount = 0;

  function runSlot(n) {
    timers[n] = setTimeout(function() {
      panels[n].children[0].children[0].children[0].className = 'fas fa-' + cards[Math.floor(Math.random() * cards.length)];
      runSlot(n);
    }, 100);
  }

  function initPanel() {
    var i;
    for(i = 0; i < panels.length; i++) {
      panels[i].children[1].addEventListener('click', function() {
        if(this.className.indexOf('inActive') !== -1) return;
        clearTimeout(timers[this.dataset.index]);
        stopCount++;
        this.className = 'stop inActive';
        if(stopCount === panels.length) {
          stopCount = 0;
          checkResults();
          spin.className = '';
        }
      });
    }
  }

  function checkResults() {
    var card0 = panels[0].children[0].children[0].children[0];
    var card1 = panels[1].children[0].children[0].children[0];
    var card2 = panels[2].children[0].children[0].children[0];
    
    if(card0.className !== card1.className && card0.className !== card2.className) {
      panels[0].children[0].children[0].className = 'unmatched';
    }
    if(card1.className !== card0.className && card1.className !== card2.className) {
      panels[1].children[0].children[0].className = 'unmatched';
    }
    if(card2.className !== card0.className && card2.className !== card1.className) {
      panels[2].children[0].children[0].className = 'unmatched';
    }
  }

  initPanel();

  spin.addEventListener('click', function() {
    var i;
    if(this.className.indexOf('inActive') !== -1) return;
    this.className = 'inActive';
    for(i = 0; i < panels.length; i++) {
      runSlot(i);
      panels[i].children[0].children[0].className = '';
      panels[i].children[1].className = 'stop';
    }
  });

})();