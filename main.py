from functions import ExchangePriceChecker

if __name__ == "__main__":
    # Get user input for the exchange
    user_exchange = input("Enter the exchange you want to use (e.g., 'bybit', 'binance'): ")

    # Create an instance of the ExchangePriceChecker class for the specified exchange
    price_checker = ExchangePriceChecker(user_exchange)

    # Call the main method to execute the functionality
    price_checker.main()
