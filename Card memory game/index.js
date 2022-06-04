const gameBoard = document.querySelector('.game-container'),
  mainMenu = document.querySelector('.main-menu'),
  failMenu = document.querySelector('.fail-menu'),
  winMenu = document.querySelector('.win-menu'),
  easyBtn = document.getElementById('play-easy'),
  mediumBtn = document.getElementById('play-medium'),
  hardBtn = document.getElementById('play-hard'),
  winEasyBtn = document.getElementById('win-play-easy'),
  winMediumBtn = document.getElementById('win-play-medium'),
  winHardBtn = document.getElementById('win-play-hard'),
  failEasyBtn = document.getElementById('fail-play-easy'),
  failMediumBtn = document.getElementById('fail-play-medium'),
  failHardBtn = document.getElementById('fail-play-hard'),
  progressBar = document.getElementById('progressBar'),
  scoreWon = document.querySelectorAll('.scoreWon'),
  scoreLost = document.querySelectorAll('.scoreLost');

const boxes = document.querySelectorAll('.box-inner');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.classList.contains('flip')) {
      box.classList.remove('flip');
    } else {
      box.classList.add('flip');
    }
  });
});

let winLevelBtns = [winEasyBtn, winMediumBtn, winHardBtn],
  failLevelBtns = [failEasyBtn, failMediumBtn, failHardBtn],
  levelBtns = [easyBtn, mediumBtn, hardBtn],
  okPairs = 0,
  picture1,
  picture2,
  busy = false,
  gameWon = 0,
  gameLost = 0,
  moves = 0;

let t = 0,
  time;

gameBoard.addEventListener('click', onImageClick);

scoreLost.forEach((el) => {
  el.innerHTML = localStorage.getItem('gameLost');
});

scoreWon.forEach((el) => {
  el.innerHTML = localStorage.getItem('gameWon');
});

function generateCards(l, c) {
  let keys = Array(16).fill(0);
  let key = 0;
  for (let i = 0; i < keys.length; i++) {
    keys[i] = (i % 8) + 1;
  }

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < c; j++) {
      let index = generateNum(0, keys.length - 1);
      key = keys[index];
      let card = document.createElement('img');
      card.classList.add('card');
      card.k = key;
      keys.splice(index, 1);
      gameBoard.appendChild(card);
    }
  }
}

function generateNum(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}

function generateTiles(num) {
  gameBoard.style.gridTemplateColumns = `repeat(${num}, auto)`;
  generateCards(num, num);
  winMenu.style.display = 'none';
  failMenu.style.display = 'none';
  document.querySelectorAll('img').forEach((image) => {
    image.style.width = `calc(100vw / ${num})`;
    image.style.height = `calc(97vh / ${num})`;
  });
}

function onReset() {
  failMenu.style.display = 'none';
  winMenu.style.display = 'none';
  gameBoard.style.display = 'grid';
  okPairs = 0;
  moves = 0;
  gameBoard.innerHTML = '';
}

function generateTiles2(num) {
  onReset();
  gameBoard.style.gridTemplateColumns = `repeat(${num}, auto)`;
  generateCards(num, num);
  document.querySelectorAll('img').forEach((image) => {
    image.style.width = `calc(100vw / ${num})`;
    image.style.height = `calc(95vh / ${num})`;
  });
}

function timeHelper(sec) {
  window.t = sec;
  window.per = window.t;
  timer();
}

function timer() {
  time = window.t;
  window.t--;
  progressBar.style.width = (time * 100) / window.per + '%';
  let t2 = setTimeout(timer, 1000);
  if (time < 0) {
    clearInterval(t2);
    gameBoard.style.display = 'none';
    failMenu.style.display = 'grid';
    gameLost++;

    localStorage.setItem('gameLost', gameLost);
    scoreLost.forEach((el) => {
      el.innerHTML = localStorage.getItem('gameLost');
    });
  }
  if (okPairs == 8 || okPairs == 18 || okPairs == 32) {
    console.log('congrats');
    progressBar.style.display = 'none';
    clearInterval(t2);
    gameBoard.style.display = 'none';
    winMenu.style.display = 'grid';
    gameWon++;

    localStorage.setItem('gameWon', gameWon);
    scoreWon.forEach((el) => {
      el.innerHTML = localStorage.getItem('gameWon');
    });
  }
}

levelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    gameBoard.style.display = 'grid';
    progressBar.style.display = 'block';
    if (btn.textContent === 'easy') {
      generateTiles(4);
      timeHelper(30);
    } else if (btn.textContent === 'medium') {
      generateTiles(6);
      timeHelper(90);
    } else {
      generateTiles(8);
      timeHelper(180);
    }
    mainMenu.style.display = 'none';
  });
});

winLevelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    progressBar.style.display = 'block';
    if (btn.id == 'win-play-easy') {
      generateTiles2(4);
      timeHelper(30);
    } else if (btn.id == 'win-play-medium') {
      generateTiles2(6);
      timeHelper(90);
    } else {
      generateTiles2(8);
      timeHelper(180);
    }
  });
});

failLevelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    progressBar.style.display = 'block';
    if (btn.id == 'fail-play-easy') {
      generateTiles2(4);
      timeHelper(30);
    } else if (btn.id == 'fail-play-medium') {
      generateTiles2(6);
      timeHelper(90);
    } else {
      generateTiles2(8);
      timeHelper(180);
    }
  });
});

function onImageClick(e) {
  let picture = e.target;
  if (!picture.hasOwnProperty('k')) return;
  if (picture.hasOwnProperty('done') || picture == picture1 || busy) return;
  let key = picture.k;

  if (!picture1) {
    picture1 = picture;
    picture1.setAttribute('src', `./img/${key}.png`);
  } else {
    picture2 = picture;
    picture2.setAttribute('src', `./img/${key}.png`);
    moves++;
    if (picture1.k == picture2.k) {
      okPairs++;
      picture1.done = true;
      picture2.done = true;
      picture1 = picture2 = null;
    } else {
      busy = true;
      setTimeout(() => {
        picture1.setAttribute('src', ' ');
        picture2.setAttribute('src', ' ');
        picture1 = picture2 = null;
        busy = false;
      }, 700);
    }
  }
}
