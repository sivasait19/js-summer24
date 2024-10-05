/*1. Write a program to print (in console) 1-30 numbers with a line break.*/

let i = 1; 
for(i=1;i<=30;i++){
    console.log(i);
}

/*2. Write a program to print numbers 1-10 in reverse order (like 10,9,8,7,6,....1) with a line break*/

let j=10;
for(j=10;j>=1;j--){
    console.log(j);
}

/*3. Write a program to print numbers from 12 to 33 and also at the end print the sum of all these numbers.*/

let sum = 0;
for(x=12;x<=33;x++){
    console.log(x);
    sum+=x;

}
console.log(sum);

/*4. Write a program to print (in console) 1-30 odd numbers with a line break*/

for (let y = 1; y <= 30; y++) {
    if (y % 2 !== 0) {  // Check if the number is odd
        console.log(y);
    }
}

/*5. Write a program to print (in console) 1-30 even numbers with a line break*/

for (let z = 0; z<=30 ; z ++){
    if( z % 2 === 0){
        console.log(z);
    }
}

/*6. Write a program to print 1-100 prime numbers.*/

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) { // Check divisibility by numbers less than or equal to num/2
        if (num % i === 0) {
            isPrime = false;
            break; // If divisible, it's not prime, so break the loop
        }
    }
    if (isPrime) {
        console.log(num); // Print if it's a prime number
    }
}
