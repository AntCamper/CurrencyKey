const apiKey = '492e392218874564b72be9ef7db27f44';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${492e392218874564b72be9ef7db27f44}`;

let exchangeRates = {};

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    exchangeRates = data.rates;
  })
  .catch(error => {
    console.log('Error fetching exchange rates:', error);
  });

const dropdownContents = document.querySelectorAll('.dropdown-content');
const selectedCurrency1 = document.getElementById('selectedCurrency1');
const selectedCurrency2 = document.getElementById('selectedCurrency2');

dropdownContents.forEach(content => {
  content.addEventListener('click', function(event) {
    event.preventDefault();
    const currency = event.target.getAttribute('data-currency');
    const selectedCurrency = event.target.closest('.currency-selection').querySelector('input[type="text"]');
    selectedCurrency.value = currency;
    convertCurrency();
  });
});

function convertCurrency() {
  const currency1 = selectedCurrency1.value;
  const currency2 = selectedCurrency2.value;

  if (currency1 && currency2 && exchangeRates[currency1] && exchangeRates[currency2]) {
    const amount = parseFloat(prompt('Enter the amount to convert:'));
    if (!isNaN(amount)) {
      const rate = exchangeRates[currency2] / exchangeRates[currency1];
      const convertedAmount = amount * rate;
      alert(`${amount} ${currency1} = ${convertedAmount.toFixed(2)} ${currency2}`);
    } else {
      alert('Invalid amount entered.');
    }
  }
}