let myLibrary = [];

let modal = document.getElementById("modalPopup");

let addBookButton = document.getElementById("addBookBtn");

let modalCloser = document.getElementsByClassName("close")[0];

let bookAddCheck = document.getElementsByClassName("addBook")[0];

let addBookForm = document.getElementById("addBookForm");

let libraryGrid = document.getElementById("libraryDisplay");

//let btitle = addBookForm.elements[0];

function addCardToLibrary(newBook){

        let newLibraryCard = document.createElement("div");
        newLibraryCard.classList.add("libraryCard");
        libraryGrid.appendChild(newLibraryCard);
        newLibraryCard.innerText = newBook.info;

}


function submitForm(){
    myLibrary[myLibrary.length] = new Book(btitle.value, bauthor.value, bpages.value, bisread.checked);
    console.log("form submitted");
    console.log("library length: " + myLibrary.length);
    console.log(myLibrary);
    addCardToLibrary(myLibrary[myLibrary.length - 1]);
}




addBookButton.onclick = function() {
    modal.style.display = "block";
    resetFormInputs();
}

function resetFormInputs(){
    addBookForm.elements[0].value = "Title";
    addBookForm.elements[1].value = "Author";
    addBookForm.elements[2].value = "Pages";
    addBookForm.elements[3] = false;
}

modalCloser.onclick = function() {
    modal.style.display = "none";
}

bookAddCheck.onclick = function() {
    submitForm(btitle);
    modal.style.display = "none";
    /*
    myLibrary[myLibrary.length] = new Book(btitle, bauthor, bpages, bisread);
    modal.style.display = "none";
    console.log("book added to library");
    console.log("library length: " + myLibrary.length);
    console.log(myLibrary);
    */
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = 'Title: ' + title + '\r\nAuthor: ' + author + '\r\nPages: ' + pages + ' pages ' + '\r\nRead: ' + isRead;

}

Book.prototype.logInfo = function() {
    console.log(this.info)
}

const book1 = new Book('the hobbit', 'some shitty author', '325', false);

book1.logInfo();

//console.log(book1);

function openForm(){

}


