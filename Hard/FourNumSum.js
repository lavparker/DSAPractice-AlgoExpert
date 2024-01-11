// Four Number Sum 
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.
// If no four numbers sum up to the target sum, the function should return an empty array.
// Sample Input
// array = [7, 6, 4, -1, 1, 2]
// targetSum = 16
// Sample Output
// [[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently

function fourNumberSum(array, targetSum) {
 

  let allPairSums = {}; 
  let quadruplets = [];

  for(let i = 0; i < array.length -1; i++){
    for(let j = i + 1; j < array.length; j++){
      let currentSum = array[i] + array[j]
      let difference = targetSum - currentSum; 
      if(allPairSums[difference]){
        for (const pair of allPairSums[difference]){
          quadruplets.push([...pair, array[i], array[j]])
        }
      }
    }
    for(let k = 0; k < i; k++){
      let currentSum = array[i] + array[k]; 
      if(!(allPairSums[currentSum])){
        allPairSums[currentSum] = [[array[k], array[i]]]
      }else {
        allPairSums[currentSum].push([array[k], array[i]])
      }
    }
  }
  return quadruplets
}

//initialize an empty hash and set it equal to {} this is where you will put your pairs 
//iterate through the array using a nested loop and take the sum of all of the pairs makeing the key the sum and the value the the list of array pairs equal to that sum. 
//i.e. {6: [[4, 2], [7, -1]]}
// we have to be carful not to double count quadruplets or pairs ; 
// to avoid this we can do one for loop and two inner for loops that will be used to not double count quadruplets
// for the first for loop we'll iterate through the entire array 
//the second for loop, that will iterate through all of the numbers that come after the currentnumber; for all of those nums, well generate the sum of the two nums and we'll check if the differece between the target and the current sum are equal. 
//if they are not equal then we will not add the sum to the hash table yet and then we will iterate through all numbers before the currentnum and for each of those numbers you'll generate a "big number" and these sums will be the ones we store in the hash table and use
//that will allow us to not duplicate our quadruplets 
//the third for loop, 
// Do not edit the line below.