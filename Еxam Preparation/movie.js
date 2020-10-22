class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.soldTickets = 0;
    }

    newScreening(date, hall, description) {
        let hasScreening = this.screenings.find(screening => screening.date === date && screening.hall === hall);
        if (hasScreening) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        let screening = { date, hall, description };
        this.screenings.push(screening);
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        let hasScreening = this.screenings.find(screening => screening.date === date && screening.hall === hall);
        if (!hasScreening) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        this.soldTickets += soldTickets;
        let currentProfit = soldTickets * this.ticketPrice;
        this.totalProfit += currentProfit;

        let index = 0;
        for (let i = 0; i < this.screenings.length; i++) {
            if (this.screenings[i].date === date && this.screenings[i].hall === hall) {
                index = i;
                break;
            }
        }
        
        this.screenings.splice(index, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        let output = `${this.movieName} full information:`;
        output += `\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.soldTickets}`;
        if (this.screenings.length > 0) {
            output += `\nRemaining film screenings:`;
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (const el of this.screenings) {
                output += `\n${el.hall} - ${el.date} - ${el.description}`;
            }

        } else {
            output += `\nNo more screenings!`;
        }
        return output.trim();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

