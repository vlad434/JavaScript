const bigOutput = document.getElementById('output');
const spanKey = document.getElementById('event-key');
const spanCode = document.getElementById('event-code');
const alt = document.getElementById('alt');
const shift = document.getElementById('shift');
const control = document.getElementById('control');
const meta = document.getElementById('meta');

document.addEventListener('keydown', function (e) {
  bigOutput.textContent = e.key.toUpperCase();
  spanKey.textContent = e.key.toUpperCase();
  spanCode.textContent = e.code;

  if (e.key) {
    control.textContent = false;
    alt.textContent = false;
    shift.textContent = false;
    meta.textContent = false;
  }

  if (e.ctrlKey) {
    bigOutput.style.fontSize = '150px';
    bigOutput.style.backgroundColor = 'green';
    control.textContent = e.ctrlKey;
    alt.textContent = false;
    shift.textContent = false;
    meta.textContent = false;
  }
  if (e.altKey) {
    bigOutput.style.backgroundColor = 'red';
    control.textContent = false;
    alt.textContent = e.altKey;
    shift.textContent = false;
    meta.textContent = false;
  }
  if (e.shiftKey) {
    bigOutput.style.backgroundColor = 'grey';
    control.textContent = false;
    alt.textContent = false;
    shift.textContent = e.shiftKey;
    meta.textContent = false;
  }
  if (e.metaKey) {
    bigOutput.style.backgroundColor = 'yellow';
    control.textContent = false;
    alt.textContent = false;
    shift.textContent = false;
    meta.textContent = e.metaKey;
  }
});

document.addEventListener('keyup', function (e) {
  if (e.ctrlKey === false) {
    bigOutput.textContent = '';
    bigOutput.style.backgroundColor = 'transparent';
    control.textContent = '';
    spanKey.textContent = '';
    spanCode.textContent = '';
  }
  if (e.altKey === false) {
    bigOutput.textContent = '';
    bigOutput.style.backgroundColor = 'transparent';
    alt.textContent = '';
    spanKey.textContent = '';
    spanCode.textContent = '';
  }
  if (e.shiftKey === false) {
    bigOutput.textContent = '';
    bigOutput.style.backgroundColor = 'transparent';
    shift.textContent = '';
    spanKey.textContent = '';
    spanCode.textContent = '';
  }
  if (e.metaKey === false) {
    bigOutput.textContent = '';
    bigOutput.style.backgroundColor = 'transparent';
    meta.textContent = '';
    spanKey.textContent = '';
    spanCode.textContent = '';
  }
});
