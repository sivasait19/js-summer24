/*1. Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1". If age is equal to 21, alert "coupon 2". If age is equal to 30, alert "coupon 3". If age is equal to 50, alert "coupon 4". Else alert "No coupon".*/
let age = prompt("Enter your age:");

switch (age) {
  case "14":
    alert("coupon 1");
    break;
  case "21":
    alert("coupon 2");
    break;
  case "30":
    alert("coupon 3");
    break;
  case "50":
    alert("coupon 4");
    break;
  default:
    alert("No coupon");
}

/*2. Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). Based on the value entered by the user, display a special dish. For example, if the user enters Monday then alert "Mondays, We serve Pasta". If the user enters Friday then alert "Fridays, we serve Tacos".*/

let day = prompt("Enter a day of the week:");

switch (day.toLowerCase()) {
  case "monday":
    alert("Mondays, We serve Pasta");
    break;
  case "tuesday":
    alert("Tuesdays, We serve Burgers");
    break;
  case "wednesday":
    alert("Wednesdays, We serve Sushi");
    break;
  case "thursday":
    alert("Thursdays, We serve Pizza");
    break;
  case "friday":
    alert("Fridays, We serve Tacos");
    break;
  case "saturday":
    alert("Saturdays, We serve BBQ Ribs");
    break;
  case "sunday":
    alert("Sundays, We serve Fried Chicken");
    break;
  default:
    alert("Invalid day entered.");
}

/*3. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). Based on the value entered, display the movie that won the Oscars for that year. Just write this for last 8 years. 
If he enters beyond last 8 years then alert the user to enter between 2003-2012.*/

let year = prompt("Enter a year between 2015 and 2022:");

switch (year) {
  case "2022":
    alert("Movie: CODA");
    break;
  case "2021":
    alert("Movie: Nomadland");
    break;
  case "2020":
    alert("Movie: Parasite");
    break;
  case "2019":
    alert("Movie: Green Book");
    break;
  case "2018":
    alert("Movie: The Shape of Water");
    break;
  case "2017":
    alert("Movie: Moonlight");
    break;
  case "2016":
    alert("Movie: Spotlight");
    break;
  case "2015":
    alert("Movie: Birdman");
    break;
  default:
    alert("Please enter a year between 2015 and 2022.");
}

/*4. Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc). 
Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.*/

let grade = prompt("Enter the grade (A+, A, A-, B, etc):");

switch (grade.toUpperCase()) {
  case "A+":
  case "A":
    alert("Excellent");
    break;
  case "A-":
  case "B+":
    alert("Good Job");
    break;
  case "B":
    alert("Average");
    break;
  case "C":
    alert("Needs Improvement");
    break;
  case "D":
    alert("Poor");
    break;
  default:
    alert("Invalid Grade");
}

