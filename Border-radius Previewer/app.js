const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const slider4 = document.querySelector('.slider4');

const text = document.querySelector('.text-container');
const copy = document.querySelector('.copy-btn');
const image_container = document.querySelector('.image-container');
const uploadInput = document.getElementById('upload-input');
const displayBtn = document.getElementById('display-btn');
const img = document.getElementById('img');
const errorEl = document.getElementById('error-box');

slider1.addEventListener('input', changeBorder);
slider2.addEventListener('input', changeBorder);
slider3.addEventListener('input', changeBorder);
slider4.addEventListener('input', changeBorder);
copy.addEventListener('click', copyResult);

displayBtn.addEventListener('click', () => {
  let url = uploadInput.value;
  if (url === '') {
    setTimeout(() => {
      errorEl.style.opacity = '0';
    }, 1000);
    errorEl.style.opacity = '1';
  } else {
    img.setAttribute('src', url);
  }
});

function changeBorder() {
  image_container.style.borderRadius = `${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
  img.style.borderRadius = `${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
  text.value = `border-radius: ${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
}

function copyResult() {
  text.select();
  document.execCommand('copy');
}
