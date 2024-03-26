// Function to parse CSV data
function parseCSV(data) {
    const lines = data.split('\n');
    return lines.map(line => line.split(','));
}

// Function to display the parsed data in a table
const displayData = (parsedData) => {
    const container = document.getElementById('data-container');
    container.style.display = 'flex';
    container.style.flexDirection = 'column'; 
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = 'calc(100vh - 50px)'; 
    container.style.overflow = 'hidden'; 

    const tableWrapper = document.createElement('div');
    tableWrapper.style.width = '80%';
    tableWrapper.style.height = 'calc(100vh - 100px)'; 
    tableWrapper.style.overflowY = 'scroll';
    container.appendChild(tableWrapper);

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.margin = 'auto';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    parsedData[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.className = 'header-cell'; 
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.className = 'table-body'; 
    
    const reversedData = parsedData.slice(1).reverse();
    reversedData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    tableWrapper.appendChild(table);
};

// Fetch the CSV file from GitHub and parse it
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/source-data/big-mac-source-data.csv')
        .then(response => response.text())
        .then(data => {
            const parsedData = parseCSV(data);
            displayData(parsedData);
        })
        .catch(error => console.error('Error fetching CSV:', error));
});

// Font toggle functionality
document.getElementById('fontToggleBtn').addEventListener('click', function() {
    const elements = document.querySelectorAll('.nav-item, .header-cell, .table-body td');
    const font1 = 'McLawsuit';
    const font2 = 'sans-serif';
    elements.forEach(element => {
        if (element.style.fontFamily === font1) {
            element.style.fontFamily = font2;
        } else {
            element.style.fontFamily = font1;
        }
    });
});