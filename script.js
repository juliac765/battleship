const btlContainer = document.getElementById('btl-grid');
const numColumns = 10;
const numRows = 100;

for (i=0;i<=numRows;i++){
    for (j=0;j<=numColumns;j++){
        const cell = document.createAttribute('div');
        cell.classList.add('cell');
        btlContainer.appendChild(cell);
    }
    
}

btlContainer.appendChild(row);

