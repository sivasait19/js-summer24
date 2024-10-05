/*1. Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1". If age is equal to 21, alert "coupon 2". 
If age is equal to 30, alert "coupon 3". If age is equal to 50, alert "coupon 4". Else alert "No coupon".
*/
let age ;
switch(age){
   case  14:
    console.log("coupon 1");
    break;
    case 21:
        console.log("coupon 2");
        break;
        case 30:
        console.log("coupon 3");
        break;
        case 50:
            console.log("coupon 4");
            break;
        default:
            console.log("No coupon");
            break;
}

/*2. Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). 
Based on the value entered by the user, display a special dish. For example, if the user enters Monday then alert "Mondays, We serve Pasta".
 If the user enters Friday then alert "Fridays, we serve Tacos".*/
 let day = "Monday";
 switch(day){
    case "Monday":
        console.log("Monday , we serve Pasta");
        break;
    case "Friday":
        console.log("Friday, we serve Tacos ");
        break;
 }


/*3. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
Based on the value entered, display the movie that won the Oscars for that year. Just write this for last 8 years.
 If he enters beyond last 8 years then alert the user to enter between 2003-2012.*/


let year = 2019 ;
if (year >= 2003 && year <=2012){
switch(year){
    case 2011:
        console.log("akhanda");
        break;
    case 2012:
        console.log("veera");
        break;
    case 2010:
        console.log("bhagavanth");
        break;
    case 2009:
        console.log("asurudu");
        break;
    default:
        console.log("please enter year between 2003 and 2012");
        break;
}
}


else {
    console.log("Please enter a year between 2003 and 2012."); 
}


/*4. Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc). 
Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc*/

let Grade = "A";
switch(Grade){
    case "A+":
        console.log("Excellent");
        break;
    case "A":
        console.log("Good Job");
        break;
    case "A-":
        console.log("Average");
        break;
    case "B":
        console.log("Work Hard");
        break;
}

