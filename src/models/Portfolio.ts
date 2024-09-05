import { Stock } from "./Stock";

export class Portfolio {
  private stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }

  public profit(startDate: string, endDate: string): number {
    return this.stocks.reduce((totalProfit, stock) => {
      console.log("🚀 ~ Portfolio ~ returnthis.stocks.reduce ~ stock:", stock);
      const startPrice = stock.price(startDate);
      console.log(
        "🚀 ~ Portfolio ~ returnthis.stocks.reduce ~ startPrice:",
        startPrice
      );
      const endPrice = stock.price(endDate);
      console.log(
        "🚀 ~ Portfolio ~ returnthis.stocks.reduce ~ endPrice:",
        endPrice
      );

      if (startPrice === undefined || endPrice === undefined) {
        throw new Error(
          `Precio no encontrado para las fechas dadas: ${startDate} o ${endDate}`
        );
      }

      return totalProfit + (endPrice - startPrice);
    }, 0);
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
