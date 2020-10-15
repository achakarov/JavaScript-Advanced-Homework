function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
 
Person.prototype.speak = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
}
 
function Student(firstName, lastName, course) {
    Person.call(this, firstName, lastName); // super(firstName, lastName)
 
    this.course = course;
}
 
Student.prototype = Object.create(Person.prototype)
 
Student.prototype.getGrades = function() {
    console.log(`my grade is 6 in my course: ${this.course}`);
}
 
function createNew(constructor, ...args) {
    // Create new object
    let newObject = {};
 
    // Set prototype
    Object.setPrototypeOf(newObject, constructor.prototype)
 
    // Call constructor with context
    constructor.apply(newObject, args);
 
    // Return new object
    return newObject;
}
 
let student = new Student('Pesho', 'Georgiev', 'JS Advanced');
// let person2 = createNew(Student, 'Pesho', 'Georgiev')
 
student.getGrades();
console.log(student.course);
 
 
let numbers = [1,2,3,4];
let result = Array.prototype.join.call(numbers)
console.log(result);