"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var burger = document.querySelector('._burger');
var li = document.querySelectorAll('.header__li');
var arr = [];

for (var i = 0; i < li.length; i++) {
  arr.push(li[i]);
}

arr.pop();
burger.addEventListener('click', function () {
  arr[0].classList.toggle('top24');
  arr[1].classList.toggle('top82');
  arr[2].classList.toggle('top140');
});