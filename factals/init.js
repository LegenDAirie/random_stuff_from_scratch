'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.canvas = document.getElementById('canvas');
  GLB.canvas.setAttribute('width', 700);
  GLB.canvas.setAttribute('height', 500);

  GLB.context = GLB.canvas.getContext('2d');

  var fractal = GLB.Fractal.create();
  fractal.circleFractal(350, 250, 175);

})();
