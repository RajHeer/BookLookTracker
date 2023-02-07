// SELECTORS //

const mainGrid = document.querySelector('.main_cards');
const addBookBTN = document.querySelector('#addBookBTN');
const addBookForm = document.querySelector('#addBookForm');

// LISTENERS //

addBookBTN.addEventListener('click', () => {
    if (addBookForm.style.display === 'none') {
        addBookForm.style.display = 'block';
      } else {
        addBookForm.style.display = 'none';
      }
})
