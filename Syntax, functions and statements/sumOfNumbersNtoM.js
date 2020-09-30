function sumOfNumbersNtoM(n, m) {

    let numOne = Number(n); 
    let numTwo = Number(m);
    let result = 0; 

    for (let i = numOne; i <=numTwo; i++){
        result += i;
    }
    console.log(result);
}

sumOfNumbersNtoM(
    '1', '5' 
)