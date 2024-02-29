function twoNumberSum(array, targetSum) {
  //if the array length is less than 2, return []
  //create empty array and call it pairs
  //nested loop,
  //outer loop, for let i = 0 ; i < array.length; i++
  //inner loop, for let j = i + 1; j < array.length; j++;
  //if the sum of arr[i] + arr[j] === targetSum, push the nums into the pairs array
  //return pairs
  if(array.length < 2){
    return []
  }

  let pairs = [];

  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === targetSum){
        pairs.push(array[i], array[j])
      }
    }
  }
  return pairs

}


//SECOND ATTEMPT

function twoNumberSum(array, targetSum) {
  let sums = [];

  for(let i = 0; i < array.length; i++){ //3
    let num1 = array[i];
    for(let j = i + 1; j < array.length; j++){ //5
      let num2 = array[j];
        // console.log("num1: ", num1, "num2: ", num2, "target ", targetSum)
      if(num1 + num2 === targetSum){
        sums.push(num1, num2)
      }

    }
  }

    return sums;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;


//create a variable called sums and set it equal to an empty array
//created a nested loop
//for each iteration, if num1 + num2 is equal to target sum,
//push the nums into sums array
//return sums 
