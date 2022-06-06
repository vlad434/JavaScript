const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//check if it is painting or not
let isPainting = false;

window.addEventListener('load', () => {
  //   console.log('hello');

  //how canvas gets a width and height
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  function start(e) {
    isPainting = true;
    draw(e);
  }

  function end() {
    isPainting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!isPainting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'; //line shape
    ctx.strokeStyle = 'red'; //line color

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mousemove', draw);
});

// window.addEventListener('resize', () => {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
// });
