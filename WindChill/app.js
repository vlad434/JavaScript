let t = document.getElementById('temperature');
let s = document.getElementById('speed');
const calculateBtn = document.getElementById('calculate-btn');
let output = document.getElementById('wc-output');
let temp_output = document.getElementById('temp-output');
let speed_output = document.getElementById('speed-output');

calculateBtn.addEventListener('click', () => {
  let result = 0;
  let T = t.value;
  let S = s.value;

  result = 35.74 + 0.6215 * T + Math.pow(S, 0.16) * (0.4275 * T - 35.75);
  output.innerHTML = Math.round(result);
  temp_output.innerHTML = T;
  speed_output.innerHTML = S;

  if ((t.value === '' && s.value === '') || result >= T) {
    t.style.backgroundColor = 'rgba(219, 12, 12, .6)';
    s.style.backgroundColor = 'rgba(219, 12,12, .6)';
    output.innerText = '';
    temp_output.innerText = '';
    speed_output.innerText = '';
    setTimeout(() => {
      t.style.backgroundColor = 'transparent';
      s.style.backgroundColor = 'transparent';
    }, 1000);
  } else if (output.innerText === 'NaN') {
    t.style.backgroundColor = 'rgba(219, 12, 12, .6)';
    s.style.backgroundColor = 'rgba(219, 12,12, .6)';
    output.innerText = '';
    temp_output.innerText = '';
    speed_output.innerText = '';
    setTimeout(() => {
      t.style.backgroundColor = 'transparent';
      s.style.backgroundColor = 'transparent';
    }, 1000);
  }
});
