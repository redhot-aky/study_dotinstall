(function() {
  'use strict';

  var cards = document.getElementById('cards');
  var check = document.getElementById('check');
  var retry = document.getElementById('retry');

  check.addEventListener('click', function() {
    var msgs = [
      '究極の進化を遂げた',
      '太古より蘇った',
      '最も恐れられた'
    ];
    var jobs = [
      {name: '勇者', img: 'hero.gif'},
      {name: '魔法使い', img: 'wizard.gif'},
      {name: '武闘家', img: 'fighter.gif'},
    ];
    var types = [
      {name: 'その炎はすべてを焼き尽くす', img: 'bg-fire'},
      {name: 'その清水ですべてを浄化する', img: 'bg-water'},
      {name: 'その雷撃は万物の怒りを鎮める', img: 'bg-thunder'}
    ];

    var msg = getRandomElement(msgs);
    var job = getRandomElement(jobs);
    var type = getRandomElement(types);

    console.log(msg);
    console.log(job.name);
    console.log(type.name);

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function setTextContent(id, text) {
      document.getElementById(id).textContent = text;
    }
    cards.className = 'move';
  });

  retry.addEventListener('click', function() {
    cards.className = '';
  });
})();