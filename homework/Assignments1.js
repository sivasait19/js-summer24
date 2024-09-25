/*1. Write a program to prompt the user for age. If age is less than or equal to (<=) 14, alert "Not Allowed". If age is greater than 14 and less than 65, alert "Regular Price".
 If age is equal to 50, alert "Special discount".*/

 let age = prompt("Enter your age:");

if (age <= 14) {
  alert("Not Allowed");
} else if (age > 14 && age < 65) {
  if (age == 50) {
    alert("Special discount");
  } else {
    alert("Regular Price");
  }
} else {
  alert("Regular Price");
}


/*2. Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1". If age is equal to 21, alert "coupon 2". If age is equal to 30, alert "coupon 3".
 If age is equal to 50, alert "coupon 4". Else alert "No coupon".*/
 let age1 = prompt("Enter your age:");

if (age == 14) {
  alert("coupon 1");
} else if (age1 == 21) {
  alert("coupon 2");
} else if (age1 == 30) {
  alert("coupon 3");
} else if (age1 == 50) {
  alert("coupon 4");
} else {
  alert("No coupon");
}

/*3. Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). Based on the value entered by the user, display a special dish. For example, if the user enters Monday then alert "Mondays, We serve Pasta".
 If the user enters Friday then alert "Fridays, we serve Tacos"*/

 let day = prompt("Enter a day of the week:");

switch(day.toLowerCase()) {
  case "monday":
    alert("Mondays, We serve Pasta");
    break;
  case "friday":
    alert("Fridays, We serve Tacos");
    break;
  case "wednesday":
    alert("Wednesdays, We serve Sushi");
    break;
  default:
    alert("No special dish today");
}


