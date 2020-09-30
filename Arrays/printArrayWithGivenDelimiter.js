function printArrayWithGivenDelimiter(input) {

    // let delimiter = input.pop(); 
    // console.log(input.join(delimiter)); 
    console.log(input.join(input.pop())); 
}
printArrayWithGivenDelimiter(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five',
        '-']
)