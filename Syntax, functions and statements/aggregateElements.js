function aggregateElements(input) {

    let result = 0; 

    for (let number of input) {
        result += number; 
    }
    console.log(result); 
    result = 0; 
    for (let inverseNumber of input) {
        result += 1/inverseNumber; 
    }
    console.log(result); 

    result = ""; 
    for (let number of input) {
        result += number; 
    }
    console.log(result); 
}

aggregateElements(
    [1, 2, 3]
)