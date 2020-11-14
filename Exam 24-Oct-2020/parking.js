class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];

    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error('Not enough parking space.');
        }

        let newCar = { carModel, carNumber, payed: false };
        this.vehicles.push(newCar);
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let currentCar = this.vehicles.find(car => car.carNumber === carNumber);
        if (!currentCar) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (currentCar.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let index = this.vehicles.indexOf(currentCar);
        this.vehicles.splice(index, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let currentCar = this.vehicles.find(car => car.carNumber === carNumber);
        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (currentCar.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            currentCar.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber) {
        let paymentStatus = '';
        // let currentCar = this.vehicles.find(car => car.carNumber === carNumber);
        
        if (carNumber == undefined) {
            let output = `The Parking Lot has ${this.capacity} empty spots left.\n`;
            let sortedVehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (const vehicle of sortedVehicles) {
                if (vehicle.payed == true){
                    paymentStatus = 'Has payed';
                } else {
                    paymentStatus = 'Not payed'; 
                }
                output += `${vehicle.carModel} == ${vehicle.carNumber} - ${paymentStatus}\n`;
            }
            return output.trim();

        } else {
            let currentCar = this.vehicles.find(car => car.carNumber === carNumber);
            if (currentCar.payed == true){
                paymentStatus = 'Has payed';
            } else {
                paymentStatus = 'Not payed'; 
            }
            return `${currentCar.carModel} == ${currentCar.carNumber} - ${paymentStatus}`;
        }
    }
}


const parking = new Parking(12);

console.log(parking.addCar("AVolvo t600", "TX3691CA"));
console.log(parking.addCar("CVolvo 200", "TX3691BA"));
console.log(parking.addCar("BMW t600", "B3691CA"));
console.log(parking.capacity)
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.capacity)
