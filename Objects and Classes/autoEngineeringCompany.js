function autoEngineeringCompany(input) {

    let carsList = {};
    input.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(" | ");
        if (!carsList[carBrand]) {
            carsList[carBrand] = {};
        }

        if (!carsList[carBrand][carModel]) {
            carsList[carBrand][carModel] = [];
            carsList[carBrand][carModel][0] = 0;
        }

        carsList[carBrand][carModel][0] += Number(producedCars);

    });
    Object.entries(carsList).forEach(([carBrand, carModel]) => {
        console.log(carBrand);
        let models = Object.entries(carModel);
        models.forEach(([carModel, carProduced]) => {
            console.log(`###${carModel}` + " -> " + `${carProduced[0]}`);
        });
    });
}

autoEngineeringCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
)