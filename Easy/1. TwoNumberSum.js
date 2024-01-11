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

hello world 

