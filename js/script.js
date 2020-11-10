`use strict`
      // Ціна першого товару
const productBread = 15.678,
      // Ціна другого товару
      productWine = 123.965,
      // Ціна третього товару
      productCheese = 90.2345,
      // Сума всіх товарів
      sumOfProductsPrice = productBread + productWine + productCheese, 
      // Сума всіх товарів без дробних чисел
      sumOfProductsPriceRounded = Math.floor(productBread) + Math.floor(productWine) + Math.floor(productCheese),
      // Здача покупцю
      restOfPay = Number((500 -  sumOfProductsPrice).toFixed(2)),
      // % Знижки
      discount = Math.round(Math.random() * 100),
      // Сума самої знижки 
      sumOfDiscount = Number((sumOfProductsPrice/100 * discount).toFixed()),
      // Середнє значення цін
      averageValueOfPrices = Number((sumOfProductsPrice/3).toFixed(2)),
      // Сума, яку повинен заплатити покупець зі знижкою
      sumToPayWithDiscount = Number((sumOfProductsPrice - sumOfDiscount).toFixed(2)),
      // Чистий прибуток
      cleanProfit = Number((sumOfProductsPrice - (sumOfProductsPrice/2) - sumOfDiscount).toFixed(2));
    // Початкове значення змінної для додавання boolean стосовно парності суми
let evenOrOddSumProduct = null;

// Додавання boolean значення для змінної evenOrOddSumProduct
if(sumOfProductsPriceRounded%2 === 0) {
    evenOrOddSumProduct = true;
} else {
    evenOrOddSumProduct = false;
}

console.log(`Максимальне число: ${Math.max(productBread, productCheese, productWine)};`);

console.log(`Мінімальне число: ${Math.min(productBread, productCheese, productWine)};`);

console.log(`Вартість всіх товарів: ${sumOfProductsPrice};`);

console.log(`Сума товарів округлена до сотень: ${Math.round(Math.floor(sumOfProductsPriceRounded/100))*100};`);

console.log(`Сума всіх товарів є парним числом? - ${evenOrOddSumProduct};`);

console.log(`Ваша здача з 500 грн становить: ${restOfPay} грн.;`);

console.log(`Середнє значення цін становить: ${averageValueOfPrices} грн.;`);

console.log(`Ваша сума до оплати зі знижкою становить: ${sumToPayWithDiscount} грн.`);

console.log(`Наш чистий прибуток складає: ${cleanProfit} грн.`);

console.log(`Advanced:

Максимальне число: ${Math.max(productBread, productCheese, productWine)};
Мінімальне число: ${Math.min(productBread, productCheese, productWine)};
Вартість всіх товарів: ${sumOfProductsPrice};
Сума товарів округлена до сотень: ${Math.round(Math.floor(sumOfProductsPriceRounded/100))*100};
Сума всіх товарів є парним числом? - ${evenOrOddSumProduct};
Ваша здача з 500 грн становить: ${restOfPay} грн.;
Середнє значення цін становить: ${averageValueOfPrices} грн.;
Ваша сума до оплати зі знижкою становить: ${sumToPayWithDiscount} грн;
Наш чистий прибуток складає: ${cleanProfit} грн.`);