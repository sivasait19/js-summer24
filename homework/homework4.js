/*1. Find Maximum Value in an Array:
Write a function findMax(arr) that takes an array of numbers arr as input and
returns the maximum value in the array.*/

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3, 9, 4, 5]));

// . reduce () method 

function findMax(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}




/*2. Check Palindrome:
Write a function isPalindrome(str) that takes a string str as input and returns true
if the string is a palindrome (reads the same forwards and backwards), and false
otherwise.
Reversing letters in a palindrome still gives you the same word.
Ex: “racecar” is a palindrome while “dog” is not a palindrome.*/

function isPalindrome(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}
console.log(isPalindrome("Siva"));
/*3. Count Characters:
Write a function countCharacters(str, char) that takes a string str and a character
char as input and returns the number of times char appears in str.*/
function countCharacters(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacters("Siva Sai", "i"));
/*4. Remove Duplicates from an Array:
Write a function removeDuplicates(arr) that takes an array arr as input and
returns a new array with duplicate elements removed, preserving the original
order.*/

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
/*5. Title Case Conversion:
Write a function toTitleCase(str) that takes a string str as input and returns a new
string where the first letter of each word is capitalized.
Hint: Look into other useful String methods you can use.*/

function toTitleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

console.log(toTitleCase("Siva Sai"));
// using .map() method

function toTitleCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase("hello world")); // Output: "Hello World"



/*6. Concatenate Arrays:
Write a function concatArrays(arr1, arr2) that takes two arrays arr1 and arr2 as
input and returns a new array that concatenates the elements of both arrays.*/

function concatArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}
console.log(concatArrays([1, 2], [3, 4]));

/*7. Find Longest Word:
Write a function longestWord(sentence) that takes a sentence as input and
returns the longest word in the sentence.*/

function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(longestWord("Gas Prices might come down"));
/*8. Reverse Array:
Write a function reverseArray(arr) that takes an array arr as input and returns a
new array with the elements in reverse order.
Do not use the reverse() method.  */

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// using .split() method

function reverseArray(arr) {
    const reversed = arr.slice().reverse(); 

    return reversed;
}


console.log(reverseArray([1, 2, 3, 4, 5])); 

//space
//time

let left = 0;
let right = str.length -1 ;
while (left < right) {
    if(str[left]  ! ==str[right])return false;
    left++;
    right--;
}
return true;