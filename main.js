// SELECTORS //

const mainGrid = document.querySelector('.main_cards');
const addBookBTN = document.querySelector('#addBookBTN');
const addBookFORM = document.querySelector('#addBookForm');
const logBookBTN = document.querySelector('#log_book');
const form = document.querySelector('#addBookForm');

let library = [];

// LISTENERS //

addBookBTN.addEventListener('click', () => {
    if (addBookFORM.style.display === 'none') {
        addBookFORM.style.display = 'block';
      } else {
        addBookFORM.style.display = 'none';
      }
});

logBookBTN.addEventListener('click', () => {
    const bookDetails = `
                <h2>Book Added</h2>
                <p>Author</p>
                <p>Genre</p>
                <p>Pages</p>
                <p>Read?</p>
    `;
    const newBookCard = document.createElement('article');
    newBookCard.innerHTML = bookDetails;
    mainGrid.appendChild(newBookCard);
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const bookdata = {};
  for (const pair of formData.entries()) {
    bookdata[pair[0]]=pair[1];
  }
  let newBook = new Book(bookdata);
  library.push(newBook);
  console.log(library);
});

// CONSTRUCTOR //
function Book({bookTitle, author, genre, pages}) {
  this.bookTitle = bookTitle,
  this.author = author,
  this.genre = genre,
  this.pages = pages
}
