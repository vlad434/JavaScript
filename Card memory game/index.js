const playBtn = document.getElementById('play');
const mainMenu = document.querySelector('.main-menu');
const easyBtn = document.getElementById('play-easy');
const mediumBtn = document.getElementById('play-medium');
const hardBtn = document.getElementById('play-hard');

const gameBoard = document.querySelector('.game-container');

let levelBtns = [easyBtn, mediumBtn, hardBtn];
let gameIsOn = false;
let okPairs = 0;
let picture1, picture2;
let busy = false; //ascunde ambele cartonase dupa 1 sec
let moves = 0;

levelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'easy') {
      console.log('easy');
      generateCards(4, 4);
      gameBoard.style.display = 'grid';
      gameBoard.style.gridTemplateColumns = 'repeat(4, auto)';
    } else if (btn.textContent === 'medium') {
      console.log('medium');
      generateCards(6, 6);
      gameBoard.style.display = 'grid';
      gameBoard.style.gridTemplateColumns = 'repeat(6, auto)';
    } else {
      console.log('hard');
      generateCards(8, 8);
      gameBoard.style.display = 'grid';
      gameBoard.style.gridTemplateColumns = 'repeat(8, auto)';
    }
    gameIsOn = true;
    mainMenu.style.display = 'none';
  });
});

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
    // score.textContent = moves.toString();
    if (picture1.k == picture2.k) {
      okPairs++;
      picture1.done = true;
      picture2.done = true;
      picture1 = picture2 = null;
      if (okPairs == 8) {
        console.log('congrats');
        // resetBtn.disabled = false;
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
