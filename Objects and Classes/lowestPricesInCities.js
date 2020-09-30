// function lowestPricesInCities(input) {

//     let result = {};
//     input.forEach(line => {
//         let [townName, product, price] = line.split(" | ");
//         price = Number(price);

//         if (!result[product]) {
//             result[product] = {};
//         }
//         if (!result[product][townName]) {
//             result[product][townName] = {};
//         }
//         result[product][townName] = price;
//     });

//     let resultArray = Object.entries(result);
//     for (let i = 0; i < resultArray.length; i++) {
//         let prod = resultArray[i][0];
//         let pricesArray = Object.entries(resultArray[i][1]);
//         pricesArray = pricesArray.sort((a, b) => {
//             return b[1] - a[1];
//         });
//         console.log(`${prod} -> ${pricesArray[0][1]} (${pricesArray[0][0]})`);
//     }


// }


function lowestPricesInCities(arr) {
    let productPrices = {};
 
    for (const line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!productPrices.hasOwnProperty(product)) {
            productPrices[product] = {};
        }
        productPrices[product][town] = price;
    }
 
    Object.entries(productPrices).forEach(el => {
        let [product, townsPrices] = el;
        let lowest = Object.entries(townsPrices).sort((a,b) => a[1] - b[1])[0];
 
        console.log(`${product} -> ${lowest[1]} (${lowest[0]})`);
 
    });
 
}

lowestPricesInCities([
    'Sofia City | Audi | 10',
    'Varna | Audi | 100',
    'Sofia City | Audi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 100',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
])