//BREAK SESSION SELECTORS
let minusBreak = document.getElementById('minus-break');
let numBreak = document.querySelector('.num-break');
let plusBreak = document.getElementById('plus-break');

//SESSION LENGTH SELECTORS
let minusSession = document.getElementById('minus-session');
let numSession = document.querySelector('.num-session');
let plusSession = document.getElementById('plus-session');

//CLOCK SELECTORS
let clockSession = document.querySelector('.clock-session');
let workMin = document.getElementById('work-min');
let workSec = document.getElementById('work-sec');
let playBtn = document.querySelector('.fa-play-circle');
let pauseBtn = document.querySelector('.fa-pause-circle');
let resetBtn = document.querySelector('.fa-undo');

//BREAK SELECTORS
let breakSession = document.querySelector('.break-session');
let breakMin = document.getElementById('break-min');
let breakSec = document.getElementById('break-sec');
let breakPlay = document.getElementById('break-play');
let resetPlay = document.getElementById('reset-play');
let replayContainer = document.querySelector('.replay-session');
let resetAllBtn = document.getElementById('reset-all-btn');

var startTimerSession;
var startTimerBreak;
//MINUS NUMBER OF BREAK MINUTES
minusBreak.addEventListener('click', () => {
  if (numBreak.innerText > 0 && breakMin.innerText > 0) {
    numBreak.innerText--;
    breakMin.innerText--;
  } else return;
});

//PLUS NUMBER OF BREAK MINUTES
plusBreak.addEventListener('click', () => {
  numBreak.innerText++;
  breakMin.innerText++;
});

//MINUS NUMBER OF SESSION MINUTES
minusSession.addEventListener('click', () => {
  if (numSession.innerText > 0 && workMin.innerText > 0) {
    numSession.innerText--;
    workMin.innerText--;
    workMin.innerText = numSession.innerText;
  } else return;
});

//PLUS NUMBER OF SESSION MINUTES
plusSession.addEventListener('click', () => {
  numSession.innerText++;
  workMin.innerText++;
  workMin.innerText = numSession.innerText;
});

//PLAY BUTTON (SESSION)
playBtn.addEventListener('click', () => {
  if (startTimerSession === undefined) {
    startTimerSession = setInterval(sessionTimer, 1000);
  } else {
    alert('Clock is already running!');
  }
});

//PLAY BUTTON (BREAK)
breakPlay.addEventListener('click', () => {
  if (startTimerBreak === undefined) {
    startTimerBreak = setInterval(breakTimer, 1000);
  }
});

//PAUSE BUTTON
pauseBtn.addEventListener('click', () => {
  stopSession();
  startTimerSession = undefined;
});

//RESET BUTTON SESSION
resetBtn.addEventListener('click', () => {
  resetFunc();
  stopSession();
  startTimerSession = undefined;
});

//CLOCK LOGIC
function sessionTimer() {
  if (workSec.innerText != 0) {
    workSec.innerText--;
    workSec.innerText =
      workSec.innerText < 10 ? '0' + workSec.innerText : workSec.innerText;
  } else if (workMin.innerText != 0 && workSec.innerText == 0) {
    workSec.innerText = 59;
    workMin.innerText--;
  }

  if (workMin.innerText == '0' && workSec.innerText == '00') {
    stopSession();
    console.log('done');
    clockSession.style.display = 'none';
    endingSound();
    breakSession.style.display = 'flex';
  }
}

// BREAK TIMER
function breakTimer() {
  if (breakSec.innerText != 0) {
    breakSec.innerText--;
    breakSec.innerText =
      breakSec.innerText < 10 ? '0' + breakSec.innerText : breakSec.innerText;
  } else if (breakMin.innerText != 0 && breakSec.innerText == 0) {
    breakSec.innerText = 59;
    breakMin.innerText--;
  }

  if (breakMin.innerText == '0' && breakSec.innerText == '00') {
    stopBreak();
    breakSession.style.display = 'none';
    replayContainer.style.display = 'flex';
    endingSound();
  }
}

//RESET CLOCK FUNCTION
function resetFunc() {
  numBreak.innerText = '5';
  numSession.innerText = '25';

  workMin.innerText = '25';
  workSec.innerText = '00';
}

//STOP CLOCK FUNCTION
function stopSession() {
  clearInterval(startTimerSession);
}

function stopBreak() {
  clearInterval(startTimerBreak);
}

resetAllBtn.addEventListener('click', () => {
  resetFunc();
  stopSession();
  startTimerSession = undefined;
  replayContainer.style.display = 'none';
  clockSession.style.display = 'flex';
});

//AUDIO EFFECT
function endingSound() {
  const audio = new Audio();
  audio.src = './clock.mp3';
  audio.play();
}
