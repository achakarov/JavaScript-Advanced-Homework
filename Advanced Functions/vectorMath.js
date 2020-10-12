vectorObj = {

    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: (vector, multiplyValue) => vector.map(num => num * multiplyValue),
    length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,
};

console.log(vectorObj.add([1, 1], [1, 0]));
console.log(vectorObj.multiply([3.5, -2], 2));
console.log(vectorObj.length([3, -4]));
console.log(vectorObj.dot([1, 0], [0, -1]));
console.log(vectorObj.cross([3, 7], [1, 0]));
