// Array Of Products O
// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
// In other words, the value at output [i] is equal to the product of every number in the input array other than input [i].
// Note that you're expected to solve this problem without using division.
// Sample Input
// array = [5, 1, 4, 2]
// Sample Output
// [8, 40, 10, 20]


// 8 is equal to 1 x 4 × 2

// // 40 is equal to 5 x 4 x 2

// // 10 is equal to 5 x 1 x 2

// // 20 is equal to 5 x 1 x 4


function arrayOfProducts(array) { 
  let multi = []; 
  
  if(array.length === 0){
    return []
  }

  if(array.length === 1 && array[0] === 0){
    return 0; 
  }

  for(let i = 0; i < array.length; i++){//[5, 1, 4, 2] array[i] = 1 
    let product = 1; 
    
      let j = i + 1; 
      while(j < array.length && i < array.length - 1){
        product *= array[j]
        j++
      }
    
      let k = i - 1
      while(k >= 0 && i > 0){
        product *= array[k]
        k--
      }
    
      multi.push(product)
      // i++
  }
  return multi; 
}

//each ele in the output array is === the product of every other num in the input array 

//create a variable called multi = []
//loop through array 
//initialize a variable called product and set it equal to 1; 
//create a pointer if idx !== idx 
// while idx < array.length - 1 product *= array[i] i ++
//while(idx > 0 product *= array[i] i-- )
//push that product into the array and iterate i++
//return multi[]




// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;