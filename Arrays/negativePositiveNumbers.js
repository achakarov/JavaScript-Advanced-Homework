function negativePositiveNumbers(input) {

    let resultArray = []; 

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0){
            resultArray.unshift(input[i]); 
        } else {
            resultArray.push(input[i]); 
        }
    }
    for (const number of resultArray) {
        console.log(number); 
    }
}

negativePositiveNumbers(
    [7, -2, 8, 9]
)