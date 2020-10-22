function solveClasses() {

    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
            } else {
                this.events.push(title);
                return 'Event is added.';
            }
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            let output = `${this.name} hall - ${this.capacity}`;
            if (this.events.length > 0) {
                output += `\nEvents: ${this.events.join(', ')}`;
            }

            return output;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.events = [];
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + 'Аll screenings are over.';
        }

        toString() {
            let output = super.toString();
            return output + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
        }

        hallEvents(title, performers) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
            } else {
                this.events.push(title);
                this.title.performers = performers;
                return 'Event is added.';
            }
        }

        close() {
            return super.close() + 'Аll performances are over.';
        }

        toString() {
            let output = super.toString();
            if (this.events.length > 0) {
                output += `\nPerformers: ${this.performers}.`;
            }

            return output;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall,
    }
}



let classes = solveClasses();

let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close());

let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick'));
console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());

