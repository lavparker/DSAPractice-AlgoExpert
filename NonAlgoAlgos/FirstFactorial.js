// First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320
// Tags
// recursionmath fundamentalsfree

function FirstFactorial(num) {

  // let fact = 1;

  // for(let i = 1; i <= num; i++){

  //   fact *= i;
  // }
  // return fact;

  if(num === 0 || num === 1){
    return num;
  }

  return num * FirstFactorial(num - 1)

}

// keep this function call here
console.log(FirstFactorial(readline()));

//ITERATIVE APPROACH
//create a var called fact and set it = 1;
// create a loop; that goes from 1 to num;
// and multiply i by fact
//return fact



//RECURSIVE APPROACH
//basecase: if num = 0, return 0; if num = 1 return 1

//return num * FirstFactorial(num - 1)
