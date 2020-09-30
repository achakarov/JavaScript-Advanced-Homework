function sortArray(input) {

    input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
          }
          return a.length - b.length;
    }).forEach(element => {
        console.log(element); 
    });
    
}

sortArray(
    ['test', 
    'Deny', 
    'omen', 
    'Default']
    
)