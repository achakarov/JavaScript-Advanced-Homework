function greatestCommonDivider(firstNum, secondNum) {

    let lowerNumber = Math.min(firstNum, secondNum);
    let greatestCommonDivisor = 0; 

    for (let i = 1; i <= lowerNumber; i++) {

        if (firstNum % i == 0 && secondNum % i == 0) {
            greatestCommonDivisor = i; 
        }
    }
    console.log(greatestCommonDivisor); 
}

greatestCommonDivider(
    2154, 458
)