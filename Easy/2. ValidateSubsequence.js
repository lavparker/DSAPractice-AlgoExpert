// Validate Subsequence
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 41, and so do the numbers [2, 4] . Note that a single number in an array and the array itself are both valid subsequences of the array.
// Sample Input
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// Sample Output
// true


// Instead of comparing arrays directly, you should compare their content. You can do this by converting both arrays to strings using JSON.stringify() and then comparing the resulting strings.

function isValidSubsequence(array, sequence) {
  let seqArr = [];

  for(let i = 0; i < sequence.length; i++){
    if(array.indexOf(sequence[i]) === -1){
      return false
    }else{
      seqArr.push(array.indexOf(sequence[i]))

    }
  }

  let sortedArr = seqArr.sort((a, b) => a - b);
  // let sortedSet = new Set(sortedArr);
  // let sortedSetArr = Array.from(sortedSet);
  console.log("sortedSetArr ", sortedSetArr, "seqArr ", seqArr)

  return JSON.stringify(sortedSetArr) === JSON.stringify(seqArr);
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

//need to determine if the second array (sequence), is a subsequence of the first one(subsequence);

//create a variable called seqArry and set it equal to an empty array

//loop thrugh sequence array.
//use .indexOf to find the index of the number in the array
//if indexOf returns -1 return false.
//if index of returns a number > -1, push it into seqArray
//once all of the nums are pushed.
//create a variable called sortedArr and set it equal to the sorted version of the seqArr
//return true if the sorteArr is equal to the seqArr
//else false 
