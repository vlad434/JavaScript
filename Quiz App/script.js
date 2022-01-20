const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementById('exit-btn');
const continueBtn = document.getElementById('continue-btn');
const info_container = document.querySelector('.info');
const que_container = document.querySelector('.que-container');
const option_list = document.querySelector('.option-list');
const timeCount = document.querySelector('.time-left');
const timeOff = document.querySelector('.time-text');

startBtn.onclick = () => {
  startBtn.classList.add('hidden');
  info_container.classList.remove('hidden');
};

exitBtn.onclick = () => {
  startBtn.classList.remove('hidden');
  info_container.classList.add('hidden');
};

continueBtn.onclick = () => {
  info_container.classList.add('hidden');
  que_container.classList.remove('hidden');
  showQuestion(0);
  queCounter(1);
  startTimer(15);
};

let que_count = 0;
let que_number = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthVal = 0;
let score = 0;

const nextBtn = document.getElementById('next-que');
const result_box = document.querySelector('.res-container');
const restart_quiz_btn = result_box.querySelector('.replay-btn');

restart_quiz_btn.onclick = () => {
  window.location.reload();
};

//if next button is clicked
nextBtn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_number++;
    showQuestion(que_count);
    queCounter(que_number);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    nextBtn.style.display = 'none';
    timeOff.textContent = 'Time Left';
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    console.log('questions completed');
    showResultBox();
  }
};

function showQuestion(index) {
  const que_text = document.getElementById('que-name');
  let que_tag = `<span class="que-name" id="que-name"
  >${questions[index].number}. ${questions[index].question}</span>`;
  let option_tag =
    `<div class="option">${questions[index].options[0]}</div>` +
    `<div class="option">${questions[index].options[1]}</div>` +
    `<div class="option">${questions[index].options[2]}</div>` +
    `<div class="option">${questions[index].options[3]}</div>`;
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAnswer == correctAnswer) {
    score++;
    answer.classList.add('correct');
    console.log('corect');
  } else {
    console.log('gresit');
    answer.classList.add('wrong');

    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAnswer) {
        option_list.children[i].setAttribute('class', 'option correct');
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add('disabled');
  }
  nextBtn.style.display = 'block';
}

function showResultBox() {
  info_container.classList.add('hidden');
  que_container.classList.add('hidden');
  result_box.classList.remove('hidden');
  const scoreText = result_box.querySelector('.score-text');
  if (score > 3) {
    let scoreTag = `<span
    >and congrats, You got 
    <p>${score}</p>
    out of
    <p>${questions.length}</p></span
  >`;
    scoreText.innerHTML = scoreTag;
  } else if (score > 1) {
    let scoreTag = `<span
    >and nice, You got 
    <p>${score}</p>
    out of
    <p>${questions.length}</p></span
  >`;
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag = `<span
    >and sorry, You got only
    <p>${score}</p>
    out of
    <p>${questions.length}</p></span
  >`;
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let number = timeCount.textContent;
      timeCount.textContent = '0' + number;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = '0';
      timeOff.textContent = 'Time Off';

      let correctAnswer = questions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAnswer) {
          option_list.children[i].setAttribute('class', 'option correct');
        }
      }
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled');
      }
      nextBtn.style.display = 'block';
    }
  }
}

function queCounter(index) {
  const que_counter = document.querySelector('.que-num');
  let totalQuesCount = `
  <span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`;

  que_counter.innerHTML = totalQuesCount;
}
