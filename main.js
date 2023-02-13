// SELECTORS //

const mainGrid = document.querySelector('.main_cards');
const addBookBTN = document.querySelector('#addBookBTN');
const addBookFORM = document.querySelector('#addBookForm');

// DATA //

let library = [
  {
    bookTitle: "Wolf Hall",
    author: "Hilary Mantel",
    genre: "Historical Fiction",
    pages: 580,
    read: "yes"
  },
  {
    bookTitle: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    pages: 490,
    read: "yes"
  }
];

// LISTENERS //

addBookBTN.addEventListener('click', () => {
    if (addBookFORM.style.display === 'none') {
        addBookFORM.style.display = 'block';
      } else {
        addBookFORM.style.display = 'none';
      }
});

addBookFORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(addBookFORM);
  const bookdata = {};
  for (const pair of formData.entries()) {
    bookdata[pair[0]]=pair[1];
  }
  let newBook = new Book(bookdata);
  library.push(newBook);
  generateBooks();
});

function addDeleteListeners() {
  const deleteBTNS = document.querySelectorAll('.delete');
  deleteBTNS.forEach(btn => {
    btn.addEventListener('click', (e) => {
      deleteOneCard(e.target.dataset.delete);
    });
  })
}

// CONSTRUCTOR //
function Book({bookTitle, author, genre, pages}) {
  this.bookTitle = bookTitle,
  this.author = author,
  this.genre = genre,
  this.pages = pages
}

// FUNCTIONS //

function generateBooks() {
  // remove all cards before generating new set //
  removeCards();
  library.forEach((book, index) => {
    const bookHTML = `
              <h2>${book.bookTitle}</h2>
              <p>Author: ${book.author}</p>
              <p>Genre: ${book.genre}</p>
              <p>Pages: ${book.pages}</p>
              <button data-delete=${index} class='delete'>REMOVE</button>
  `;
  const newBookCard = document.createElement('article');
  newBookCard.setAttribute('data-card', index);
  newBookCard.classList.add('card');
  newBookCard.innerHTML = bookHTML;
  mainGrid.appendChild(newBookCard);
  })
  addDeleteListeners();
}

// removes all cards //
function removeCards() {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.remove();
  })
}

function deleteOneCard(num) {
  const toBeDeleted = document.querySelector(`[data-card='${num}']`)
  toBeDeleted.remove();
}

generateBooks(); // dummy data 'library' is used to generate book cards for page load //
const removeBTNS = document.querySelectorAll('.remove');