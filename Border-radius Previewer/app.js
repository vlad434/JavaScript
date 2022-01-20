 const slider1 = document.querySelector('.slider1');
 const slider2 = document.querySelector('.slider2');
 const slider3 = document.querySelector('.slider3');
 const slider4 = document.querySelector('.slider4');
 const text = document.querySelector('.text-container');
 const box = document.querySelector('.image-box');
 const copy = document.querySelector('.copy-btn');
 const image_container = document.querySelector('.image-container');

 slider1.addEventListener('input', changeBorder);
 slider2.addEventListener('input', changeBorder);
 slider3.addEventListener('input', changeBorder);
 slider4.addEventListener('input', changeBorder);
 copy.addEventListener('click', copyResult);
 
 function changeBorder() {
    image_container.style.borderRadius = `${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
    box.style.borderRadius = `${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
    text.value = `border-radius: ${slider1.value}% ${slider2.value}% ${slider3.value}% ${slider4.value}%`;
  }

 function copyResult(){
    text.select();
    document.execCommand("copy");
 }

