const playBtn = document.getElementById('play'),
  mainMenu = document.querySelector('.main-menu'),
  failMenu = document.querySelector('.fail-menu'),
  winMenu = document.querySelector('.win-menu'),
  easyBtn = document.getElementById('play-easy'),
  mediumBtn = document.getElementById('play-medium'),
  hardBtn = document.getElementById('play-hard'),
  winEasyBtn = document.getElementById('win-play-easy'),
  winMediumBtn = document.getElementById('win-play-medium'),
  winHardBtn = document.getElementById('win-play-hard');

const boxes = document.querySelectorAll('.box .box-inner');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.classList.contains('flip')) {
      box.classList.remove('flip');
    } else {
      box.classList.add('flip');
    }
  });
});

const gameBoard = document.querySelector('.game-container');

let winLevelBtns = [winEasyBtn, winMediumBtn, winHardBtn],
  levelBtns = [easyBtn, mediumBtn, hardBtn],
  gameIsOn = false,
  okPairs = 0,
  picture1,
  picture2,
  busy = false,
  moves = 0;

gameBoard.addEventListener('click', onImageClick);

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
  document.querySelectorAll('img').forEach((image) => {
    image.style.width = `calc(100vw / ${num})`;
    image.style.height = `calc(100vh / ${num})`;
  });
}

function onReset() {
  winMenu.style.display = 'none';
  gameBoard.style.display = 'grid';
  okPairs = 0;
  // resetBtn.disabled = true;
  moves = 0;
  gameBoard.innerHTML = '';
  // // score.textContent = '0';
  // generateCards(4, 4);
}

function generateTiles2(num) {
  onReset();
  gameBoard.style.gridTemplateColumns = `repeat(${num}, auto)`;
  generateCards(num, num);
  document.querySelectorAll('img').forEach((image) => {
    image.style.width = `calc(100vw / ${num})`;
    image.style.height = `calc(100vh / ${num})`;
  });
}

levelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    gameBoard.style.display = 'grid';

    if (btn.textContent === 'easy') {
      generateTiles(4);
    } else if (btn.textContent === 'medium') {
      generateTiles(6);
    } else {
      generateTiles(8);
    }
    gameIsOn = true;
    mainMenu.style.display = 'none';
  });
});

winLevelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.id == 'win-play-easy') {
      generateTiles2(4);
    } else if (btn.id == 'win-play-medium') {
      generateTiles2(6);
    } else {
      generateTiles2(8);
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
    picture1.setAttribute('src', `./img/${key}.PNG`);
  } else {
    picture2 = picture;
    picture2.setAttribute('src', `./img/${key}.PNG`);
    moves++;
    if (picture1.k == picture2.k) {
      okPairs++;
      picture1.done = true;
      picture2.done = true;
      picture1 = picture2 = null;
      if (okPairs == 8 || okPairs == 18 || okPairs == 32) {
        console.log('congrats');
        gameBoard.style.display = 'none';
        winMenu.style.display = 'grid';
      }
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
