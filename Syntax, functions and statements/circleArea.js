function circleArea(argOne) {
    let type = typeof argOne; 

    if (type == "number") {
        let radius = Math.PI * Math.pow(argOne,2); 
        console.log(radius.toFixed(2)); 
    } else {
     
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(
    5
)