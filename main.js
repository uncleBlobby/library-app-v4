let myLibrary = [];
let modal = document.getElementById("modalPopup");
let addBookButton = document.getElementById("addBookBtn");
let modalCloser = document.getElementsByClassName("close")[0];
let bookAddCheck = document.getElementsByClassName("addBook")[0];
let addBookForm = document.getElementById("addBookForm");
let libraryGrid = document.getElementById("libraryDisplay");



function addCardToLibrary(newBook){

        let newLibraryCard = document.createElement("div");
        let deleteButton = document.createElement("div");
        newLibraryCard.classList.add("libraryCard");
        deleteButton.classList.add("deleteButton");
        libraryGrid.appendChild(newLibraryCard);
        newLibraryCard.innerText = newBook.info;
        newLibraryCard.appendChild(deleteButton);
        deleteButton.innerText = "X";
        deleteButton.onclick = function() {
            deleteThisBook(deleteButton);
        }
}


function submitForm(){

    myLibrary[myLibrary.length] = new Book(btitle.value, bauthor.value, bpages.value, bisread.checked);
    addCardToLibrary(myLibrary[myLibrary.length - 1]);
}

function deleteThisBook(thisCard){
    console.log("book deleted");
    thisCard.parentElement.remove();
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
    submitForm();
    modal.style.display = "none";
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
    this.info = 'Title: ' + title + '\r\nAuthor: ' + author + '\r\nPages: ' + pages + '\r\nRead: ' + isRead;

}

Book.prototype.logInfo = function() {
    console.log(this.info)
}


