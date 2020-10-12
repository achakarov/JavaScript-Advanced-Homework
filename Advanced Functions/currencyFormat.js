function currencyFormatter(currencyFormatter) {

    return function (value) {
        return currencyFormatter(',', '$', true, value); 
    }
}




let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));

