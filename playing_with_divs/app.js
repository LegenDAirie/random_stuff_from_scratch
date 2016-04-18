'use strict';

var containers = document.getElementsByClassName('element-container');

var classToggler = function(event) {
  var targetContainer = event.currentTarget;

  targetContainer.classList.toggle('clicked');
}

Array.from(containers).forEach(function(container){
  container.addEventListener('click', classToggler);
})
