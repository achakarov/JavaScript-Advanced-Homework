function roadRadar(input) {

    let speed = Number(input.shift());
    let road = input.shift();
    let difference = 0;
    let allowedSpeed = 0;
    let isAboveLimit = false; 

    switch (road) {

        case "motorway":
            allowedSpeed = 130;
            break;

        case "interstate":
            allowedSpeed = 90;
            break;

        case "city":
            allowedSpeed = 50;
            break;

        case "residential":
            allowedSpeed = 20;
            break;
    }
    if (speed > allowedSpeed) {
        isAboveLimit = true; 
    }
    difference = Math.abs(allowedSpeed - speed); 
    if (difference > 40 && isAboveLimit) {
        console.log("reckless driving "); 
    } else if (difference > 20 && isAboveLimit) {
        console.log("excessive speeding "); 
    } else if (difference > 0 && isAboveLimit) {
        console.log("speeding"); 
    }
}

roadRadar(
    [200, 'motorway']
)