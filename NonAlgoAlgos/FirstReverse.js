// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I
// Tags
// string manipulationfree


function FirstReverse(str) {
  // let reversed = "";
  // for(let i = str.length - 1; i >= 0; i--){
  //   let char = str[i];
  //   reversed += char;
  // }
  // return reversed;

  if(str.length <= 1){
    return str;
  }

  return FirstReverse(str.slice(1))+ str[0]

}

// keep this function call here
console.log(FirstReverse(readline()));

//ITERATIVE APPROACH
//create a variable called reversed and set it equal to an empty string
//loop through str backwards
//create a var called char and set it equal to str[i];
//reversed += char
//return reversed

//RECURSIVE APPROACH
//basecase str.length <= 1;
//if str.length
//return str

//

//let reversed = ""
// reversed += FirstReverse(str)
