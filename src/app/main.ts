import { Portfolio } from '../models/Portfolio';
import { Stock } from '../models/Stock';

const stockA = new Stock({
  '1990-01-01': 100,
  '1995-01-01': 120,
  '2000-01-01': 150,
});

const stockB = new Stock({
  '1990-01-01': 200,
  '1995-01-01': 220,
  '2000-01-01': 250,
});

const stockC = new Stock({
  '1990-01-01': 80,
  '1993-01-01': 110,
  '1999-01-01': 130,
});

const stockD = new Stock({
  '1990-01-01': 50,
  '1992-01-01': 70,
  '2000-01-01': 100,
});

const portfolio = new Portfolio([stockA, stockB, stockC, stockD]);

const startDate = '1990-01-01';
const endDate = '2000-01-01';

console.log(`Beneficio del portafolio entre ${startDate} y ${endDate}:`, portfolio.profit(startDate, endDate));
console.log(`Retorno anualizado entre ${startDate} y ${endDate}:`, portfolio.annualizedReturn(startDate, endDate));
