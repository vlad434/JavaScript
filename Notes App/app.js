const addBtn = document.getElementById('add');
const addForm = document.getElementById('add-form');
const closeBtn = document.getElementById('close-btn');

addBtn.addEventListener('click', () => {
  addForm.style.opacity = '1';
});

closeBtn.addEventListener('click', () => {
  addForm.style.opacity = '0';
});
