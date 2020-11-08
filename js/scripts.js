// Variables
var USD_IN_UZS = 9433.34;
var EURO_IN_UZS = 10354.03;

var TICKET_PRICE_IN_USD = 500;
var HOTEL_PRICE_IN_EURO = 250;
var MUSEUM_PRICE_IN_EURO =120;

var TICKET_PRICE_IN_UZS = 500 * USD_IN_UZS;
var HOTEL_PRICE_IN_UZS = 250 * EURO_IN_UZS;
var MUSEUM_PRICE_IN_UZS =120 * EURO_IN_UZS;

// Choosing elements
var elFooterDiv = document.querySelector('.site-footer-div');
var elResultParagraph = document.querySelector('.result-text');

var name = prompt('Ismingiz:').trim().toUpperCase();
var wholeAmount = TICKET_PRICE_IN_UZS + HOTEL_PRICE_IN_UZS + MUSEUM_PRICE_IN_UZS;
var money = prompt(`Assalomu aleykum ${name}! Pul miqdorini kiriting: (so'm)`);

if (money !== '') {
  money = parseFloat(money, 10);
  if (!isNaN(money)) {
    if (money >= wholeAmount) {
      elResultParagraph.textContent = `${name} safaringiz bexatar bo'lsin!`;
    } else {
      elResultParagraph.textContent = `${name} ozgina sabr qilish kerak bo'lar ekan`;
    }
    elFooterDiv.classList.remove('d-none');
  } else {
    alert('Pul miqdorini raqamda kiriting!');
  }
} else {
  alert('Pul miqdorini kiriting!');
}