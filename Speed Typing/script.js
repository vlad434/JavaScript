const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'narrow',
  'wash',
  'rainstorm',
  'warm',
  'sock',
  'tacky',
  'behavior',
  'march',
  'grouchy',
  'fearless',
  'divergent',
  'fortunate',
  'jolly',
  'wax',
  'cheer',
  'farm',
  'puzzled',
  'decision',
  'use',
  'verdant',
  'absent',
  'lazy',
  'high',
  'pitched',
  'room',
  'faulty',
  'question',
  'undesirable',
  'low',
  'film',
  'screw',
];

//init word
let randomWord;

//init score
let score = 0;

//init time
let time = 10;

let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

difficultySelect.value = difficulty;

//leads directly to input field
text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  //   const response = await fetch('');
  //   const data = await response.json();
  //   console.log(data);
  return words[Math.floor(Math.random() * words.length)];
}

//add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${scoreEl.innerHTML}</p>
    <button onClick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});