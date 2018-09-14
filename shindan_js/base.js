(function() {
  'use strict';

  var cards = document.getElementById('cards');
  var check = document.getElementById('check');
  var retry = document.getElementById('retry');

  check.addEventListener('click', function() {
    cards.className = 'move';
  });

  retry.addEventListener('click', function() {
    cards.className = '';
  });
})();