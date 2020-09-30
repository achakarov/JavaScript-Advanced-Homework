function equalNeighbors(input) {

    let pairs = 0;
    input.forEach((row, i) => {
        row.forEach((element, j) => {
            if (element === row[j + 1]) {
                pairs++;
            }

            if (input[i + 1] && element === input[i + 1][j]) {
                pairs++;
            }
        });
    });
    console.log(pairs);
}


equalNeighbors(
    // [['2', '3', '4', '7', '0'],
    // ['4', '0', '5', '3', '4'],
    // ['2', '3', '5', '4', '2'],
    // ['9', '8', '7', '5', '4']]   

  [  [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)
// || (input[i][j] === input[i][j + 1])
