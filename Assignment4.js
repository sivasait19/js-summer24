/*1.  Print numbers from 1 to 10*/

for (let i = 1; i<= 10 ; i++){
    console.log(i);
}

/*2Print numbers from 10 to 1*/

for (let i = 10 ; i>=1; i --){
    console.log(i);
}

/*3 Print odd numbers from 1 to 50*/

for (let i = 1; i<=50;i++){
    if(i%2 !==0){
console.log(i);
    }
}

/*4Print even numbers from 1 to 100*/

for(let i = 0; i <=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
/*5Numbers to be printed between 40 to 60*/

for(let i =40 ; i < 60 ; i++){
    console.log(i);
}
/*6Numbers printed between 80 to 100*/

for(let i =80 ; i < 100 ; i++){
    console.log(i);
}

/*7. If you enter ‘1’ – it should print numbers between 1 to 11
If you enter ‘2’- it should print numbers between 2 to 12
If you enter ‘3’- it should print numbers between 3 to 13
If you enter ‘4’-it should print numbers between 4 to 14
If you enter ‘5’-it should print numbers between 5 to 15*/

let input = 6; // Replace 3 with any number between 1 and 5


    for (let i = input; i <= input + 10; i++) {
        if (input >= 1 && input <= 5) {
        console.log(i); // Print numbers between input and input+10
    
} else {
    console.log("Please enter a number between 1 and 5");
}
    }

/*8. If the value is entered ‘123’, alert should be ‘One Two Three’
If the value is entered ‘124’, alert should be ‘One Two Four’
If the value is entered ‘125’, alert should be ‘One Two Five’
If the value is entered ‘126’, alert should be ‘One Two Six’
If the value is entered ‘127’, alert should be ‘One Two Seven’*/

let value = '123';
let result = "";

switch(value) {
    case '123': result = 'one two three';break;
    case '124': result ='one two four';break;
    case '125': result ='one two five';break;
    case '126': result ='one two six';break;
    case '127': result ='one two seven';break;
}
console.log(result);

/*9. If I enter ‘1’, alert should be ‘One’
If I enter ‘2’, alert should be ‘Two’
If I enter ‘3’, alert should be ‘Three’
If I enter ‘4’, alert should be ‘Four’
If I enter ‘5’, alert should be ‘Five’
Else, please enter a valid number.*/

let values = 1;
let results = "";

switch(values) {
    case 1: results = 'one ';break;
    case 2: results ='two ';break;
    case 3: results ='Three';break;
    case 4: results='Four';break;
    case 5: results ='Five';break;
}
console.log(results); 

/*10. If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’
If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’
If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’
If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’
If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’*/

let inputs = 1;
if( inputs<=10){
    console.log("the number is between '1 and 10' ");
}
else if( inputs >=11 && inputs <=20){
    console.log("the number is between '11 and 20' ");
}
else if(inputs >=21 && inputs <=30){
    console.log("the number is between '21 and 30' ");
}
else if(inputs >=31 && inputs <=40){
    console.log("the number is between '31 and 40' ");
}
else if(inputs >=41 && inputs <=50){
    console.log("the number is between '41 and 50' ");
}

/*11. If the number is less than 50 or greater than 200, alert the number is a valid number
If the number is between 50 and 200, alert this is a good number.
Else, alert ‘It is an invalid number’.*/

let num = 50;
if(num< 50 || num>200){
    console.log("The number is a valid number");
}
else if(num>=50 && num<200){
    console.log("This is a good number");
}
else("it is a invalid number");

/*12. If I enter ‘One’, alert ‘1’
If I enter ‘Two’, alert ‘2’
If I enter ‘Three’, alert ‘3’
If I enter ‘Four’,alert ‘4’
If I enter ‘Five’, alert ‘5’*/


let value2 = 'One';
let result2 ; 
switch(value2){
case 'One' :
     result2 = 1; break;
case 'Two' :
     result2 = 2; break;
case 'Three' :
    result2 = 3; break;
case 'Four' : 
result2 = 4; break;
case 'Five' :
     result2 =  5; break;

}
 console.log(result2);
/*13. If I enter numbers Six to Ten, please enter a proper number. Anything else, please enter a valid number.*/

let n = 6;
if(n>= 6 && n<=10){
    console.log("please enter a proper number ");
}
else if ( n< 6 && n>10){
console.log("please enter a valid number")
}
