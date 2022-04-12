const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();

console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  const message = e.results[0][0].transcript;
  writeMessage(message);
  checkNumber(message);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
        <div>You said:</div>
            <span class="box">${msg}</span> 
    `;
}

function checkNumber(msg) {
  const num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML += '<div>That is not a valid number</div>';
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
        <div class="container">
            <h2>Congrats! You've guessed the number! <br><br>
            It was ${num}</h2>
            <button class="play-again" id="play-again">Play Again
            </button>
        </div>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div>Go Lower</div>';
  } else {
    msgEl.innerHTML += '<div>Go Higher</div>';
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
});
