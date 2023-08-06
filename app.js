let body = document.querySelector('body');
let butt = document.querySelector('#butt');
let form = document.querySelector('form');
let ti = document.querySelector('#ti');
let au = document.querySelector('#au');
let pa = document.querySelector('#pa');
let sub = document.querySelector('#sub');
let formu = document.querySelector('#formu');

let myLibrary = [];

butt.addEventListener('click', () => {
    formu.classList.remove('dis');
   /*  console.log(sicp.info());
    let ti = prompt("Titulo:");
    let au = prompt("Autor:");
    let pa = prompt("Number of Pages:");
    console.log(ti);
    console.log(au);
    console.log(pa); */
})

sub.addEventListener('click', () => {
    console.log(ti.innerText);
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