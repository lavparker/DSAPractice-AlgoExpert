// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
// The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input
// array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2

// Sample Output
// [1, 3, 4, 2, 2, 2, 2, 21] // the numbers 1, 3, and 4 could be ordered differently

function moveElementToEnd(array, toMove) {
  let holder = null; 
  let loops = array.length - 1; 
  let ticker = 0; 

  while(ticker <= loops){
    for(let i = 0; i < array.length; i++){
      let num = array[i]; 
      if(num === toMove){
        holder = num; 
        array.splice(i, 1);
        array.push(holder);
        holder = null; 
        
      }
  }
    ticker++
  }
 
  return array; 
  
}
//initialize a variable called holder; 
//loop through the array. 
//if the num is === to toMove,
//holder is equal to num 
//array.splice(i, 1); splice the array at that position 
// push the holder into the end of the array
//set holder equal to null; 
//return array 

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
