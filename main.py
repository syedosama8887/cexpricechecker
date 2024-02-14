from fastapi import FastAPI, HTTPException
from services import ExchangePriceChecker
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(description="Created By Osama Ahmed", version='1.0')
app.add_middleware(CORSMiddleware, allow_origins=["*"])

# Initialize price_checker as None, it will be updated based on user selection
price_checker = None

# Perform any startup initialization here
@app.on_event("startup")
async def startup_event():
    # You can include any startup initialization tasks here
    pass

# Endpoint to get the list of available exchanges
@app.get('/exchanges')
async def get_exchanges():
    return ["binance", "bybit", "mexc"]

# Endpoint to set the selected exchange
@app.post('/setexchange/{exchange_id}')
async def set_exchange(exchange_id: str):
    global price_checker
    price_checker = ExchangePriceChecker(exchange_id=exchange_id)

# Endpoint to get symbols for the selected exchange
@app.get('/getsymbols')
async def get_symbols():
    if price_checker is None:
        raise HTTPException(status_code=400, detail="Exchange not selected. Set exchange first.")
    return price_checker.fetch_all_symbols()

# Endpoint to get the price for a symbol in the selected exchange
@app.post('/getprice')
async def get_price(symbol: str):
    if price_checker is None:
        raise HTTPException(status_code=400, detail="Exchange not selected. Set exchange first.")
    
    result = price_checker.get_symbol_price(symbol)
    if 'error' in result:
        raise HTTPException(status_code=500, detail=result['error'])
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)


# from fastapi import FastAPI, HTTPException
# from services import ExchangePriceChecker
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI(description="Created By Osama Ahmed", version='1.0')
# app.add_middleware(CORSMiddleware,allow_origins=["*"])

# # Create an instance of the ExchangePriceChecker class
# price_checker = ExchangePriceChecker(exchange_id='binance')  # Specify your exchange here

# @app.get('/getsymbols')
# async def get_symbols():
#     return price_checker.fetch_all_symbols()

# @app.post('/getprice')
# async def get_price(symbol: str):
#     result = price_checker.get_symbol_price(symbol)
#     if 'error' in result:
#         raise HTTPException(status_code=500, detail=result['error'])
#     return result

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host='0.0.0.0', port=8000)
