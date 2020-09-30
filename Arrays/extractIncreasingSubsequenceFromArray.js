function extractIncreasingSubsequenceFromArray(input) {

    let max = Number.MIN_SAFE_INTEGER;
    input.forEach(num => {
        if (max <= num) {
            max = num;
            console.log(num);
        }
    });


    // input = input.filter(num => {
    //     if (max <= num) {
    //         max = num;
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }).forEach(x => console.log(x)); 



    

    // let output = input.reduce((acc, current) => {
    //     if (current >= max) {
    //         max = current;
    //         acc.push(max);
    //     }
    //     return acc;
    // }, []);

    // console.log(output.join("\n"));
}

extractIncreasingSubsequenceFromArray(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
)