var money = parseInt(prompt('Assalomu aleykum! Pul miqdorini kiriting: (so\'m)'), 10);
var amount = Math.ceil('460716131039718.2');
var footerDiv = document.querySelector('.site-footer-div');
var pargraph = document.createElement('p');
pargraph.textContent = '';
footerDiv.append(pargraph);

console.log(pargraph);

if (money >= amount) {
  pargraph.textContent = 'Alisher, safaringiz bexatar bo\'lsin!';
} else {
  pargraph.textContent = 'Alisher, ozgina sabr qilish kerak bo\'lar ekan';
}