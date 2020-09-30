function wordsUppercase(input) {

    let words = [];

    let pattern = /\w+/g;
    let match = pattern.exec(input);
    while (match) {
        words.push(match[0].toUpperCase());

        match = pattern.exec(input)
    }

    console.log(words.join(", "));

}

wordsUppercase(
    'Hi?'
) 