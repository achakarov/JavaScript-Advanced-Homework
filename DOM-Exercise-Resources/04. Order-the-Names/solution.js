function solve() {

    let input = document.getElementsByTagName("input")[0];
    let button = document.getElementsByTagName("button")[0];

    let database = {};
    let index = 0;
    for (let symbol = 65; symbol <= 90; symbol++) {
        let letter = String.fromCharCode(symbol);
        database[letter] = index;
        index++;
    }

    button.addEventListener("click", () => {
        let array = document.getElementsByTagName("ol")[0].children;
        let currenName = input.value.toString()[0].toUpperCase() + input.value.slice(1).toLowerCase();
        let capitalLetter = currenName[0];

        if (database[capitalLetter] != undefined) {
            let currentIndex = database[capitalLetter];
            let currentElement = array[currentIndex];

            if (currentElement.innerText == "") {
                currentElement.innerText = currenName;
            } else {
                currentElement.innerText += ", " + currenName;
            }

        }
        input.value = "";
    });
}