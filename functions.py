import ccxt

class ExchangePriceChecker:
    def __init__(self, exchange_id):
        # Initialize the exchange object based on the provided exchange_id
        self.exchange = getattr(ccxt, exchange_id)()

    def get_symbol_price(self, symbol):
        try:
            # Fetch ticker for the specified symbol
            ticker = self.exchange.fetch_ticker(symbol)
            
            # Print the current price for the specified symbol
            print(f"Symbol: {symbol}, Last Price: {ticker['last']}")
        except ccxt.NetworkError as e:
            print(f"Network Error: {e}")
        except ccxt.ExchangeError as e:
            print(f"Exchange Error: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")

    def fetch_all_symbols(self):
        try:
            # Fetch all symbols supported by the exchange
            symbols = self.exchange.fetch_tickers()

            # Print the current prices for all symbols
            for symbol, ticker in symbols.items():
                print(f"Symbol: {symbol}, Last Price: {ticker['last']}")
        except ccxt.NetworkError as e:
            print(f"Network Error: {e}")
        except ccxt.ExchangeError as e:
            print(f"Exchange Error: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")

    def main(self):
        # Fetch and print all symbols and their prices
        self.fetch_all_symbols()

        # Get user input for the symbol
        user_symbol = input("Enter the symbol you want to check (e.g., BTC/USDT): ")

        # Call the function to get and print the price for the user-specified symbol
        self.get_symbol_price(user_symbol)

if __name__ == "__main__":
    # Get user input for the exchange
    user_exchange = input("Enter the exchange you want to use '): ")

    # Create an instance of the ExchangePriceChecker class for the specified exchange
    price_checker = ExchangePriceChecker(user_exchange)

    # Call the main method to execute the functionality
    price_checker.main()
