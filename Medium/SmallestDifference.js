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