async function getPrice() {
    const symbolInput = document.getElementById('symbolInput').value;
    const response = await fetch(`http://127.0.0.1:8000/getprice?symbol=${symbolInput}`,{
        method:'POST'
    });
    const result = await response.json();
    displayResult(result);
}

async function getAllSymbols() {
    const response = await fetch('http://127.0.0.1:8000/getsymbols');
    const result = await response.json();
    displaySymbolList(result);
}

function displayResult(result) {
    const resultContainer = document.getElementById('resultList');
    resultContainer.innerHTML = `<tr><td>${result.symbol}</td><td> ${result.last_price}</td></tr>`;
}

function displaySymbolList(symbolList) {
    const symbolListContainer = document.getElementById('symbolsList');
    symbolListContainer.innerHTML = '';
    symbolList.forEach(symbol => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `<td>${symbol.symbol}</td><td>${symbol.last_price}</td>`;
        symbolListContainer.appendChild(listItem);
    });
}



// async function getSymbols() {
//     const symbolsTable = document.getElementById('symbolsTable');
//     const symbolsList = document.getElementById('symbolsList');
//     symbolsTable.style.display = 'table';
//     symbolsList.innerHTML = '';

//     const response = await fetch('http://127.0.0.1:8000/getsymbols');
//     const data = await response.json();

//     data.forEach(symbol => {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td>${symbol.symbol}</td><td>${symbol.last_price}</td>`;
//         symbolsList.appendChild(row);
//     });
// }

// async function getPrice() {
//     const symbolInput = document.getElementById('symbolInput').value.toUpperCase();
//     const response = await fetch('http://127.0.0.1:8000/getprice?symbol=${symbol}', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({symbol: symbolInput}),
//     });

//     const data = await response.json();
//     const resultList = document.getElementById('resultList');
//     const resultTable = document.getElementById('resultTable');
    
//     resultList.innerHTML = `<tr><td>${data.symbol}</td><td>${data.last_price}</td></tr>`;
//     resultTable.style.display = 'table';
// }
