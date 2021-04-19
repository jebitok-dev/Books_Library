let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary() {
    const author = document.getElementById("bookAuthor").value;
    const title = document.getElementById("bookTitle").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("isRead").checked;
    myLibrary.push(new Book(author, title, pages, read));
    reloadLibrary(myLibrary);
}

var button = document.createElement("BUTTON");