function timeToWalk(steps, stepLength, speedKmH) {

    let distanceMeters = steps * stepLength;
    let speedMpS = speedKmH / 3.6;

    let restCount = Math.floor(distanceMeters / 500);
    let restSeconds = restCount * 60;
    let totalSeconds = distanceMeters / speedMpS + restSeconds;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.ceil(totalSeconds % 60);
   
    console.log(`${fullNumber(hours)}:${fullNumber(minutes)}:${fullNumber(seconds)}`) ;
 
    function fullNumber(num){
 
        if (num < 10) {
            return '0' + num;
        }
        else{
           return '' + num;
        }
    }

}

timeToWalk(
    2564, 0.70, 5.5
)