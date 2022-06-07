const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');
canvas.height = window.innerHeight - 200;
canvas.width = window.innerWidth - 100;
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let start_background_color = 'white',
  isPainting = false;
(draw_color = 'black'), (draw_width = '2');

let path = [],
  index = -1;

const undoBtn = document.getElementById('undo'),
  clearBtn = document.getElementById('clear'),
  saveBtn = document.getElementById('save');

undoBtn.addEventListener('click', undo);
clearBtn.addEventListener('click', clear);
saveBtn.addEventListener('click', save);

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);

canvas.addEventListener('touchend', end, false);
canvas.addEventListener('mouseup', end, false);
canvas.addEventListener('mouseout', end, false);

function change_color(el) {
  draw_color = el.style.backgroundColor;
}

function start(e) {
  isPainting = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  e.preventDefault();
}

function draw(e) {
  if (isPainting) {
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.strokeStyle = draw_color;
    ctx.lineWidth = draw_width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  }
  e.preventDefault();
}

function end(e) {
  if (isPainting) {
    ctx.stroke();
    ctx.closePath();
    isPainting = false;
  }
  e.preventDefault();
  if (e.type !== 'mouseout') {
    path.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
  }
}

function clear() {
  ctx.fillStyle = start_background_color;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  path = [];
  index = -1;
}

function undo() {
  if (index <= 0) {
    clear();
  } else {
    index -= 1;
    path.pop();
    ctx.putImageData(path[index], 0, 0);
  }
}
function save() {
  //   console.log(canvas.toDataURL());
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}
