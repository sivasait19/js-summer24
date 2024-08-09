//Write a function called “add” that takes in 2 numbers and returns their added value

function add(num1, num2) {
    return num1 + num2;
  }
 let sum = add(2,3)
 console.log(sum);

 //Write a function called “divide” that takes in 2 numbers and returns the divided value

 function divide(num1 , num2) {
    return num1 / num2 ;
 }
  let value = divide(2,3);
  console.log(value);

  //Write a function called “convert” that takes in a fahrenheit value and converts it
//into celsius. The formula for conversion is : Celsius = (Fahrenheit - 32) * 5/9

function convert(fahrenheit) {
    return (fahrenheit -32)* 5/9 ;
}
let result = convert(41.3)
console.log(result);

//Write a function called “divisibleBy55” that takes in a number and will return
//either true or false to let us know whether the number is divisible by 55 or not.
//If a number is divisible by 55 that means that there are 0 remainders.

function divisibleBy55(num) {
    return num % 55 === 0;
  }
  
  // Example usage:
  let answer = divisibleBy55(110);
  console.log(result); 
  
   let answer1 = divisibleBy55(123);
  console.log(answer1); 

  // Write a function called “checkLength” that takes in a string and return a number
//indicating the string’s length.

function checkLength(string) {
    return string.length;
  }
  
  
  let length = checkLength("Siva Sai");
  console.log(length); 
  
  //Write a function called “concat” that takes in 2 strings and returns the
//concatenated string. Ex: “cat” and “dog” will return “cat dog”.

function concat(string1,string2){
    return string1 + " " + string2 ;
}

let result2 = concat("cat" , "dog");
console.log(result2);