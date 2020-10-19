function arrayMap2(arr, func) {

    return arr.reduce(function (acc, x) {
        acc.push(func(x));

        return acc;
    }, []);
}

let mappedArray = arrayMap2([1, 2, 3], x => x * 2)