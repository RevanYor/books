let body = document.querySelector('body');

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}
//console.log(theHobbit.info());

const sicp = new Book('SCIP','Tony Stark','560', true)

myLibrary.push(sicp);

console.log(sicp.info());

myLibrary.forEach((book) => {
    const bok = document.createElement('div');
    bok.classList.add('card');
    bok.innerText = sicp.info();
    body.appendChild(bok);
});