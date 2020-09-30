function smallestTwoNumbers (numbers) {

    // let sortedNumbers = numbers.sort((a,b) => a-b).slice(0,2); 
    // console.log(sortedNumbers)
    console.log(numbers.sort((a,b) => a-b).slice(0,2)); 
}

smallestTwoNumbers(
    [30, 15, 50, 5]
)