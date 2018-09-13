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

  function runSlot(n) {
    setTimeout(function() {
      panels[n].children[0].children[0].children[0].className = 'fas fa-' + cards[Math.floor(Math.random() * cards.length)];
      runSlot(n);
    }, 100);
  }

  spin.addEventListener('click', function() {
    panels[0].children[0].children[0].children[0].className = 'aaa';
    var i;
    for(i = 0; i < panels.length; i++) {
      runSlot(i);
    }
  });

})();