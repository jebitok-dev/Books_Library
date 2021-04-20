const myLibrary = [];
const bookList = document.getElementById('bookList');

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function createAndAppendElement(
  htmlType,
  htmlClass,
  elementToAppendTo,
  textContent = ''
) {
  const elem = document.createElement(htmlType);
  elem.classList.add(htmlClass);
  elem.textContent = textContent;
  elementToAppendTo.appendChild(elem);
  return elem;
}

function reloadLibrary(library) {
  document.querySelector('#bookList').innerHTML = '';
  library.forEach((book, index) => createBookCard(book, index));
}

function createBookCard(book, bookIndex = 0) {
  const { read } = book
  const bookCard = createAndAppendElement('div', 'bookCard', bookList);
  bookCard.setAttribute('data-bookIndex', bookIndex);

  const deleteButton = createAndAppendElement(
    'button',
    'deleteButton',
    bookCard,
    'Delete book'
  );
  deleteButton.addEventListener('click', () => {
    myLibrary.splice(bookIndex, 1);
    reloadLibrary(myLibrary);
  });

  const toggleRead = createAndAppendElement('input', 'toggleRead', bookCard);
  toggleRead.setAttribute('type', 'checkbox');
  toggleRead.checked = read;
  toggleRead.addEventListener('change', function () {
    if (this.checked) {
      myLibrary[bookIndex].read = true;
    } else {
      myLibrary[bookIndex].read = false;
    }
    reloadLibrary(myLibrary);
  });
}

function addBookToLibrary() {
  const author = document.getElementById('userAuthor').value;
  const title = document.getElementById('userTitle').value;
  const pages = document.getElementById('userPages').value;
  const read = document.getElementById('isRead').checked;
  myLibrary.push(new Book(author, title, pages, read));
  reloadLibrary(myLibrary);
}

document.getElementById('newBook').addEventListener('click', addBookToLibrary);
