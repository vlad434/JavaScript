const slides = document.querySelectorAll('.slide');
const next = document.getElementById('right');
const prev = document.getElementById('left');
const auto = true;
let interval = 5000;
let slidesInterval;

next.addEventListener('click', () => {
  nextSlide();
  if (auto) {
    clearInterval(slidesInterval);
    slidesInterval = setInterval(nextSlide, interval);
  }
});

prev.addEventListener('click', () => {
  prevSlide();
  if (auto) {
    clearInterval(slidesInterval);
    slidesInterval = setInterval(nextSlide, interval);
  }
});

const prevSlide = () => {
  const current = document.querySelector('.current');
  // console.log(currentSlide);
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
};

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (
    current.nextElementSibling &&
    current.nextElementSibling.classList.contains('slide')
  ) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
};

//auto slide
if (auto) {
  slidesInterval = setInterval(nextSlide, interval);
}
