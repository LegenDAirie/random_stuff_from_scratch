'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.Draw = {
    drawCircle: function(x, y, radius) {
      var context = GLB.context
      context.beginPath();
      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      )
      context.stroke();
    }
  }
})();
