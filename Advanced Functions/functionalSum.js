function functionalSum(x) {

    function sum(a) {
        x += a;
        return sum;
    }

    sum.toString = () => x;

    return sum;
}