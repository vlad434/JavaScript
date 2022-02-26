let input = document.querySelector('.num1');
let output = document.querySelector('.num2');
let errorDiv = document.querySelector('.msg');
let convertBtn = document.getElementById('convert');
let B2D = document.getElementById('bin-to-dec');
let D2B = document.getElementById('dec-to-bin');

convertBtn.addEventListener('click', () => {
  if (input.placeholder === 'Binary') {
    binaryToDecimal();
  } else {
    decimalToBinary();
  }
});

B2D.addEventListener('click', () => {
  input.setAttribute('placeholder', 'Binary');
  input.setAttribute('id', 'binary');
  output.setAttribute('placeholder', 'Decimal');
  output.setAttribute('id', 'decimal');
  convertBtn.innerText = 'Convert to decimal';
  input.value = '';
  output.value = '';
});

D2B.addEventListener('click', () => {
  input.setAttribute('placeholder', 'Decimal');
  input.setAttribute('id', 'decimal');
  output.setAttribute('placeholder', 'Binary');
  output.setAttribute('id', 'binary');
  convertBtn.innerText = 'Convert to binary';
  input.value = '';
  output.value = '';
});

function binaryToDecimal() {
  let Input = input.value;
  let lastChr = Input.slice(-1);
  if (lastChr == '') {
    errMsg('Please input a number.');
    return;
  }
  if (lastChr == 1 || lastChr == 0) {
    output.value = parseInt(input.value, 2);
  } else {
    errMsg(`"${lastChr}" is not valid input.`);
  }
}

function decimalToBinary() {
  let Input = input.value;
  let lastChr = Input.slice(-1);
  if (lastChr == '') {
    errMsg('Please enter a decimal number.');
    return;
  } else if (isNaN(lastChr) || isNaN(Input)) {
    errMsg(`"${lastChr}" is not a number.`);
  } else {
    output.value = Number(Input).toString(2);
  }
}

function errMsg(msg) {
  errorDiv.innerText = `${msg}`;
  setTimeout(() => {
    errorDiv.innerText = '';
    input.value = '';
    output.value = '';
  }, 900);
}
