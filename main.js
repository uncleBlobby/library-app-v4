let myLibrary = [];
let modal = document.getElementById("modalPopup");
let addBookButton = document.getElementById("addBookBtn");
let modalCloser = document.getElementsByClassName("close")[0];
let bookAddCheck = document.getElementsByClassName("addBook")[0];
let addBookForm = document.getElementById("addBookForm");
let libraryGrid = document.getElementById("libraryDisplay");



function addCardToLibrary(newBook){

        console.log(myLibrary);
        let newLibraryCard = document.createElement("div");
        let cardID = myLibrary.length;
        console.log(cardID);
        newLibraryCard.setAttribute("id", cardID);
        newLibraryCard.classList.add("libraryCard");
        libraryGrid.appendChild(newLibraryCard);
        newLibraryCard.innerText = newBook.info;
        addDeleteButton(newLibraryCard);
        addReadToggle(newLibraryCard, cardID, newBook);
}

function reDrawCard(myLibrary, cardID){
        console.log(myLibrary[cardID - 1]);
        let thisLibraryCard = document.getElementById(cardID);
        thisLibraryCard.setAttribute("id", cardID);
        thisLibraryCard.classList.add("libraryCard");
        libraryGrid.appendChild(thisLibraryCard);
        thisLibraryCard.innerText = myLibrary[cardID - 1].info;
        addDeleteButton(thisLibraryCard);
        addReadToggle(thisLibraryCard, cardID, myLibrary[cardID -1]);
}

function addDeleteButton(newLibraryCard){
    let deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    newLibraryCard.appendChild(deleteButton);
    deleteButton.innerText = "X";
    deleteButton.onclick = function() {
        deleteThisBook(deleteButton);
    }

}

function addReadToggle(newLibraryCard, cardID, newBook){
    let isReadToggle = document.createElement("div");
    isReadToggle.classList.add("isReadToggle");
    newLibraryCard.appendChild(isReadToggle);
    isReadToggle.innerText = "is read";
    isReadToggle.onclick = function() {
        newBook.toggleRead(cardID);
    }
    //addReadToggle(newLibraryCard, cardID, newBook);
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

Book.prototype.toggleRead = function(cardID) {
    console.log(this);
    console.log(this.isRead);
    let currentCard = document.getElementById(cardID);
    switch(this.isRead){
        case true:
            this.isRead = false;
            console.log("changed to not read");
            this.info = 'Title: ' + this.title + '\r\nAuthor: ' + this.author + '\r\nPages: ' + this.pages + '\r\nRead: ' + this.isRead;
            currentCard.innerText = this.info;
            reDrawCard(myLibrary, cardID);
            break;
        case false:
            this.isRead = true;
            console.log("canged to read");
            this.info = 'Title: ' + this.title + '\r\nAuthor: ' + this.author + '\r\nPages: ' + this.pages + '\r\nRead: ' + this.isRead;
            currentCard.innerText = this.info;
            reDrawCard(myLibrary, cardID);
            break;
    }

}



