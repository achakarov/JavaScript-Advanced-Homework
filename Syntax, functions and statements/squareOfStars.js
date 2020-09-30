function sqareOfStars(num) {

    if (num !== undefined) {
        for (let i = 0; i < num; i++) {
            let result = "";

            for (let j = 0; j < num; j++) {
                result += "*" + " "
            }
            console.log(result);
        }

    } else {
        for (let i = 0; i < 5; i++) {
            let result = "";

            for (let j = 0; j < 5; j++) {
                result += "*" + " "; 
            }
            console.log(result);
        }
    }
}

sqareOfStars(
    3
)