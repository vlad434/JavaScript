const game = document.querySelector('.container');
const score = document.getElementById('score');

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  generateCards(4, 4);
}

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
      card.k = key;
      keys.splice(index, 1);
      game.appendChild(card);
    }
  }
}

function generateNum(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}
