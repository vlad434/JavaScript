let binaryValue = document.getElementById('binary');
let decimalValue = document.getElementById('decimal');
let errorDiv = document.querySelector('.msg');

function binaryToDecimal() {
  let binar = binaryValue.value;
  let lastChr = binar.slice(-1);
  if (lastChr == '') {
    errMsg('Please input a number.');
    return;
  }
  if (lastChr == 1 || lastChr == 0) {
    decimalValue.value = parseInt(binaryValue.value, 2);
  } else {
    errMsg(`"${lastChr}" is not valid input.`);
  }
}

function decimalToBinary() {
  let decimal = decimalValue.value;
  let lastChr = decimal.slice(-1);
  if (lastChr == '') {
    errMsg('Please enter a decimal number.');
    return;
  } else if (isNaN(lastChr) || isNaN(decimal)) {
    errMsg(`"${lastChr}" is not a number.`);
  } else {
    binaryValue.value = Number(decimal).toString(2);
  }
}

function errMsg(msg) {
  errorDiv.innerText = `${msg}`;
  setTimeout(() => {
    errorDiv.innerText = '';
    binaryValue.value = '';
    decimalValue.value = '';
  }, 1200);
}

binaryValue.addEventListener('input', binaryToDecimal);
decimalValue.addEventListener('input', decimalToBinary);
