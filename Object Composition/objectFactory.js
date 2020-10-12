function objectFactory(input){

    let propList = JSON.parse(input); 
    let result = propList.reduce((acc, x) => ({...acc, ...x}), {}); 
    return result; 
}

objectFactory(
    `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`
)