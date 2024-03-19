const apiKey = '492e392218874564b72be9ef7db27f44';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

let exchangeRates = {};

fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
    exchangeRates = data.rates;
 })
 .catch(error => {
    console.error('Error fetching exchange rates:', error);
 });

function initializeDropdowns() {
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
}

function convertCurrency() {
 const currency1 = document.getElementById('selectedCurrency1').value;
 const currency2 = document.getElementById('selectedCurrency2').value;

 if (currency1 && currency2 && exchangeRates[currency1] && exchangeRates[currency2]) {
    const amount = parseFloat(window.prompt('Enter the amount to convert:'));
    if (!isNaN(amount)) {
      const rate = exchangeRates[currency2] / exchangeRates[currency1];
      const convertedAmount = amount * rate;
      window.alert(`${amount} ${currency1} = ${convertedAmount.toFixed(2)} ${currency2}`);
    } else {
      window.alert('Invalid amount entered.');
    }
 }
}

// Ensure the DOM is fully loaded before initializing dropdowns
document.addEventListener('DOMContentLoaded', initializeDropdowns);
