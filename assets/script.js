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

// Function to display the parsed data in rows
const displayData = (parsedData) => {
    const container = document.getElementById('data-container');
    parsedData.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach(column => {
            const columnElement = document.createElement('span');
            columnElement.textContent = column;
            rowElement.appendChild(columnElement);
        });
        container.appendChild(rowElement);
    });
};
