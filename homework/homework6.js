/*1. Write a function countWords(sentence) that takes a sentence as input and returns an
object where each key is a word and its value is the count of that word in the sentence.
Assume the sentence is a string of words separated by spaces.*/



function countWords(sentence) {
    const words = sentence.split(' ');
    const wordCount = {};
    words.forEach(word => {
       
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
           
            wordCount[word] = 1;
        }
    });
    
   
    return wordCount;
}

const sentence = "hello world hello";
const result = countWords(sentence);

console.log(result); 
for (let word in result) {
    console.log(`${word} occurred ${result[word]} times`);
}

/*2. Write a function updateInventory(inventory, newItems) that takes an inventory object
where the key is the item name and the value is the quantity, and an array of new items
to add to the inventory. The function should update the inventory with the new items and
return the updated inventory.*/

function updateInventory(inventory, newItems) {
    
    newItems.forEach(item => {
        
        if (inventory[item]) {
            inventory[item]++;
        } else {
           
            inventory[item] = 1;
        }
    });
    
    
    return inventory;
}

const inventory = {"apples": 2, "bananas": 1};
const newItems = ["apples", "oranges", "apples"];
console.log(updateInventory(inventory, newItems)); 

/*3. Grouping People by Age: Write a function groupPeopleByAge(people) that takes an
array of objects, where each object represents a person with properties name and age.
The function should return an object whereeach key is an age, and its value is an array
of names of people with that age.*/

function groupPeopleByAge(people) {
    
    const groupedByAge = {};
    
    
    people.forEach(person => {
        const age = person.age;
        const name = person.name;
        
        
        if (groupedByAge[age]) {
            groupedByAge[age].push(name);
        } else {
           
            groupedByAge[age] = [name];
        }
    });
    
    
    return groupedByAge;
}

const people = [
    { name: "John", age: 23 }, 
    { name: "Amy", age: 25 }, 
    { name: "Cameron", age: 23 }
];

console.log(groupPeopleByAge(people)); 


