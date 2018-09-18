(function() {
  'use strict';

  var canvas;
  var ctx;
  var Ball;

  canvas = document.getElementById('myCanvas');
  if(!canvas || !canvas.getContext) return false;
  ctx = canvas.getContext('2d');

  function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  Ball = function(x, y ,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = 'hsla(120, 80%, 40%, 0.8)';
    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.closePath();
      ctx.fill();
    };
  };

  var ball = new Ball(rand(100,200), rand(100,200), rand(10, 50));
  ball.draw();
})();