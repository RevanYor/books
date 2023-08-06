let body = document.querySelector('body');
let butt = document.querySelector('#butt');

let myLibrary = [];

butt.addEventListener('click', () => {
    console.log(sicp.info());
})

//Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

//-----------------------------------------------------
const sicp = new Book('SCIP','Tony Stark','560', true)
myLibrary.push(sicp);
//console.log(sicp.info());
//-----------------------------------------------------

//Add to Array
myLibrary.forEach((book) => {
    const bok = document.createElement('div');
    bok.classList.add('card');
    bok.innerText = sicp.info();
    body.appendChild(bok);
});