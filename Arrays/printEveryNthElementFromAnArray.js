function printEveryNthElementFromAnArray(input) {

     let n = Number(input.pop()); 

    //  for (let i = 0 ; i < input.length; i +=n) {
    //      console.log(input[i]); 
    //  }

     input.forEach((num, index) => {
         if (index % n == 0) {
             console.log(num); 
         }
     }); 
}

printEveryNthElementFromAnArray(
    ['5',
        '20',
        '31',
        '4',
        '20',
        '2']
)