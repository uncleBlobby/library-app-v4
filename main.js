let myLibrary = [];

let modal = document.getElementById("modalPopup");

let addBookButton = document.getElementById("addBookBtn");

let modalCloser = document.getElementsByClassName("close")[0];

let bookAddCheck = document.getElementsByClassName("addBook")[0];

let addBookForm = document.getElementById("addBookForm");

//let btitle = addBookForm.elements[0];

function submitForm(){
    myLibrary[myLibrary.length] = new Book(btitle.value, bauthor.value, bpages.value, bisread.checked);
    console.log("form submitted");
    console.log("library length: " + myLibrary.length);
    console.log(myLibrary);
}

addBookButton.onclick = function() {
    modal.style.display = "block";
}

modalCloser.onclick = function() {
    modal.style.display = "none";
}

bookAddCheck.onclick = function() {
    submitForm(btitle);
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
    this.info = title + ' by ' + author + ', ' + pages + ' pages ' + 'read: ' + isRead;

}

Book.prototype.logInfo = function() {
    console.log(this.info)
}

const book1 = new Book('the hobbit', 'some shitty author', '325', false);

book1.logInfo();

//console.log(book1);

function openForm(){

}


