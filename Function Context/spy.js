function spy(target, methodName) {

    let result = {
        count: 0,
    };

    let originalMethod = target[methodName];

    target[methodName] = function () {
        result.count++;

        return originalMethod.apply(target, arguments); // служебен обект с всички аргументи на функцията
    };

    return result;
}