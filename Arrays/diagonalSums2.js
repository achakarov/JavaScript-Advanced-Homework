function diagonalSums2(input) {

    let primarySum = 0;
    let secondarySum = 0;
    let elementIndex = 0;

    input.forEach((row) => {

        primarySum += row[elementIndex];
        secondarySum += row[row.length - 1 - elementIndex];
        elementIndex++;
    });

    console.log(primarySum + " " + secondarySum);
}

diagonalSums2(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)