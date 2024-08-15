//1. Factorial Calculation: Write a function calculateFactorial(n) that takes a number n as input and returns the factorial of n.
//a. Ex: input: 5; output: 120 (5 * 4 * 3 * 2 * 1)

function calculateFactorial(n) {
     let result = 1;

    for (let i = 1; i <= n; i++) { 
        result *= i; 
    }

    return result; 
}

console.log(calculateFactorial(5)); 

/*2. Array Sum: Write a function sumArray(arr) that takes an array of numbers arr as
input and returns the sum of all the numbers in the array.*/

function sumArray(arr) {
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }

    return sum; 
}


//give [ "h" , "e", "l" , "l" , "o"] , cannot create a new Array



console.log(sumArray([0, 1, 2, 3, 4, 5]));

/*3. Reverse String: Write a function reverseString(str) that takes a string str as input
and returns the reverse of the string.
a. Ex: input: “hello world”; output: “dlrow olleh”*/

function reverseString(str) {
    let reversed = ''; 

    for (let i = str.length - 1; i >= 0; i--) { 
        reversed += str[i]; 
    }

    return reversed; 
}

console.log(reverseString("hello world"));

/*4. Count Vowels: Write a function countVowels(str) that takes a string str as input
and returns the number of vowels (a, e, i, o, u) in the string.
a. Ex: input: “hello world”; output: 3 because “e”, “o”, “o” are vowels in the
string*/

function countVowels(str) {
    let count = 0; 
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) { 
        if (vowels.includes(str[i])) { 
            count++; 
        }
    }

    return count; 
}


console.log(countVowels("hello world")); 




module student 
cost student1: {
    firstName: "Anne";
    email: "anne@gmail.com";
    phone: "111-111-1111";
    age: 15;
    isActive:true,
    address: {
        mailimgAdress: "123 Main St",
        shippingAddress: "321 Wall St",
    };
    enrollment: string["cs101", " math1a"];
    gradyear: null;
    student1.gpa = 4.0;
    student1.gpa = 3.5;
    console.log(student1);
}



const myFunc = function() {}
function myFunc1() {}

//variable can store a function as well
// const myFunc = function() {}
//function myFunc() {}

student1.getEmail = function(){
    return this.Email ;
};

//write method for returning the mailing address
// try this with aroow method
