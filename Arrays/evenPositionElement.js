function evenPositionElement(input) {

    let resultArray = []; 

    for (let i = 0; i < input.length; i++) {

        if (i % 2 == 0) {
            resultArray.push(input[i]); 
        }
    }
    console.log(resultArray.join(" ")); 
}

evenPositionElement(
    ['20', '30', '40']
)