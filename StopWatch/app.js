//clock selectors
const time_Display = document.getElementById('timerDisplay');
let minutes = 00,
  seconds = 00,
  miliseconds = 00;
let int;
//buttons
const startBtn = document.getElementById('start-btn');
const lapBtn = document.getElementById('lap-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const clearLaps = document.getElementById('clear-laps');
const continueBtn = document.getElementById('continue-btn');
const finalReset = document.getElementById('final-reset');

//lap selectors
const laps = document.querySelector('.laps');
// let time_min = document.getElementById('time-min');
// let time_sec = document.getElementById('time-sec');
// let time_milisec = document.getElementById('time-milisec');

startBtn.addEventListener('click', () => {
  int = setInterval(displayTime, 10);
  startBtn.classList.add('hide');
  lapBtn.classList.remove('hide');
  pauseBtn.classList.remove('hide');
});

pauseBtn.addEventListener('click', () => {
  clearInterval(int);
  lapBtn.classList.add('hide');
  pauseBtn.classList.add('hide');
  resetBtn.classList.remove('hide');
  clearLaps.classList.remove('hide');
  continueBtn.classList.remove('hide');
});

continueBtn.addEventListener('click', () => {
  int = setInterval(displayTime, 10);
  resetBtn.classList.add('hide');
  continueBtn.classList.add('hide');
  clearLaps.classList.add('hide');
  lapBtn.classList.remove('hide');
  pauseBtn.classList.remove('hide');
});

resetBtn.addEventListener('click', () => {
  clearInterval(int);
  minutes = 00;
  seconds = 00;
  miliseconds = 00;
  time_Display.innerHTML = `00:00:00`;
  resetBtn.classList.add('hide');
  continueBtn.classList.add('hide');
  clearLaps.classList.add('hide');
  startBtn.classList.remove('hide');
  laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  time_min = minutes < 10 ? '0' + minutes : minutes;
  time_sec = seconds < 10 ? '0' + seconds : seconds;
  time_milisec = miliseconds < 10 ? '0' + miliseconds : miliseconds;
  let lap_num = document.querySelectorAll('.lap').length + 1;

  let output = `
        <div class="lap"
        <p class="title">Lap ${lap_num}</p>
                <div class="time-passed">
                  <span class="lap-num" id="time-min"> ${time_min} </span>
                  <span>:</span>
                  <span class="lap-num" id="time-sec"> ${time_sec} </span>
                  <span>:</span>
                  <span class="lap-num" id="time-milisec"> ${time_milisec} </span>  
        </div>   
  `;

  laps.innerHTML += output;
  laps.scrollTop = laps.scrollHeight;
});

clearLaps.onclick = () => {
  if (laps.innerHTML === '') {
    alert('No laps to clear!');
  } else {
    laps.innerHTML = '';
  }
};

function displayTime() {
  miliseconds += 1;
  if (miliseconds == 100) {
    miliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms = miliseconds < 10 ? '0' + miliseconds : miliseconds;

  if (minutes > 9) {
    clearInterval(timer);
    minOutput.innerHTML = '10';
    secOutput.innerHTML = '00';
    milisecOutput.innerHTML = '00';
    lapBtn.classList.add('hide');
    pauseBtn.classList.add('hide');
    finalReset.classList.remove('hide');
  }
  time_Display.innerHTML = `${m}:${s}:${ms}`;
}

finalReset.addEventListener('click', () => {
  window.location.reload();
});
