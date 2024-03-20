// URL of the CSV file
const url = 'https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/source-data/big-mac-source-data-v2.csv';

// Function to fetch and display the CSV data
fetch(url)
 .then(response => response.text())
 .then(data => {
    // Process the CSV data here
    console.log(data);
 })
 .catch(error => console.error('Error fetching data:', error));
