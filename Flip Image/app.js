const upArr = document.getElementById('up');
const downArr = document.getElementById('down');
const leftArr = document.getElementById('left');
const rightArr = document.getElementById('right');
const image = document.getElementById('img');
const displayBtn = document.getElementById('display-btn');
const uploadInput = document.getElementById('upload-input');
const errorEl = document.getElementById('error-box');

displayBtn.addEventListener('click', () => {
  let url = uploadInput.value;
  if (url === '') {
    setTimeout(() => {
      errorEl.style.opacity = '0';
    }, 1000);
    errorEl.style.opacity = '1';
  } else {
    image.setAttribute('src', url);
  }
});

let Ox = 1;
let Oy = 1;

/**
 *  OX ------->
 *  ^
 *  |
 *  | Oy
 *  |
 */

downArr.addEventListener('click', function () {
  if (Oy !== 1) {
    Oy = 1;
  } else {
    Oy = -1;
  }
  image.style.transform = `scale(${Ox}, ${Oy})`;
});

upArr.addEventListener('click', function () {
  if (Oy !== 1) {
    Oy = 1;
  } else {
    Oy = -1;
  }
  image.style.transform = `scale(${Ox}, ${Oy})`;
});

leftArr.addEventListener('click', function () {
  if (Ox !== 1) {
    Ox = 1;
  } else {
    Ox = -1;
  }
  image.style.transform = `scale(${Ox}, ${Oy})`;
});

rightArr.addEventListener('click', function () {
  if (Ox !== 1) {
    Ox = 1;
  } else {
    Ox = -1;
  }
  image.style.transform = `scale(${Ox}, ${Oy})`;
});
