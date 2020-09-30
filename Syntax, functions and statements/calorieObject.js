function calorieObject(input) {

    let obj = {}; 

    input.forEach((element, i) => {
        if (i % 2 === 0) {
            let product = input[i];
            let quantity = Number(input[i + 1]);
            obj[product] = quantity;
        }
    });
    console.log(obj); 
}

calorieObject(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
)