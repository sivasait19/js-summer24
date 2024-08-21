/*1. Write a constructor function for Animal with
a. Properties: color, numOfEyes, numOfLegs
b. Methods: eat, sleep - The methods can just console.log(<some message>).
c. Then create 3 different instances of the Animal class and assign them to different
variables*/

function Animal(color, numOfEyes, numOfLegs) {
    this.color = color;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;

    this.eat = function() {
        console.log("The animal is eating.");
    };

    this.sleep = function() {
        console.log("The animal is sleeping.");
    };
}

const dog = new Animal("brown", 2, 4);

console.log(dog);
dog.eat();
dog.sleep();

const bird = new Animal("red", 2, 2);

console.log(bird);
bird.eat();
bird.sleep();

const spider = new Animal("black", 8, 8);

console.log(spider);
spider.eat();
spider.sleep();



/*2. Write a constructor function for Bird with
a. Properties: name, color, ableToFly
b. Methods eat, sleep, getName and setName for retrieving and setting the name
property*/

function Bird(name, color, ableToFly) {
    this.name = name;
    this.color = color;
    this.ableToFly = ableToFly;

    this.eat = function() {
        console.log("The bird is eating.");
    };

    this.sleep = function() {
        console.log("The bird is sleeping.");
    };

    this.getName = function() {
        return this.name;
    };

    this.setName = function(newName) {
        this.name = newName;
    };
}

const parrot = new Bird("Parrot", "green", true);
const penguin = new Bird("Penguin", "black and white", false);
const eagle = new Bird("Eagle", "brown", true);

parrot.eat();
parrot.sleep();
console.log(parrot.getName());

penguin.setName("King Penguin");
console.log(penguin.getName());


/*1. Use the ES6 “class” keyword to create the Animal class with:
a. Properties: name, color, numOfEyes, numOfLegs
i. Make sure you list out the properties first then assign default values to
them in your constructor function
b. Methods: eat, sleep, walk, run
i. The methods can just console.log() with your own custom string.*/

class Animal {
    constructor(name = '', color = '', numOfEyes = 2, numOfLegs = 4) {
        this.name = name;
        this.color = color;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
    }

    eat() {
        console.log("The animal is eating.");
    }

    sleep() {
        console.log("The animal is sleeping.");
    }

    walk() {
        console.log("The animal is walking.");
    }

    run() {
        console.log("The animal is running.");
    }
}

const lion = new Animal('Lion', 'golden', 2, 4);
console.log(lion);
lion.eat();
lion.sleep();
lion.walk();
lion.run();


/*2. Use the Animal class you’ve created as a parent class to create a Bird class with:
a. Properties: canFly
i. Make sure to pass the other properties onto the parent constructor
b. Methods: fly, peck
i. The methods can just console.log() with your own custom string.*/

class Animal {
    constructor(name = '', color = '', numOfEyes = 2, numOfLegs = 4) {
        this.name = name;
        this.color = color;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
    }

    eat() {
        console.log("The animal is eating.");
    }

    sleep() {
        console.log("The animal is sleeping.");
    }

    walk() {
        console.log("The animal is walking.");
    }

    run() {
        console.log("The animal is running.");
    }
}

class Bird extends Animal {
    constructor(name, color, numOfEyes, numOfLegs, canFly = true) {
        super(name, color, numOfEyes, numOfLegs);
        this.canFly = canFly;
    }

    fly() {
        console.log("The bird is flying.");
    }

    peck() {
        console.log("The bird is pecking.");
    }
}


const crow = new Bird('crow', 'green', 2, 2, true);
console.log(parrot);
parrot.eat();
parrot.fly();
parrot.peck();


/*3. Use the Animal class you’ve created as parent class to create a Dog class with:
a. Properties: breed (dog breed)
i. Make sure the other animal properties are in the constructor and gets
passed onto the parent constructor

b. Methods: bark, dig
i. The methods can just console.log() with your own custom string.*/


class Animal {
    constructor(name = '', color = '', numOfEyes = 2, numOfLegs = 4) {
        this.name = name;
        this.color = color;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
    }

    eat() {
        console.log("The animal is eating.");
    }

    sleep() {
        console.log("The animal is sleeping.");
    }

    walk() {
        console.log("The animal is walking.");
    }

    run() {
        console.log("The animal is running.");
    }
}

class Dog extends Animal {
    constructor(name, color, numOfEyes, numOfLegs, breed = '') {
        super(name, color, numOfEyes, numOfLegs);
        this.breed = breed;
    }

    bark() {
        console.log("The dog is barking.");
    }

    dig() {
        console.log("The dog is digging.");
    }
}


const bulldog = new Dog('Bulldog', 'brindle', 2, 4, 'Bulldog');
console.log(bulldog);
bulldog.eat();
bulldog.bark();
bulldog.dig();
