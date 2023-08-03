let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

//console.log(theHobbit.info());

const sicp = new Book('SCIP','Tony Stark','560', true)

console.log(sicp.info());


/* myLibrary.forEach((book) => {
    const bok = document.createElement('div');
    bok.classList.add('card');
    body.appendChild(bok);
}); */