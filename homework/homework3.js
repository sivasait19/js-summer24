/*1. Write a function that takes in an age (number). Check if the age is greater than or
equal to 65 or not. If it is equal to or greater than 65 return the string “Special
discount” otherwise return “Not Allowed”.*/

/* Steps:

Created a function that takes  age as a input .
Using  an if statement to check if the age is greater than or equal to 65.
Return "Special discount" if true, otherwise return "Not Allowed"*/

function checkAgeForDiscount(age) {
    if (age >= 65) {
        return "Special discount";
    } else {
        return "Not Allowed";
    }
}
console.log(checkAgeForDiscount(70));
/*2. Write a function that takes in an array of numbers and use the forEach() or map()
to multiply every number by 100. The function should return a new array with the
result. The original array should not be mutated.*/

/*Steps:

Create a function that accepts an array of numbers.
Use .map()  to iterate over each number.
Multiply each number by 100 and store the result in a new array.*/

function multiplyBy100(arr) {
    return arr.map(function(num) {
        return num * 100;
    });
}
const numbers = [1, 2, 3];
console.log(multiplyBy100(numbers)); // Output: [100, 200, 300]
console.log(numbers);                

/*3. Write a function that takes in an array of numbers and use the forEach() or map()
to multiply every number by 100 if the array provided to the function has a length
greater than 5. The function should return a new array with the result. The
original array should not be mutated.*/

function conditionalMultiplyBy100(arr) {
    if (arr.length > 5) {
        return arr.map(function(num) {
            return num * 100;
        });
    } else {
        return arr;
    }
}
const shortArray = [1, 2, 3];
const longArray = [1, 2, 3, 4, 5, 6];

console.log(conditionalMultiplyBy100(shortArray)); // Output: [1, 2, 3] (no change)
console.log(conditionalMultiplyBy100(longArray));  // Output: [100, 200, 300, 400, 500, 600]

/*4. Write a function that takes in an array of numbers and uses the forEach() or
map() to multiply every number by 100 only if the number is even - if the number
is odd then it will return the original number . The function should return a new
array with the result. The original array should not be mutated.*/

function multiplyEvensBy100(arr) {
    return arr.map(function(num) {
        if (num % 2 === 0) {
            return num * 100;
        } else {
            return num;
        }
    });
}

/*5. Write a function that takes in this array as input [154, 657, 564, 561, 154, 678,
    100, 154] and returns the number of times 154 occurred or existed in that array.*/

    function countOccurrences(arr, target) {
        let count = 0;
        arr.forEach(function(num) {
            if (num === target) {
                count++;
            }
        });
        return count;
    }
    const numbersArray = [154, 657, 564, 561, 154, 678, 100, 154];
console.log(countOccurrences(numbersArray, 154)); // Output: 3

    
    /*6. Write a function that takes in an argument function checkType(input) - if the input
is an array or javascript object then it returns the string “object” - otherwise it will
return the string “It’s something else”.*/

function checkType(input) {
    if (typeof input === 'object' && input !== null) {
        return "object";
    } else {
        return "It’s something else";
    }
}
console.log(checkType([1, 2, 3]));  
