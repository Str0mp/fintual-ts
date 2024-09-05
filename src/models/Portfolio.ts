import { Stock } from "./Stock";

export class Portfolio {
  private stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }


  public profit(startDate: string, endDate: string): number {
    let totalProfit = 0;

    this.stocks.forEach((stock) => {
      const startPrice = stock.price(startDate);
      const endPrice = stock.price(endDate);

      totalProfit += endPrice - startPrice;
    });

    return totalProfit;
  }

  //todo: validar si es realmente lo que se solicita respecto a la formula
  public annualizedReturn(startDate: string, endDate: string): number {
    let profit = this.profit(startDate, endDate);

    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    const annualizedReturn = (profit / daysDiff) * 365;
    return annualizedReturn;
  }
}
