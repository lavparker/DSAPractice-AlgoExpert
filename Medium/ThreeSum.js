// Three Number Sum
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
// If no three numbers sum up to the target sum, the function should return an empty array.


// Sample Input
// array = [12, 3, 1, 2, -6, 5, -8, 6]
// targetSum = 0
// Sample Output
// [I-8, 2, 61, 1-8, 3, 51, I-6, 1, 51]

function threeNumberSum(array, targetSum) {
  let sortedArr = array.sort((a, b) => a - b); 
  let triplets = []; 

  for(let i = 0; i < sortedArr.length - 2; i++){
    let num1 = sortedArr[i]
    let left = i + 1; //set left pointer to the index 
    let right = sortedArr.length - 1; //set right pointer to the index 
    while(left < right){
      let num2 = sortedArr[left]
      let num3 = sortedArr[right]
      let currentSum = num1 + num2 + num3; 

      if(currentSum === targetSum){
        triplets.push([num1, num2, num3])
        left++
        right--
      }else if(currentSum < targetSum){
        left++
      }else if (currentSum > targetSum){
        right--
      }
    }
  }
   return triplets; 
  
}

//sort array 
//use a left and a right pointer 
//iterate throught the array once starting at the beginning of the array 
//set a left pointer to the second num in the array 
//and set a right pointer to the last num in the array 
// currentSum = currentNum  + left + right 
//check if currentSum is equal to our final sum? If so, we'll push currentNum, left, and right into triplet array
//Note: this tells us ()if our sum is less than our target sum and since all of our number in the array are in acending sorted order, that tells us that the number at the left number is moved to the right, we're gruaranteed to have a bigger number, same if we move the right pointer to the left, the next num will be less than the original num. this is helpful because we know that the current sum is less than the target sum, and we want to move our pointers in a way that get us closer to our Target sum. we don't want to move both pointers at the same time however, because we might miss the sum and we want to try all possible combos that sum up to 0.   
// else move either the right pointer to the left or the left pointer to the right while left is < array.length and right is > array[0]; 
//return triplets 