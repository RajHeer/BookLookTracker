// SELECTORS //

const mainGrid = document.querySelector('.main_cards');
const addBookBTN = document.querySelector('#addBookBTN');
const addBookFORM = document.querySelector('#addBookForm');
const logBookBTN = document.querySelector('#log_book');

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