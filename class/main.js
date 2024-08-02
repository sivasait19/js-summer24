//camelCasing - we will be using in javaScript
// JS ( interpreted language , interpreter program) ->interpreter executes JS line by line
// garbage collection : for memory management 
// intro to JS

//JS: Dynamically typed language , flexible
// Java , TypeScript (superset of JS) statically typed language 
// in java we specify the variable type
// in JS we use var 

var myFirstVariable = "hello world"; // assignment operator (=)
console.log(myFirstVariable);//print
console.log(typeof myFirstVariable);

// data types are data formats
// text - string
//number - number
// truth/false - boolean
//an unassigned/undeclared variable - undefined
// explicit declaration of absence of vaslue - null

myFirstVariable = 5;// reassign to a number
// blue words are reserved in JS
console.log(myFirstVariable);//print
console.log(typeof myFirstVariable);

// JS primitive data types : string , number , boolean , undefined , null
var myName = "siva";//string
var myAge = 24;//number
var active = true;//boolean (true,false)
var membership;// undefined declare variable , but did not "assign" a value
var dataCreated = null; // null is also a primitive data type used as falsy/zero value for all data types ,not just "objects"
dataCreated = {};

console.log(typeof active);
console.log(typeof membership);
console.log(typeof dataCreated);

// other keywords for declaring variables 
let x = 5// let allows for re-assignment
const y = 10//

x = "siva";
console.log(typeof x);

//re declaring ( using keyword 'var' 'let' 'const' again) vs re assignment (only use '=')

