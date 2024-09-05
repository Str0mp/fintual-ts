export class Stock {
  private prices: { [date: string]: number };

  constructor(prices: { [date: string]: number }) {
    this.prices = prices;
  }
  public price(date: string): number {
    return this.prices[date] || 0;
  }
}
