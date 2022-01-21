const onBtn = document.getElementById('on-btn');
const offBtn = document.getElementById('off-btn');
const firstSec = document.getElementById('1s');
const secondSec = document.getElementById('2s');
const thirdSec = document.getElementById('3s');
const fourthSec = document.getElementById('4s');
const fifthSec = document.getElementById('5s');

const circle = document.getElementsByClassName('circle');
var len = circle.length;

firstSec.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = '1s';
  }
});
secondSec.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = '2s';
  }
});
thirdSec.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = '3s';
  }
});

fourthSec.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = '4s';
  }
});

fifthSec.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = '5s';
  }
});

onBtn.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute('style');
    circle[i].style.transitionDuration = '.5s';
  }
});

offBtn.addEventListener('click', () => {
  for (var i = 0; i < len; i++) {
    circle[i].style.backgroundColor = 'rgb(114, 1, 105)';
    circle[i].style.transitionDuration = '.5s';
    circle[i].style.animation = 'none';
  }
});
