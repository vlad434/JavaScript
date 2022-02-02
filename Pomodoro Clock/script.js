//CLOCK CONTAINER SELECTORS
const increase = document.getElementById('increase');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
const decrease = document.getElementById('decrease');

//BUTTONS SELECTORS
const s_btn = document.querySelector('.session-buttons');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let startTimerSession;

decrease.addEventListener('click', () => {
  if (minutes.innerText > 00) {
    minutes.innerText--;
    formatTime(minutes);
  } else return;
}); 

increase.addEventListener('click', () => {
  minutes.innerText++;
  formatTime(minutes);
});

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  s_btn.style.display = 'block';
  if (startTimerSession === undefined) {
    startTimerSession = setInterval(startTimer, 100);
  } else {
    console.log('Clock is already running!');
  }
});

stopBtn.addEventListener('click', () => {
  stopTimer();
  startTimerSession = undefined;
  s_btn.style.display = 'none';
  startBtn.style.display = 'block';
});

resetBtn.addEventListener('click', () => {
  resetFunc();
  stopTimer();
  startTimerSession = undefined;
});

function formatTime(time) {
  time.innerText = time.innerText < 10 ? '0' + time.innerText : time.innerText;
}

function startTimer() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
    formatTime(seconds);
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
    formatTime(minutes);
  }

  if (minutes.innerText == 00 && seconds.innerText == 00) {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(startTimerSession);
  console.log('stop');
}

function resetFunc() {
  minutes.innerText = '25';
  seconds.innerText = '00';
  stopTimer();
  s_btn.style.display = 'none';
  startBtn.style.display = 'block';
}
