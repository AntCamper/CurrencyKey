const apiKey = '492e392218874564b72be9ef7db27f44';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
let exchangeRates = {};

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    exchangeRates = data.rates;
    console.log('Exchange Rates:', exchangeRates);
  })
  .catch(error => {
    console.error('Error fetching exchange rates:', error);
  });

function initializeDropdowns() {
  const dropdownContents = document.querySelectorAll('.dropdown-content');
  dropdownContents.forEach(content => {
    content.addEventListener('click', function(event) {
      event.preventDefault();
      const currency = event.target.getAttribute('data-currency');
      const selectedCurrency = event.target.closest('.currency-selection').querySelector('input[type="text"]');
      selectedCurrency.value = currency;
    });
  });
}

function convertCurrency() {
  const currency1 = document.getElementById('selectedCurrency1').value;
  const currency2 = document.getElementById('selectedCurrency2').value;
  const amountInput = document.getElementById('amount');
  const resultElement = document.getElementById('result');

  if (currency1 && currency2 && exchangeRates[currency1] && exchangeRates[currency2]) {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
      const rate = exchangeRates[currency2] / exchangeRates[currency1];
      const convertedAmount = amount * rate;
      resultElement.textContent = `${amount} ${currency1} = ${convertedAmount.toFixed(2)} ${currency2}`;
    } else {
      resultElement.textContent = 'Invalid amount entered.';
    }
  }
}

// Ensure the DOM is fully loaded before initializing dropdowns and adding event listener
document.addEventListener('DOMContentLoaded', function() {
  initializeDropdowns();
  document.getElementById('SuperAwesomeButton').addEventListener('click', convertCurrency);
});