function populationInTowns(input) {

    let result = {};
    input.forEach(line => {
        let [town, population] = line.split(" <-> ");
        population = Number(population);
        if (!result[town]) {
            result[town] = 0;
        }
        result[town] += population
    });

    Object.entries(result).forEach(city => {
        console.log(`${city[0]} : ${city[1]}`);
    });
}

populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Sofia <-> 2345000',
    'Las Vegas <-> 1000000'
])