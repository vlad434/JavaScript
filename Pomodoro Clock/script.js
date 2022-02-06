let Title = document.querySelector('title');
let title = document.querySelector('.title');

//CLOCK CONTAINER SELECTORS
const increase = document.getElementById('increase');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
const decrease = document.getElementById('decrease');

//BUTTONS SELECTORS
const session_buttons = document.querySelector('.session-buttons');
const break_buttons = document.querySelector('.break-container');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const skipBtn = document.querySelector('.skip-btn');
const breakBtn = document.getElementById('break-btn');
const skipBtnBreak = document.querySelector('.skip-btn-break');

let Session;
let Break;
let sessionMin = 25;
let current = 'session';

// DECREASE TIME SESSION
decrease.addEventListener('click', () => {
  if (minutes.innerText <= '01') {
    minutes.style.color = 'red';
    seconds.style.color = 'red';
    setTimeout(() => {
      minutes.style.color = '#fff';
      seconds.style.color = '#fff';
    }, 800);
  } else {
    minutes.innerText--;
    formatTime(minutes);
  }
});

// INCREASE TIME SESSION
increase.addEventListener('click', () => {
  if (minutes.innerText < '60') {
    minutes.innerText++;
    formatTime(minutes);
  } else {
    minutes.style.color = 'red';
    seconds.style.color = 'red';
    setTimeout(() => {
      minutes.style.color = '#fff';
      seconds.style.color = '#fff';
    }, 800);
  }
});

// START BUTTON
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  Session = setInterval(startTimer, 1000);
  session_buttons.style.display = 'block';
});

// STOP BUTTON
stopBtn.addEventListener('click', () => {
  stopTimer(Session);
  session_buttons.style.display = 'none';
  startBtn.style.display = 'block';
});

//RESET BUTTON
resetBtn.addEventListener('click', () => {
  reset();
  stopTimer(Session);
});

//SKIP BREAK BUTTON
skipBtn.addEventListener('click', () => {
  reset();
  stopTimer(Session);
  break_buttons.style.display = 'none';
  title.innerText = 'Session';
  updateTitle();
});

skipBtnBreak.addEventListener('click', () => {
  reset();
  stopTimer(Break);
  title.innerText = 'Session';
  updateTitle();
});

//BREAK BUTTON - ENTER IN BREAK TIME
breakBtn.addEventListener('click', () => {
  title.innerText = 'Break';
  break_buttons.style.display = 'none';
  skipBtnBreak.style.display = 'block';
  Break = setInterval(startTimer, 1000);
  increase.disabled = true;
  decrease.disabled = true;
});

//FORMAT TIME FUNCTION
function formatTime(time) {
  time.innerText = time.innerText > 9 ? time.innerText : `0${time.innerText}`;
}

//START TIMER FUNCTION
function startTimer() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
    formatTime(seconds);
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
    formatTime(minutes);
    increase.disabled = true;
    decrease.disabled = true;
  }

  if (current == 'session') {
    if (minutes.innerText == 00 && seconds.innerText == 00) {
      stopTimer(Session);
      current = 'break';
      title.innerText = 'Break';
      minutes.innerText = '25';
      session_buttons.style.display = 'none';
      break_buttons.style.display = 'block';
    }
  } else {
    if (minutes.innerText == 00 && seconds.innerText == 00) {
      title.innerText = 'Session';
      stopTimer(Break);
      reset();
    }
  }
  updateTitle();
}

//STOP CLOCK FUNCTION
function stopTimer(timer) {
  clearInterval(timer);
}

//RESET FUNCTION
function reset() {
  minutes.innerText = sessionMin;
  seconds.innerText = '00';
  increase.disabled = false;
  decrease.disabled = false;
  session_buttons.style.display = 'none';
  skipBtnBreak.style.display = 'none';
  startBtn.style.display = 'block';
  updateTitle();
}

function updateTitle() {
  Title.innerHTML = `${title.innerText} - (${minutes.innerText}:${seconds.innerText}) - Pomodoro Clock`;
}
