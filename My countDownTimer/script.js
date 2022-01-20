let dataMea;
//WATCH DISPLAY SELECTORS
let daysContainer = document.getElementById('days');
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let addButton = document.querySelector('.fa-plus-square');

//MODAL SELECTORS
let modal = document.querySelector('.modal');
let dateInput = document.getElementById('calendar');
let timeInput = document.getElementById('time');
let eventTitle = document.getElementById('event-title');
let cancelBtn = document.querySelector('.fa-times-circle');
let startBtn = document.querySelector('.fa-check-circle');
let messageBox = document.getElementById('messageText');

startBtn.addEventListener('click', function () {
  if (eventTitle === '' || dateInput.value === '' || timeInput.value === '') {
    eventTitle.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
    dateInput.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
    timeInput.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';

    setTimeout(() => {
      eventTitle.style.backgroundColor = 'white';
      dateInput.style.backgroundColor = 'white';
      timeInput.style.backgroundColor = 'white';
    }, 1000);
  } else {
    dataMea = new Date(`${dateInput.value}, ${timeInput.value}`);
    countDown();
    // messageBox.style.display = 'block';
    messageBox.innerText = eventTitle.value;
    modal.style.display = 'none';
  }
  setInterval(countDown, 1000);
});

function countDown() {
  let currentTime = new Date();
  let gap = dataMea.getTime() - currentTime.getTime();

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((gap % (1000 * 60)) / 1000);

  daysContainer.innerHTML = d;
  hoursContainer.innerHTML = h < 10 ? '0' + h : h;
  minutesContainer.innerHTML = m < 10 ? '0' + m : m;
  secondsContainer.innerHTML = s < 10 ? '0' + s : s;

  if (currentTime >= dataMea) {
    daysContainer.innerHTML = 'D';
    hoursContainer.innerHTML = 'O';
    minutesContainer.innerHTML = 'N';
    secondsContainer.innerHTML = 'E';
  }
}

addButton.addEventListener('click', function (event) {
  modal.style.display = 'block';
  addButton.style.display = 'none';
  event.preventDefault();
});

cancelBtn.addEventListener('click', function () {
  eventTitle.value = '';
  dateInput.value = '';
  timeInput.value = '';
  modal.style.display = 'none';
  addButton.style.display = 'block';
});
