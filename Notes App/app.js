let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', function (e) {
  formContainer.style.display = 'block';
  e.preventDefault();
});

//NOTE SELECTORS
let deleteBtn = document.getElementById('delete-btn');
let note = document.querySelector('.note');

//FORM SELECTORS
let formContainer = document.querySelector('.form-container');
let titleForm = document.getElementById('note-title-input');
let textForm = document.getElementById('note-text');
let cancelBtn = document.getElementById('cancel-btn');
let createBtn = document.getElementById('create-btn');

createBtn.addEventListener('click', function (e) {
  if (titleForm.value === '' || textForm.value === '') {
    titleForm.style.backgroundColor = 'rgba(255,0,0,0.5)';
    textForm.style.backgroundColor = 'rgba(255,0,0,0.5)';

    setTimeout(() => {
      titleForm.style.backgroundColor = 'none';
      textForm.style.backgroundColor = 'none';
    }, 1000);
  } else {
    formContainer.style.display = 'none';
    displayNote();
  }
  e.preventDefault();
});

cancelBtn.addEventListener('click', (e) => {
  titleForm.value = '';
  textForm.value = '';
  formContainer.style.display = 'none';
  e.preventDefault();
});

let page = document.getElementById('page-content');

function displayNote() {
  let output = `<div class="note">
          <div class="box-border">${titleForm.value}</div>
          <hr />
          <div class="note-content">
              <div class="text-content">${textForm.value}</div>
              <div class="note-options">
                <button id="delete-btn" class="fa fa-trash">x</button>
              </div>
          </div>
        </div>
        `;
  page.innerHTML += output;
}

deleteBtn.addEventListener('click', (e) => {
  note.remove();
  e.preventDefault();
});
