class Note {
  constructor(title, color, content, id) {
    this._title = title;
    this._color = color;
    this._content = content;
    this._id = id;
  }
}

let notes = [];

const addBtn = document.getElementById('add-btn');
const addForm = document.getElementById('add-form');
const cancelBtn = document.querySelector('.cancel-btn');
const addNote = document.querySelector('.add-note');
const fTitle = document.getElementById('form-title');
const fColor = document.getElementById('form-color');
const fContent = document.getElementById('form-content');
const notesContainer = document.querySelector('.container');

addBtn.addEventListener('click', (e) => {
  addForm.style.display = 'block';
});

cancelBtn.addEventListener('click', (e) => {
  addForm.style.display = 'none';
  e.preventDefault();
});

function addToUI(noteToAdd) {
  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  let noteContentEl = document.createElement('div');
  noteContentEl.classList.add('note-content');
  let noteTitle = document.createElement('h1');
  noteTitle.innerHTML = noteToAdd._title;
  let noteContent = document.createElement('div');
  noteContent.innerHTML = noteToAdd._content;
  noteDiv.style.backgroundImage = `linear-gradient(180deg, ${noteToAdd._color} 0%, rgb(255, 255, 255) 10%)`;
  noteContentEl.appendChild(noteTitle);
  noteContentEl.appendChild(noteContent);
  let noteActions = document.createElement('div');
  noteActions.classList.add('note-actions');
  let buttonDelete = document.createElement('button');
  let icon1 = document.createElement('i');
  icon1.classList.add('fa-solid');
  icon1.classList.add('fa-trash-can');
  buttonDelete.appendChild(icon1);
  let buttonEdit = document.createElement('button');
  let icon2 = document.createElement('i');
  icon2.classList.add('fa-solid');
  icon2.classList.add('fa-pen-to-square');
  buttonEdit.appendChild(icon2);
  noteActions.appendChild(buttonDelete);
  noteActions.appendChild(buttonEdit);
  noteDiv.appendChild(noteContentEl);
  noteDiv.appendChild(noteActions);
  notesContainer.appendChild(noteDiv);
}

addNote.addEventListener('click', (e) => {
  let titleVal = fTitle.value;
  let colorVal = fColor.value;
  let contentVal = fContent.value;
  if (
    titleVal == '' ||
    titleVal === ' ' ||
    colorVal == '#000000' ||
    contentVal === '' ||
    contentVal === ' '
  ) {
    if (titleVal == '' || titleVal === ' ') {
      setTimeout(() => {
        fTitle.style.border = '2px solid black';
      }, 700);

      fTitle.style.border = '2px solid red';
    }

    if (colorVal == '#000000') {
      setTimeout(() => {
        fColor.style.border = '2px solid black';
      }, 700);

      fColor.style.border = '2px solid red';
    }

    if (contentVal == '' || contentVal === ' ') {
      setTimeout(() => {
        fContent.style.border = '2px solid black';
      }, 700);

      fContent.style.border = '2px solid red';
    }
  } else {
    const newNote = new Note(titleVal, colorVal, contentVal, 1);
    notes.push(newNote);
    addToUI(newNote);
    addForm.style.display = 'none';
    fTitle.value = '';
    fColor.value = '#000000';
    fContent.value = '';
  }
  console.log(notes);
  e.preventDefault();
});

//VIEW FORM SELECTORS
let viewForm = document.getElementById('view-form');
let viewFormTitle = document.getElementById('view-form-title');
let viewFormContent = document.getElementById('view-form-content');

//EDIT FORM SELECTORS
let editForm = document.getElementById('edit-form');
let editFormTitle = document.getElementById('edit-form-title');
let editFormContent = document.getElementById('edit-form-content');

let titleInsideEdit;
let contentInsideEdit;

notesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('fa-pen-to-square')) {
    editForm.style.display = 'block';

    for (let i = 0; i < notes.length; i++) {
      editFormTitle.value = notes[i]._title;
      editFormContent.value = notes[i]._content;
    }
  }
});

const editCancelBtn = document.querySelector('.edit-cancel-btn');
const saveChangesBtn = document.querySelector('.save-changes-btn');

editCancelBtn.addEventListener('click', (e) => {
  editForm.style.display = 'none';
  e.preventDefault();
});

saveChangesBtn.addEventListener('click', (e) => {
  for (let i = 0; i < notes.length; i++) {
    notes[i]._title = editFormTitle.value;
    notes[i]._content = editFormContent.value;
  }
  notes[0]._title = editFormTitle.value;
  // notes._title = titleAfterEdit;
  // notes._content = contentAfterEdit;

  console.log(notes);

  editForm.style.display = 'none';
  e.preventDefault();
});
