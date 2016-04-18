'use strict';

(function(){
  var GLOB_VARS = window.GLOB_VARS = window.GLOB_VARS || {};

  var containers = document.getElementsByClassName('element-container');

  var classToggler = function(event) {
    var targetContainer = event.currentTarget;

    targetContainer.classList.toggle('clicked');
  }

  Array.from(containers).forEach(function(container){
    container.addEventListener('click', classToggler);
  })

})()
