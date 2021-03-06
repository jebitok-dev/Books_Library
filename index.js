const myLibrary = [];

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
  textContent = '',
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
  /* eslint-disable no-unused-vars */
  const {
    author,
    title,
    pages,
    read,
  } = book;
  const bookList = document.getElementById('bookList');
  const bookCard = createAndAppendElement('div', 'bookCard', bookList);
  bookCard.setAttribute('data-bookIndex', bookIndex);

  const authorEl = createAndAppendElement('div', 'bookAuthor', bookCard, author);
  const titleEl = createAndAppendElement('div', 'bookTitle', bookCard, title);
  const pagesEl = createAndAppendElement('div', 'bookPages', bookCard, pages);
  const readEl = createAndAppendElement('div', 'bookRead', bookCard, read);
  readEl.checked = read;
  /* eslint-enable no-unused-vars */

  const deleteButton = createAndAppendElement(
    'button',
    'deleteButton',
    bookCard,
    'Delete book',
  );
  deleteButton.addEventListener('click', () => {
    myLibrary.splice(bookIndex, 1);
    reloadLibrary(myLibrary);
  });
  const toggleRead = createAndAppendElement('input', 'toggleRead', bookCard);
  toggleRead.setAttribute('type', 'checkbox');
  toggleRead.checked = read;
  toggleRead.addEventListener('change', function checkRead() {
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
