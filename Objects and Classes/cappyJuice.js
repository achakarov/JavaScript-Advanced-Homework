function cappyJuice(input) {

    let totalJuiceQuantity = {};
    let juicesBottles = {};
    input.forEach(line => {
        let [product, quantity] = line.split(" => ");
        if (!totalJuiceQuantity[product]) {
            totalJuiceQuantity[product] = Number(quantity);
        } else {
            totalJuiceQuantity[product] += Number(quantity);
        }

        if (totalJuiceQuantity[product] >= 1000) {
            juicesBottles[product] = 0;
        }
    });

    Object.keys(totalJuiceQuantity).forEach(j => {
        if (juicesBottles[j] !== undefined) {
            juicesBottles[j] += Math.floor(totalJuiceQuantity[j] / 1000);
        }
    });

    Object.keys(juicesBottles).forEach(j => console.log(`${j} => ${juicesBottles[j]}`));
}

cappyJuice(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
)