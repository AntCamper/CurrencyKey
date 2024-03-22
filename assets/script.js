// URL of the CSV file
const url = 'https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/source-data/big-mac-source-data-v2.csv';

// Function to parse CSV data
const parseCSV = (data) => {
    const lines = data.split('\n');
    const output = [];

    lines.forEach(line => {
        line = line.trim();

        if (line.length === 0) return; // Skip empty lines

        const columns = line.split(',');
        output.push(columns);
    });

    return output;
};

// Function to fetch and display the CSV data
fetch(url)
    .then(response => response.text())
    .then(data => {
        // Parse the CSV data
        const parsedData = parseCSV(data);
        console.log(parsedData);

        // Display the parsed data
        displayData(parsedData);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display the parsed data in a table
const displayData = (parsedData) => {
   // Create a container for the table
   const container = document.getElementById('data-container');
   container.style.display = 'flex';
   container.style.flexDirection = 'column'; // Change to column layout
   container.style.justifyContent = 'center';
   container.style.alignItems = 'center';
   container.style.height = 'calc(100vh - 50px)'; // Adjust height to account for navbar
   container.style.overflow = 'hidden'; // Ensure the container itself does not scroll

   // Create a wrapper for the stats
   const statsWrapper = document.createElement('div');
   statsWrapper.style.display = 'flex';
   statsWrapper.style.justifyContent = 'space-around';
   statsWrapper.style.width = '100%';
   statsWrapper.style.marginBottom = '20px'; // Add some space between the stats and the table
   container.appendChild(statsWrapper);

   // Display the header information
   parsedData[0].forEach(header => {
       const headerItem = document.createElement('div');
       headerItem.style.fontWeight = 'bold'; // Make the text bold
       headerItem.textContent = header;
       statsWrapper.appendChild(headerItem);
   });

   // Create a wrapper for the table to allow scrolling
   const tableWrapper = document.createElement('div');
   tableWrapper.style.width = '80%';
   tableWrapper.style.height = 'calc(100vh - 100px)'; // Adjust height to account for navbar and stats
   tableWrapper.style.overflowY = 'scroll'; // Enable vertical scrolling
   container.appendChild(tableWrapper);

   // Create the table
   const table = document.createElement('table');
   table.style.borderCollapse = 'collapse';
   table.style.width = '100%';
   table.style.margin = 'auto';

   // Create the table body
   const tbody = document.createElement('tbody');
   // Reverse the order of the rows to display the most recent data first
   // Skip the header row by starting from the second row
   parsedData.slice(2).reverse().forEach(row => {
       const tr = document.createElement('tr');
       row.forEach(cell => {
           const td = document.createElement('td');
           td.textContent = cell;
           tr.appendChild(td);
       });
       tbody.appendChild(tr);
   });
   table.appendChild(tbody);

   // Append the table to the wrapper
   tableWrapper.appendChild(table);
};
