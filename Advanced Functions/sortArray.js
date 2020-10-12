function sortArray(array, command) {

    let sortFunction = {
        asc: function (arr) {
            return arr.sort((a, b) => a - b);
        },
        desc: function (arr) {
            return arr.sort((a, b) => b - a);
        },

    }

    let result = sortFunction[command];
    return result(array);
}

sortArray([14, 7, 17, 6, 8], 'asc')