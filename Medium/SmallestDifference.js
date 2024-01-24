// Smallest Difference O
// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.
// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.
// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input
// arrayone = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 171

// Sample Output
// [28, 26]

function smallestDifference(arrayOne, arrayTwo) {
  let arrOne = arrayOne.map((num) => Math.abs(num)); 
  let arrTwo = arrayTwo.map((num) => Math.abs(num));
  let total = null; 
  let pair; 

  for(let i = 0; i < arrOne.length; i++){
    for(let j = 0; j < arrTwo.length; j++){
      let num1 = arrOne[i] > arrTwo[j] ? arrOne[i] : arrTwo[j]; 
      let num2 = arrOne[i] < arrTwo[j] ? arrOne[i] : arrTwo[j]; 
      let difference = num1 - num2; 

      if(total === null || difference < total){
        total = difference
   
        pair = [arrOne[i], arrTwo[j]]
      }

      
    }
  }

  return pair; 
}

//create a new array for both array 1 and array 2  and by looping through each array and pushing in the absolute value of each number. 
//maybe challenge myself to use .map() here? 
//create a variable called "Total" and set it equal to null. 
//initialize a variable called pair
//create a nested loop of each array, if arr[0] > arr[1], then num1 = arr[0], if arr[1] > arr[0], then num1 = arr[1]
//create a variable called difference find the difference of num1 - num2
// if the total is === to null || if the total is > difference, total is equal to difference
//pair is equal to the num1 and num2 with the difference closest to 0; 
//return pair

//Edge cases: 

//how should I return the pair?
//what happens if the number is === to 0? 

// ANOTHER APPROACH: 

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let smallestDiff = Infinity; 
  let pairs; 

  for(let i = 0; i < arrayOne.length; i++){
    for(let j = 0; j < arrayTwo.length; j++){
      let num1 = arrayOne[i];
      let num2 = arrayTwo[j]; 

      let diff = Math.abs(num1 - num2); 

      if(diff < smallestDiff){
        smallestDiff = diff; 
        pairs = [num1, num2]
      }
      
    }
  }
  // console.log(pairs)
  return pairs; 
  
}

//create a variable called smallestDiff and set it equal to 0; 
//loop through arrayOne
//loop thorugh arrayTwo
//create a variable called num2 = arrayTwo[j]; 
//create a variable num1...if arrayOne is > then that is num1, if arrayTwo is greater,  then that is num1
//create a variable called diff and set it equal to the abs value of num1 - num2
// if it is less than smallestDiff, then smallestDiff is equal to diff 
//return smallestDiff 

//SECOND ATTEMPT 

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let smallestDiff = null; 
  let pairs; 

  for(let i = 0; i < arrayOne.length; i++){
    for(let j = 0; j < arrayTwo.length; j++){
      let num1 = arrayOne[i]; 
      let num2 = arrayTwo[j];

      let compDiff = Math.abs(num1 - num2)

      if (smallestDiff === null || smallestDiff > compDiff){
        smallestDiff = compDiff
        pairs = [num1, num2]
      }
    }
  }
  return pairs; 
}


//goal: to find the pair of numbers that have the smallest difference 
//create a variable called smallestDiff = set it equal to null; 
//create a variable called pairs
// create outer loop with arrayOne 
//create inner loop called arrayTwo 
//num1 = arrayOne[i]
//num2 = arrayTwo[j]
//compDiff = Math.abs(num1 - num2)
//if smallestDiff === null or smallestDiff is > compDiff 
//smallestDiff = compDiff and pairs is = to num1 and num2 
//return pairs 

// time complexlity: O(n^2) - n being the number of loops 
// space complexity: O(1) - the number or arrays don't change 
