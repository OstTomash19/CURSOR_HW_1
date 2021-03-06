const customersCash = 500;
const breadPrice = 15.678;
const winePrice = 123.965;
const cheesePrice = 90.2345;
const sumOfProductsPrice = breadPrice + winePrice + cheesePrice;
const sumOfProductsRoundedPrice = Math.floor(breadPrice) + Math.floor(winePrice) + Math.floor(cheesePrice);
const restOfPay = Number((customersCash -  sumOfProductsPrice).toFixed(2));
const discount = Math.floor((Math.random() * 100) + 1);
const sumOfDiscount = Math.round(sumOfProductsPrice/100 * discount);
const averageValueOfPrices = Number((sumOfProductsPrice/3).toFixed(2));
const sumToPayWithDiscount = Number((sumOfProductsPrice - sumOfDiscount).toFixed(2));
const cleanProfit = Number((sumOfProductsPrice - (sumOfProductsPrice/2) - sumOfDiscount).toFixed(2));
const evenOrOddSumProduct = sumOfProductsRoundedPrice%2 === 0;

console.log(`Advanced:\nМаксимальне число: ${Math.max(breadPrice, cheesePrice, winePrice)};
Мінімальне число: ${Math.min(breadPrice, cheesePrice, winePrice)};
Вартість всіх товарів: ${sumOfProductsPrice};
Сума товарів округлена до сотень: ${Math.round(Math.floor(sumOfProductsRoundedPrice/100))*100};
Сума всіх товарів є парним числом? - ${evenOrOddSumProduct};
Ваша здача з 500 грн становить: ${restOfPay} грн.;
Середнє значення цін становить: ${averageValueOfPrices} грн.;
Ваша сума до оплати зі знижкою становить: ${sumToPayWithDiscount} грн;
Наш чистий прибуток складає: ${cleanProfit} грн.`);