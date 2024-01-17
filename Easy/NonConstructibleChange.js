function nonConstructibleChange(coins) {
  // Write your code here.

  coins.sort((a, b) => a - b)

  let currentChangeCreated = 0; 

  for(let i = 0; i < coins.length; i++){
    let coin = coins[i]

    if(coin > currentChangeCreated + 1){
      return currentChangeCreated + 1
     
    }
     currentChangeCreated += coin 
  }
  return currentChangeCreated + 1;
}

//loop through all of the positive integers to see what we can't create // brute force 
//sort the input array
//create a variable called change and set it equal to 0; this means that we can make from 1..k change
//we're goign to iterate through our sorted input array. if i can make change with the first num, we can add it to change
//go to the next value, add the next to what's in the array (second conditional), 
//if the coin is less than or equal to the change + 1, we know that we can make all of the change previously; 

// if v > c+ 1, we can't make change; if v < c+1, we can make the change; 


// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;