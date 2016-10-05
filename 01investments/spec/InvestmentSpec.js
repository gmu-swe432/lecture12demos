describe("Investment", function() {
  var stock, investment;

  beforeEach(function() {
    stock = {symbol: "AAPL", sharePrice: 4};
    investment = {
      stock: stock,
      shares: 100,
      sharePrice: 20
    };
  });

  it("should be of a stock", function() {
    expect(investment.stock).toBe(stock);
  });
  
});