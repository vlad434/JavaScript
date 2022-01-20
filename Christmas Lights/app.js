const onBtn = document.getElementById('on-btn');
const offBtn = document.getElementById('off-btn');
const speed = document.querySelector('input[type="number"]');

const circle = document.getElementsByClassName('circle');
var len = circle.length;

function turnOff() {
  for (var i = 0; i < len; i++) {
    circle[i].style.backgroundColor = 'rgb(114, 1, 105)';
    circle[i].style.animation = 'none';
  }
}

function turnOn() {
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute('style');
  }
}

function increaseSpeed() {
  var speed = document.getElementById('input').value;
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + 's';
  }
}

onBtn.addEventListener('click', turnOn);
offBtn.addEventListener('click', turnOff);
speed.addEventListener('input', increaseSpeed);
