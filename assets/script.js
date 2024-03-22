const apiKey = '492e392218874564b72be9ef7db27f44';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
let exchangeRates = {};
var currency1 = document.getElementById("selectedCurrency1")
var currency2 = document.getElementById("selectedCurrency2")

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    exchangeRates = data.rates;
    console.log('Exchange rates:', exchangeRates);
  })
  .catch(error => {
    console.error('Error fetching exchange rates:', error);
  });

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

// Ensure the DOM is fully loaded before initializing the button event listener
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('convertButton').addEventListener('click', convertCurrency);
});

currency1.addEventListener("change", function(e){
  if (e.target.value === "USD"){
    console.log(currency1.value)
    document.getElementById("flag1").setAttribute("src","https://flagsapi.com/US/flat/64.png")

  } else if (e.target.value === "JPY"){
    document.getElementById("flag1").setAttribute("src","https://flagsapi.com/JP/shiny/64.png")

  } else if (e.target.value === "MXN"){
    document.getElementById("flag1").setAttribute("src","https://flagsapi.com/MX/shiny/64.png")

  } else if (e.target.value === "EUR"){
    document.getElementById("flag1").setAttribute("src","https://flagsapi.com/GB/flat/64.png")

  }else if (e.target.value === "RUB"){
    document.getElementById("flag1").setAttribute("src","https://flagsapi.com/RU/shiny/64.png")

  }
})

currency2.addEventListener("change", function(e){
  if (e.target.value === "USD"){
    console.log(currency1.value)
    document.getElementById("flag2").setAttribute("src","https://flagsapi.com/US/flat/64.png")

  } else if (e.target.value === "JPY"){
    document.getElementById("flag2").setAttribute("src","https://flagsapi.com/JP/shiny/64.png")

  } else if (e.target.value === "MXN"){
    document.getElementById("flag2").setAttribute("src","https://flagsapi.com/MX/shiny/64.png")

  } else if (e.target.value === "EUR"){
    document.getElementById("flag2").setAttribute("src","https://flagsapi.com/GB/flat/64.png")

  }else if (e.target.value === "RUB"){
    document.getElementById("flag2").setAttribute("src","https://flagsapi.com/RU/shiny/64.png")
    
  }
})


// <!--<img src="https://flagsapi.com/US/flat/64.png" alt="US flag">
// <img src="https://flagsapi.com/GB/flat/64.png" alt="GB flag">
// <img src="https://flagsapi.com/JP/shiny/64.png" alt="JP flag">
// <img src="https://flagsapi.com/MX/shiny/64.png" alt="MX flag">
// <img src="https://flagsapi.com/RU/shiny/64.png" alt="RU flag"