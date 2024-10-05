/*1. Write a program to prompt the user for age. If age is less than or equal to (<=) 14, alert "Not Allowed". 
If age is greater than 14 and less than 65, alert "Regular Price". If age is equal to 50, alert "Special discount".*/

let age = 25;
if(age <= 14){
    console.log("Not Allowed");
}
else if( age >14 && age<65){
    console.log("Regular Price");
}
else if(age === 50){
    console.log("Special Discount");
}


/*2. Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1". If age is equal to 21, alert "coupon 2". If age is equal to 30, alert "coupon 3".
 If age is equal to 50, alert "coupon 4". Else alert "No coupon".*/

 let age1 = 14;
 if(age1 === 14){
    console.log("coupon1");
 }
 else if(age1 === 21){
    console.log("coupon2");
 }
 else if(age1 === 50){
    console.log("coupon3");
 }
 else("No coupon")

/*3. Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). 
Based on the value entered by the user, display a special dish.
 For example, if the user enters Monday then alert "Mondays, We serve Pasta". 
If the user enters Friday then alert "Fridays, we serve Tacos".*/

let day = "Monday";
if(day === "Monday"){
    console.log("Mondays We serve pasta");
}
else("Fridays we serve Tacos")

/*4. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
Based on the value entered, display the movie that won the Oscars for that year. Just write this for last 8 years. 
If he enters beyond last 8 years then alert the user to enter between 2003-2012.*/

let year = 2010;
if( year >=2003 && year<=2012){
    console.log("won oscar");
}
else("enter between 2003-2012")

/*5. 5. Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc). 
Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.*/

let Grade = "A";
if (Grade ==="A+"){
    console.log("Excellent");
}
else if(Grade === "A"){
    console.log("Good job");
}
else if(Grade === "A-"){
    console.log("Average");
}
