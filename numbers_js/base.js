(function() {
  'use strict';

  var numbers = [1,2,3,4,5,6,7,8,9];
  var board = document.getElementById('board');

  function init() {
    for(var i  = numbers.length -1; i >=0; i--) {
      var rand = Math.floor(Math.random() * ( i + 1 ) );
      [numbers[i], numbers[rand]] = [numbers[rand], numbers[i]]
    }
  }

  function setNumber() {
    
  };
 

  init();
})();