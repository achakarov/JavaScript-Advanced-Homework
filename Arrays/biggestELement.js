function biggestElement(input) {

    let newArray = []
    for (const row of input){
        for (const el of row) {
            newArray.push(el); 
        }
    }
    let sortedArray = newArray.sort((a,b) => b-a); 
    console.log(sortedArray[0]); 
}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]

)