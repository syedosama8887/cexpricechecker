async function getPrice() {
    const symbolInput = document.getElementById('symbolInput').value;
    const exchangeSelect = document.getElementById('exchangeSelect');
    const selectedExchange = exchangeSelect.options[exchangeSelect.selectedIndex].value;

    const response = await fetch(`http://127.0.0.1:8000/getprice?symbol=${symbolInput}&exchange=${selectedExchange}`, {
        method: 'POST'
    });
    const result = await response.json();
    displayResult(result);
}

async function getAllSymbols() {
    const exchangeSelect = document.getElementById('exchangeSelect');
    const selectedExchange = exchangeSelect.options[exchangeSelect.selectedIndex].value;

    const response = await fetch(`http://127.0.0.1:8000/getsymbols?exchange=${selectedExchange}`);
    const result = await response.json();
    displaySymbolList(result);
}

async function setExchangeAndFetchSymbols() {
    const select = document.getElementById("exchangeSelect");
    const selectedExchange = select.options[select.selectedIndex].value;

    // Call the FastAPI endpoint to set the exchange
    await fetch(`http://127.0.0.1:8000/setexchange/${selectedExchange}`, { method: "POST" });

    // Call the FastAPI endpoint to get symbols
    await getAllSymbols();
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

// Ensure this part is present only if you want to manually add options
const exchanges = ["select","binance", "bybit", "mexc"];
const select = document.getElementById("exchangeSelect");

exchanges.forEach((exchange) => {
    const option = document.createElement("option");
    option.value = exchange;
    option.text = exchange;
    select.add(option);
});

// const exchanges = ["binance", "bybit", "mexc"];
// const select = document.getElementById("exchangeSelect");

// exchanges.forEach((exchange) => {
//     const option = document.createElement("option");
//     option.value = exchange;
//     option.text = exchange;
//     select.add(option);
// });

// Fetch exchanges when the page loads
// Ensure that the fetchExchanges function is defined or remove this line if not needed
// fetchExchanges();

// async function getPrice() {
//     const symbolInput = document.getElementById('symbolInput').value;
//     const response = await fetch(`http://127.0.0.1:8000/getprice?symbol=${symbolInput}`,{
//         method:'POST'
//     });
//     const result = await response.json();
//     displayResult(result);
// }

// async function getAllSymbols() {
//     const response = await fetch('http://127.0.0.1:8000/getsymbols');
//     const result = await response.json();
//     displaySymbolList(result);
// }

// function displayResult(result) {
//     const resultContainer = document.getElementById('resultList');
//     resultContainer.innerHTML = `<tr><td>${result.symbol}</td><td> ${result.last_price}</td></tr>`;
// }

// function displaySymbolList(symbolList) {
//     const symbolListContainer = document.getElementById('symbolsList');
//     symbolListContainer.innerHTML = '';
//     symbolList.forEach(symbol => {
//         const listItem = document.createElement('tr');
//         listItem.innerHTML = `<td>${symbol.symbol}</td><td>${symbol.last_price}</td>`;
//         symbolListContainer.appendChild(listItem);
//     });
// }



// // async function getSymbols() {
// //     const symbolsTable = document.getElementById('symbolsTable');
// //     const symbolsList = document.getElementById('symbolsList');
// //     symbolsTable.style.display = 'table';
// //     symbolsList.innerHTML = '';

// //     const response = await fetch('http://127.0.0.1:8000/getsymbols');
// //     const data = await response.json();

// //     data.forEach(symbol => {
// //         const row = document.createElement('tr');
// //         row.innerHTML = `<td>${symbol.symbol}</td><td>${symbol.last_price}</td>`;
// //         symbolsList.appendChild(row);
// //     });
// // }

// // async function getPrice() {
// //     const symbolInput = document.getElementById('symbolInput').value.toUpperCase();
// //     const response = await fetch('http://127.0.0.1:8000/getprice?symbol=${symbol}', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({symbol: symbolInput}),
// //     });

// //     const data = await response.json();
// //     const resultList = document.getElementById('resultList');
// //     const resultTable = document.getElementById('resultTable');
    
// //     resultList.innerHTML = `<tr><td>${data.symbol}</td><td>${data.last_price}</td></tr>`;
// //     resultTable.style.display = 'table';
// // }
