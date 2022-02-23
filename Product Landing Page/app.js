var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//SLIDER SELECTORS
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

// SPREAD CONTAINERS
const expandArrow = document.querySelectorAll('.fa-caret-down');
const questionContent = document.querySelectorAll('.question-content');
const questionTitle = document.querySelectorAll('.question-title');

expandArrow.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (questionContent[index].classList.contains('hide')) {
      questionContent.forEach((el) => {
        el.classList.add('hide');
      });
      expandArrow[index].classList.remove('fa-caret-down');
      expandArrow[index].classList.add('fa-caret-up');
      questionTitle[index].style.backgroundColor = '#111212';
      questionContent[index].classList.remove('hide');
    } else {
      questionContent[index].classList.add('hide');
      expandArrow[index].classList.add('fa-caret-down');
      expandArrow[index].classList.remove('fa-caret-up');
      questionTitle[index].style.backgroundColor = '#677ca3';
    }
  });
});

const icon = document.querySelector('.icon');
icon.addEventListener('click', () => {
  navbar.classList.toggle('hide2');
});
