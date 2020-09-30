function sameNumbers(number) {

    let sum = 0;
    let lastDigit = number % 10;
    let notEqualCount = 0;

    while (number / 10 > 0) {
        let digit = number % 10;
        sum += digit;

        if (digit !== lastDigit) {
            notEqualCount++;
        }

        lastDigit = digit;
        number = Math.floor(number / 10);
    }

    if (notEqualCount === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(sum);
}

sameNumbers(
    1234
)