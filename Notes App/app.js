const addBtn = document.getElementById('add');
const notesContainer = document.querySelector('.notes-container');
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener('click', () => {
  addNewNote();
});

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="notes">
      <div class="tools">
      <button class="edit"><i class="fa fa-edit"></i></button>
      <button class="delete"><i class="fa fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class="${text ? 'hidden' : ''}"></textarea>
    </div>
   `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');

  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = `${text}`;

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLocalStorage();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = `${value}`;

    updateLocalStorage();
  });

  notesContainer.appendChild(note);
}

function updateLocalStorage() {
  const notesTxt = document.querySelectorAll('textarea');
  const notes = [];

  notesTxt.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}
