let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read
}

function createAndAppendElement(htmlType, htmlClass, elementToAppendTo, textContent = "") {
    const elem = document.createElement(htmlType);
    elem.classList.add(htmlClass);
    elem.textContent = textContent;
    elementToAppendTo.appendChild(element);
    return element;
}

function createBookCard(book, index = 0) {
    const { author, title, pages, read } = book;
    const bookList = document.getElementById("bookList");
    const bookCard = createAndAppendElement("div", "bookCard", bookList);
    bookCard.setAttribute("data-index", index);

    const authorElem = createAndAppendElement("div", "bookAuthor", bookCard, title);
    const titleElem = createAndAppendElement("div", "bookTitle", bookCard, author)
    const pagesElem = createAndAppendElement("div", "bookPages", bookCard, pages)
    const readElem = createAndAppendElement("div", "bookRead", bookCard, read);
    readElem.checked = read;

    const deleteButton = createAndAppendElement("button", "deleteButton", bookCard, "Delete book");
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        reloadLibrary(myLibrary);
    })

    const toggleRead = createAndAppendElement("input", "toggleRead", bookCard);
    toggleRead.setAttribute("type", "checkbox");
    toggleRead.checked = read;
    toggleRead.addEventListener('change', function () {
        if (this.checked) {
            myLibrary[index].read = true;
        } else {
            myLibrary[index].read = false;
        }
        reloadLibrary(myLibrary);
    });
}

function reloadLibrary(library) {
    document.querySelector("#booklist").innerHTML = "";
    library.forEach((book, index) => createBookCard(book, index));
}

function addBookToLibrary() {
    const author = document.getElementById("bookAuthor").value;
    const title = document.getElementById("bookTitle").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("isRead").checked;
    myLibrary.push(new Book(author, title, pages, read));
    reloadLibrary(myLibrary);
}

document.getElementById("newBook").addEventListener("click", addBookToLibraryFromPage);