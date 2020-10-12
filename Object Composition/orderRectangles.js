function orderRectangles(input) {

    let result = input.map(([width, height]) => {

        return {
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                // let result = rect.area() - this.area();
                // return result == 0 ? rect.width - this.width : result;
                return rect.area() - this.area() || rect.width - this.width;
            }
        }
    });
 
    result.sort((a, b) => {
        return a.compareTo(b);
    });

    return result;
}

orderRectangles(
    [[1, 20], [20, 1], [5, 3], [5, 3]]
)