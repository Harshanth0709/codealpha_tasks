stocks = {
    "TCS": 3500,
    "INFY": 1600,
    "WIPRO": 280
}

portfolio_total = 0
portfolio = {}

print("Available Stocks:")
print(stocks)

while True:

    stock_name = input("\nEnter stock name (or 'done' to finish): ").upper()

    if stock_name == "DONE":
        break

    if stock_name in stocks:

        quantity = int(input("Enter quantity: "))

        investment = stocks[stock_name] * quantity

        portfolio_total += investment

        portfolio[stock_name] = quantity

        print("Added:", investment)

    else:

        print("Stock not found!")

print("\n----- Portfolio Summary -----")

for stock, quantity in portfolio.items():
    print(stock, ":", quantity, "shares")

print("\nTotal Portfolio Value =", portfolio_total)