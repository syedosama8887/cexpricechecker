# Exchange Price Checker

## Overview

This project is a simple web application that enables users to check cryptocurrency prices on various exchanges. It utilizes a FastAPI backend for handling requests and fetching data from cryptocurrency exchanges using the [CCXT library](). The frontend is implemented in JavaScript, providing an interactive user interface to get real-time prices.

## Features

* Get the last price of a specific symbol on a selected exchange.
* Retrieve a list of symbols along with their last prices on a chosen exchange.
* Set the exchange and fetch symbols for easy navigation.

## Prerequisites

Before running the application, ensure you have the following:

* Python (3.7 or higher)
* FastAPI (`pip install fastapi`)
* CCXT library (`pip install ccxt`)
* Uvicorn (`pip install uvicorn`)

## Web Application

* Enter a symbol and select an exchange.
* Click "Set Exchange and Get Symbols" to fetch symbols.
* Click "Get Price" to retrieve the last price for the entered symbol.
* The symbols and results are displayed in a tabular format for easy readability.

## Customization

* Manually add options to the exchange dropdown by modifying the `exchanges` array in the JavaScript file.

## Notes

* Ensure that your selected exchanges are supported by the CCXT library.
* Additional error handling and features can be added based on your use case.

## Credits

* [CCXT library]()
* [FastAPI]()

## License

This project is licensed under the [MIT License]().
