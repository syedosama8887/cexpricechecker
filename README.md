# Exchange Price Checker

A FastAPI service and JavaScript interface for looking up cryptocurrency ticker prices through CCXT.

## Overview

The API lists three exchange identifiers, selects an exchange, fetches its symbols and last prices, and looks up the last price of a supplied symbol. The web files are in `services/`.

## Tech stack

Python, FastAPI, Uvicorn, CCXT, HTML, CSS, and JavaScript.

## Project structure

- `main.py` — API routes and application startup.
- `services/PriceCheckerService.py` — CCXT ticker requests.
- `services/index.html`, `script.js`, `style.css` — web interface.
- `requirements.txt` — Python dependencies.

## Installation and usage

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

On Windows, activate with `.venv\Scripts\activate`. The API runs at `http://127.0.0.1:8000`; interactive documentation is at `/docs`. Open `services/index.html` in a browser for the interface. Browser requests depend on how the frontend API URL is configured in `services/script.js`.

## API endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/exchanges` | List `binance`, `bybit`, and `mexc`. |
| POST | `/setexchange/{exchange_id}` | Select the process-wide exchange. |
| GET | `/getsymbols` | Fetch symbols and last prices for the selected exchange. |
| POST | `/getprice?symbol=BTC/USDT` | Fetch the last price of a symbol; `symbol` is a query parameter. |

Select an exchange before calling `/getsymbols` or `/getprice`. The selected exchange is held in one global process variable, so simultaneous users can affect each other. Exchange availability and network responses depend on CCXT and the exchange.

## Environment variables

The current public-price API does not read environment variables. The CCXT service accepts optional API credentials in code, but the API does not supply them. Do not commit credentials or private exchange configuration.

No standalone license file was found; this README does not assign a license.
