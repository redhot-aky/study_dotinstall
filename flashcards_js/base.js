(function() {
  'use strict';

  var words = [
    {'en': 'read', 'ja': '読む'},
    {'en': 'write', 'ja': '書く'},
    {'en': 'run', 'ja': '走る'},
    {'en': 'eat', 'ja': '食べる'},
    {'en': 'walk', 'ja': '歩く'}
  ]

  var card = document.getElementById('card');
  var cardFront = document.getElementById('card-front');
  var cardBack = document.getElementById('card-back');
  var btn = document.getElementById('btn');

  card.addEventListener('click', function() {
    flip();
  });

  btn.addEventListener('click', function() {
    next();
  })

  function flip() {
    card.className = card.className === '' ? 'open' : '';
  }

  function next() {
    if(card.className === 'open') {
      card.addEventListener('transitionend', setCard)
      flip();
    } else {
      setCard();
    }
    
  }

  function setCard() {
    var n = Math.floor(Math.random() * words.length);
    cardFront.textContent = words[n]['en'];
    cardBack.textContent = words[n]['ja'];
    card.removeEventListener('transitionend', setCard);
  }

  window.addEventListener('keyup', function(ev) {
    console.log(ev.keyCode);
    if(ev.keyCode === 70) {
      flip();
    } else if(ev.keyCode === 78) {
      next();
    }
  });

  next();
})();