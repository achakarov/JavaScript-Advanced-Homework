function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            let newTask = { id, taskName, priority };
            if (priority === 'high') {
                this.tasks.unshift(newTask);
            } else {
                this.tasks.push(newTask);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }
            if (this.tasks[0].priority === 'high') {
                let name = this.tasks[0].taskName;
                this.tasks.shift();
                return name;
            } else {
                let name = this.tasks[this.tasks.length - 1].taskName;
                this.tasks.pop();
                return name;
            }
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let output = 'Tasks, that need to be completed:\n';
            for (const task of this.tasks) {
                output += `${task.id}: ${task.taskName} - ${task.priority}\n`;
            }

            return output.trim();
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience;
        }

        learn(years) {
            return this.experience += years;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {
            let hasTask = this.tasks.find(task => task.id === taskId);

            if (hasTask["priority"] == 'low') {
                hasTask["priority"] = 'high'; 
                let indexHigh = this.tasks.indexOf(hasTask);
                this.tasks = this.tasks.splice(indexHigh, 1);
                this.tasks.unshift(hasTask);  
            } else {
                hasTask["priority"] = 'low'; 
                let indexLow = this.tasks.indexOf(hasTask);
                this.tasks = this.tasks.splice(indexLow, 1);
                this.tasks.push(hasTask);   
            }

            return hasTask; 
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}


let classes = solveClasses();
// const developer = new classes.Developer("George", "Joestar");
// console.log(developer.addTask(1, "Inspect bug", "low"));
// console.log(developer.addTask(2, "Update repository", "high"));
// console.log(developer.doTask());
// console.log(developer.reviewTasks());
// console.log(developer.getSalary());

// const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
// console.log(junior.learn(5));
// console.log(junior.getSalary());
// console.log(junior.addTask(1, "Inspect bug", "low"));
// console.log(junior.reviewTasks());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);



