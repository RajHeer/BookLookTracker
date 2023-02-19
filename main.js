// SELECTORS //

const mainGrid = document.querySelector('.main_cards');
const addBookBTN = document.querySelector('#addBookBTN');
const addBookFORM = document.querySelector('#addBookForm');
const inputsAll = document.querySelectorAll('input');

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

// Toggle display on form to add book.
addBookBTN.addEventListener('click', () => {
    if (addBookFORM.style.display === 'none') {
        addBookFORM.style.display = 'block';
        addBookBTN.innerHTML = '-';
      } else {
        addBookFORM.style.display = 'none';
        addBookBTN.innerHTML = '+';
      }
});

// Loops over each input, adds listener
// that on typing selects resets any error 
// messages if warranted or calls func.
inputsAll.forEach(input => {
  input.addEventListener('input', (e) => {
    const inputError = input.nextElementSibling;
    if (input.validity.valid) {
      inputError.textContent = '';
      inputError.className = 'error';
    } else {
      showError();
    }
  })
});

// On submit checks each input and calls 
// error message func if needed. If all 
// input are valid then grabs data and 
// pushes to array.
addBookFORM.addEventListener('submit', (e) => {
  e.preventDefault();
  inputsAll.forEach(input => {
    if (!input.validity.valid) {
      showError(input);
    }
  });
  const inputsArr = Array.from(inputsAll);
  if ( inputsArr.every(input => input.validity.valid) ) {
    getFormDataAndToArray();  
  }
  // addBookFORM.reset();
});

// For each book delete btn add
// listener and pass dataID to 
// delete function.
function addDeleteListeners() {
  const deleteBTNS = document.querySelectorAll('.delete');
  deleteBTNS.forEach(btn => {
    btn.addEventListener('click', (e) => {
      deleteOneCard(e.target.dataset.delete);
      generateBooks();
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

function showError(input) {
  // inputsAll.forEach(input => {
    const inputError = input.nextElementSibling;
    if (input.validity.valueMissing) {
      inputError.textContent = "Please enter details.";
    }
    // Set the styling appropriately
    inputError.className = "error active";
  // }) 
}

// Get form data and pushes props to obj.
// Then pushes into lib array.
function getFormDataAndToArray() {
  const formData = new FormData(addBookFORM);
  const bookdata = {};
  for (const pair of formData.entries()) {
    bookdata[pair[0]]=pair[1];
  }
  let newBook = new Book(bookdata);
  library.push(newBook);
  generateBooks();
}

// Clears all books first. Then loops
// and creates each book record. Adds
// listners to each rendered book record.
function generateBooks() {
  // remove all cards before generating new set //
  removeCards();
  library.forEach((book, index) => {
    const bookHTML = `
              <h2>${book.bookTitle}</h2>
              <p>Author: ${book.author}</p>
              <p>Genre: ${book.genre}</p>
              <p>Pages: ${book.pages}</p>
              <p> Read?
                <label class='switch' for='read?'>
                  <input type='checkbox' name='read?' id='read?'>
                  <span class="slider round"></span>
                </label>
              </p>
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

// Removes all cards. Call in generateBooks.
function removeCards() {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.remove();
  })
}

// Delete specified card passed 
// to the deleteBTNs event listener.
function deleteOneCard(num) {
  const toBeDeleted = document.querySelector(`[data-card='${num}']`)
  toBeDeleted.remove();
  library.splice(num, 1);
}

generateBooks(); // dummy data 'library' is used to generate book cards for page load //
const removeBTNS = document.querySelectorAll('.remove');
