
// given an array of fahrenheit temperatures , generate an array of celcius temp using .map()
//const fahrs = [0, 20, 40, 60, 80, 100, 120, 140];

//const celcius = fahrs.map(function(fahr) {
   // return (fahr - 32) * (5 / 9);
//});

//console.log( celcius);

//const arr = [1, 2, 3, 4, 5, 6];


//console.log("New array from .map():", newArray);
//console.log(arr);

//const arr1 = [1, 2, 3, 4, 5, 6];

//arr.forEach(function (element, index, array) {
  // console.log(arr1);
//});

//console.log("New array from for each:", arr1);
//console.log(arr1);

// for -loop vs Array.forEach()

//function find(target, array) {

  //  for (let i = 0; i < array.length; i++) {  // Use array.length instead of arr.length
    //    if (array[i] === target) {  // Check if the current element matches the target
      //      const element = array[i];
        //    console.log(element)
          //  if (element === target)
            //return i;  // Return the index if the target is found
        //}
    //}
    //return -1;  // Return -1 if the target is not found in the array
//}

//function findIndexWithBreak(target , array){
   // let indexToReturn = -1
    //for (let i = 0; i < array.length; i++) { 
     //   const element = array[i];
     //   console.log(element); // Use array.length instead of arr.length
      //  if (element === target) {  // Check if the current element matches the target
      //      indexToReturn =  i; // Return the index if the target is found
      //      break;                
     //   }
  //  }
  //  return indexToReturn ;

//}

//console.log("find:", find(5, arr));
//console.log("findIndexWithBreak:", findIndexWithBreak(5, arr));

/*function findEvenWithContinue(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 === 1) {
            // Skip odd numbers and continue to the next iteration
            continue;
        }
        // Log even numbers
        console.log(element);
    }
}*/

//terminate early with .foreach /.map 

const arr = [10, 20, 30, 40, 50];
const target = 30;

function findWithForEach(target, array) {
    let indexToReturn = -1;
    let found = false;

    array.forEach((element, index) => {
        {
            if (element === target) {
                indexToReturn = index;
                found = true; // Set flag to indicate target is found
            }
        }
    });

    return indexToReturn;
}
console.log("findWithForEach:", findWithForEach(target, arr));


/*function findWithForEach(target, array) {
    array.forEach((element, index) => {
        if (element === target) {
            return index; // This return only exits the callback, not the .forEach() loop or the outer function
        }
    });
    
    return -1; // This will be returned regardless of whether the target was found or not
}
console.log("findWithForEach:", findWithForEach(target, arr));*/