const minNum = document.getElementById('min');
const maxNum = document.getElementById('max');
const genBtn = document.querySelector('.btn');
const output = document.querySelector('.output');

genBtn.addEventListener('click', () => {
  getRndInteger();
});

function getRndInteger() {
  const min = parseInt(minNum.value);
  const max = parseInt(maxNum.value);
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  output.innerText = random;
}
