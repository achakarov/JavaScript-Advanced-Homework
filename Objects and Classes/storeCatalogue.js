function storeCatalogue(input) {

    let result = {};
    input.forEach(line => {
        let [name, price] = line.split(" : ");
        price = Number(price);
        let capitalLetter = name[0];
        if (!result[capitalLetter]) {
            result[capitalLetter] = [];
        }

        let product = { name, price };
        result[capitalLetter].push(product);
    });

    let sortedByFirstLetter = Object.entries(result).sort((curr, next) => {
        return curr[0].localeCompare(next[0]);
    });

    for (let i = 0; i < sortedByFirstLetter.length; i++) {
        console.log(sortedByFirstLetter[i][0]);
        let sortByName = sortedByFirstLetter[i][1].sort((a, b) => a.name.localeCompare(b.name));
        sortByName.forEach(x => {
            console.log(`  ${x.name}: ${x.price}`);
        });
    }
}

storeCatalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
)