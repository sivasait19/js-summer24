/*1. Basic Class Creation Problem: Create a class named Book that represents a book and
includes properties for title, author, and yearPublished. Add a method named
getSummary() that returns a string containing the title, author, and year published.*/

class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    getSummary() {
        return this.title + " by " + this.author + ", published in " + this.yearPublished + ".";
    }
}

// Example usage
const myBook = new Book('1984', 'George Orwell', 1949);
console.log(myBook.getSummary());


/*2. Define a class Rectangle that includes properties for width and height. Use a constructor
to initialize these properties.
a. Add a method calculateArea() to return the area of the rectangle
b. Add method calculatePerimeter() to return the perimeter of the rectangle*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 10);
console.log("Area:", myRectangle.calculateArea()); // Output: Area: 50
console.log("Perimeter:", myRectangle.calculatePerimeter()); // Output: Perimeter: 30

/*3) a. Create a base class Vehicle with properties like make, model, and year, and a
method getInfo(), which returns a string containing information about the vehicle.*/

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return this.year + " " + this.make + " " + this.model;
    }
}


const myVehicle = new Vehicle('Toyota', 'Corolla', 2020);
console.log(myVehicle.getInfo()); 

/*b. Create additional subclasses: Extend Vehicle with specific types of vehicles, for
example, Car and Truck.
i. Add specific properties or methods to these subclasses. For instance, a
Truck class might have a loadCapacity property, and a Car might have a
numDoors property.
ii. Demonstrate polymorphism by overriding a method in a subclass. For
instance, both Car and Truck could override getInfo() to include their
specific information.*/


class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getInfo() {
        return this.make + " " + this.model + " (" + this.numDoors + " doors)";
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, loadCapacity) {
        super(make, model, year);
        this.loadCapacity = loadCapacity;
    }

    getInfo() {
        return this.make + " " + this.model + " (Load: " + this.loadCapacity + " tons)";
    }
}

const myCar = new Car('Honda', 'Civic', 2022, 4);
console.log(myCar.getInfo()); 

const myTruck = new Truck('Ford', 'F-150', 2021, 3);
console.log(myTruck.getInfo()); 

/*4. Implement an Employee, CrewMember and Manager Class:

Note: All properties in these classes should be private (use # to make a property
private). Create methods to set and retrieve these properties.
a. Create an Employee class with
i. properties name, id, and email.
ii. Include methods for basic employee behavior.*/


class Employee {
    // Private properties
    #name;
    #id;
    #email;

    // Constructor to initialize the properties
    constructor(name, id, email) {
        this.#name = name;
        this.#id = id;
        this.#email = email;
    }

    // Method to set name
    setName(name) {
        this.#name = name;
    }

    // Method to get name
    getName() {
        return this.#name;
    }

    // Method to set id
    setId(id) {
        this.#id = id;
    }

    // Method to get id
    getId() {
        return this.#id;
    }

    // Method to set email
    setEmail(email) {
        this.#email = email;
    }

    // Method to get email
    getEmail() {
        return this.#email;
    }
}


const emp = new Employee('Alice', 101, 'alice@example.com');

console.log(emp.getName());  
console.log(emp.getId());    
console.log(emp.getEmail()); 

emp.setName('Bob');
console.log(emp.getName());  



/*b. Create another class called CrewMember that extends Employee.
i. CrewMember is a normal employee and should have a “manager”
property that references the manager object.
ii. Add methods to CrewMember for setting/getting the manager.*/

class CrewMember extends Employee {
    // Private property for manager
    #manager;

    
    constructor(name, id, email) {
        super(name, id, email); 
        this.#manager = null;  
    }

   
    setManager(manager) {
        this.#manager = manager;
    }

   
    getManager() {
        return this.#manager;
    }
}


const manager = new Employee('Sarah', 200, 'sarah@example.com'); 
const crewMember = new CrewMember('John', 102, 'john@example.com'); 

crewMember.setManager(manager); 
console.log(crewMember.getName() + "'s manager is " + crewMember.getManager().getName()); 

/*c. Then, create a Manager class that extends Employee.
i. Add a property “subordinates”, which is an array of Employee instances
that the manager supervises.
ii. Implement methods in Manager to add or remove employees from the
subordinates list.*/


class Manager extends Employee {
    #subordinates;

    constructor(name, id, email) {
        super(name, id, email);
        this.#subordinates = [];
    }

    addSubordinate(employee) {
        this.#subordinates.push(employee);
    }

    removeSubordinate(employee) {
        this.#subordinates = this.#subordinates.filter(sub => sub !== employee);
    }

    getSubordinates() {
        return this.#subordinates;
    }
}


const manager = new Manager('Alice', 200, 'alice@example.com');
const emp1 = new Employee('John', 101, 'john@example.com');
const emp2 = new Employee('Jane', 102, 'jane@example.com');

manager.addSubordinate(emp1);
manager.addSubordinate(emp2);

console.log(manager.getSubordinates().map(emp => emp.getName()));

manager.removeSubordinate(emp1);
console.log(manager.getSubordinates().map(emp => emp.getName()));

/*d. Use the classes to create a manager and 3 crew members.
i. Set all 3 crew members’ manager property to the manager instance.
ii. Add all 3 crew members to the manager’s subordinates list.*/

const manager = new Manager('Alice', 200, 'alice@example.com');

const crewMember1 = new CrewMember('John', 101, 'john@example.com');
const crewMember2 = new CrewMember('Jane', 102, 'jane@example.com');
const crewMember3 = new CrewMember('Doe', 103, 'doe@example.com');

crewMember1.setManager(manager);
crewMember2.setManager(manager);
crewMember3.setManager(manager);

manager.addSubordinate(crewMember1);
manager.addSubordinate(crewMember2);
manager.addSubordinate(crewMember3);

console.log(manager.getSubordinates().map(emp => emp.getName()));










