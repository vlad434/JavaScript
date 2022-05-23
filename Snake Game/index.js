// const mainMenu = document.querySelector('.first-menu');
const finalMenu = document.querySelector('.final-menu');
const gameBoard = document.getElementById('game-board');
const scoreEl = document.querySelector('.score');
const scoreNum = document.querySelector('.score-num');
const pauseMenu = document.querySelector('.pause-menu');
const finalScore = document.querySelector('.final-score');
const playBtn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
const resetBreak = document.querySelector('.restart-btn');
const pauseBtn = document.querySelector('.buttons');
const continueBtn = document.querySelector('.continue-btn');

let direction = 'right';
let interval = 100;
let food;
let snake = [];
let head;
const tileSize = 10;
// const width = gameBoard.getBoundingClientRect().width;
// const height = gameBoard.getBoundingClientRect().height;
const width = 1285;
const height = 535;
let score = 0;
let gameIsOn = false;
let Session;

// document.addEventListener('DOMContentLoaded', onLoad);
document.addEventListener('keydown', onKeyDown);
resetBtn.addEventListener('click', onReset);

playBtn.addEventListener('click', () => {
  console.log('play');
  gameBoard.style.display = 'block';
  scoreEl.style.display = 'flex';
  scoreNum.style.display = 'flex';
  pauseBtn.style.display = 'flex';
  onReset();
});

function onReset() {
  finalMenu.style.display = 'none';
  pauseBtn.style.display = 'flex';
  gameBoard.innerHTML = '';
  snake.length = 0;
  interval = 100;
  score = 0;
  scoreNum.innerText = 0;
  direction = 'right';
  createSnake(50, 200);
  spamFood();
  gameBoard.style.transform = 'scale(1)';
  Session = setInterval(gameLoop, interval);
}

function onLoad() {
  scoreEl.style.display = 'flex';
  scoreNum.style.display = 'flex';
  createSnake(50, 200);
  spamFood();
}

function stopSession(time) {
  clearInterval(time);
}

function createSnake(top, left) {
  for (let i = 0; i < 1; i++) {
    let div = document.createElement('div');
    div.classList.add('snake');
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    left = left - tileSize;
    snake.push(div);
    gameBoard.appendChild(div);
  }
  head = snake[0];
}

pauseBtn.addEventListener('click', () => {
  pauseBtn.style.display = 'none';
  stopSession(Session);
  gameIsOn = false;
  pauseMenu.style.display = 'flex';
});

resetBreak.addEventListener('click', () => {
  onReset();
  pauseMenu.style.display = 'none';
  pauseBtn.style.display = 'flex';
});

function winCondition() {
  if (score == 5) {
    interval -= 5;
    gameBoard.style.transform = 'scale(0.95)';
  }
  if (score == 10) {
    console.log('screen shrinking');
    gameBoard.style.transform = 'scale(0.90)';
  }
  if (score == 15) {
    interval -= 10;
  }
}

function gameLoop() {
  let TOP = parseInt(head.style.top);
  let LEFT = parseInt(head.style.left);
  if (gameOver(TOP, LEFT)) {
    stopSession(Session);
    finalMenu.style.display = 'flex';
    finalScore.innerText = score;
    return;
  }
  head.oldT = TOP;
  head.oldL = LEFT;
  switch (direction) {
    case 'right':
      LEFT = LEFT + tileSize;
      break;
    case 'left':
      LEFT = LEFT - tileSize;
      break;
    case 'up':
      TOP = TOP - tileSize;
      break;
    case 'down':
      TOP = TOP + tileSize;
      break;
  }
  if (head.offsetLeft == food.offsetLeft && head.offsetTop == food.offsetTop) {
    snake.splice(1, 0, food);
    spamFood();
    score++;
    winCondition();
    scoreNum.innerText = `${score}`;
  }
  head.style.top = `${TOP}px`;
  head.style.left = `${LEFT}px`;

  for (let i = 1; i < snake.length; i++) {
    let prev = snake[i - 1];
    TOP = parseInt(snake[i].style.top);
    LEFT = parseInt(snake[i].style.left);
    snake[i].oldT = TOP;
    snake[i].oldL = LEFT;
    snake[i].style.top = `${prev.oldT}px`;
    snake[i].style.left = `${prev.oldL}px`;
  }
}

continueBtn.addEventListener('click', () => {
  Session = setInterval(gameLoop, interval);
  pauseMenu.style.display = 'none';
  pauseBtn.style.display = 'flex';
});

function gameOver(t, l) {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].offsetLeft == l && snake[i].offsetTop == t) {
      return true;
    }
  }
  return t >= height || t <= 0 || l <= 0 || l >= width;
}

function spamFood() {
  let d = document.createElement('div');
  let t = 10 * genNumber(0, height / 10 - 1);
  let l = 10 * genNumber(0, width / 10 - 1);
  d.style.top = `${t}px`;
  d.style.left = `${l}px`;
  food = d;
  gameBoard.appendChild(d);
}

function genNumber(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}

function onKeyDown(e) {
  switch (e.key) {
    case 'ArrowLeft':
      direction = direction != 'right' ? 'left' : direction;
      break;
    case 'ArrowUp':
      direction = direction != 'down' ? 'up' : direction;
      break;
    case 'ArrowRight':
      direction = direction != 'left' ? 'right' : direction;
      break;
    case 'ArrowDown':
      direction = direction != 'up' ? 'down' : direction;
      break;
  }
}
