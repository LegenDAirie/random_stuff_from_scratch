'use strict';

(function(){
  var GLOB_VARS = window.GLOB_VARS = window.GLOB_VARS || {}

  GLOB_VARS.makeGrid = function(){
    var grid = document.getElementById('grid');

    var makeRow = function(){
      var row = document.createElement('div');

      row.classList.add('row');

      return row
    }

    var makeContainer = function(){
      var container = document.createElement('li');

      container.classList.add('element-container');

      return container
    }

    var makeElement = function(){
      var element = document.createElement('div');

      element.classList.add('element');

      return element
    }

    for (var rowIdx = 0; rowIdx < 8; rowIdx++){
      var row = makeRow();

      for (var colIdx = 0; colIdx < 32; colIdx++){
        var container = makeContainer();
        var element = makeElement();

        container.appendChild(element);
        row.appendChild(container);
      }
      grid.appendChild(row);
    }
  }
})()
