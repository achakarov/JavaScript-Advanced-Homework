function rotateArray(input) {

    let count = Number(input.pop());
    for (let i = 0; i < count % input.length; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(" "));
}

rotateArray(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15']
)