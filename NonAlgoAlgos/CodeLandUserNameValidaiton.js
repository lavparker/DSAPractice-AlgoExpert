// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true
// Tags
// searchingstring manipulationsearchingregular expressionCodelandfree

function CodelandUsernameValidation(str) {
  let regAlph = /[a-zA-Z]/;
  let regex = /[a-zA-Z0-9_]/;

  if(!(str.length >= 4 )&& !(str.length <= 25)){
    return false;
  }

  for(let i = 0; i < str.length; i++){
    let char = str[i];

    if(!regAlph.test(str[0])){
      console.log("regAlph")
      return false;
    }
    if(!regex.test(char)){
      console.log("regex")
      return false;
    }
    if(str[str.length - 1] === "_"){
      console.log("str.length")

      return false;
    }

  }

  return true;

}

// keep this function call here
console.log(CodelandUsernameValidation("aa_"));
console.log(CodelandUsernameValidation("u__hello_world123"));

//if str.length >= 4 && str.length <= 25
//let alpha = 'abcdefghijklmnopqrstuvwxyz'; ...if alpha.includes(str[0])
//let regex = /[a-zA-Z0-9_]/ for each char, if regex.includes(char[i])
//if char[str.length - 1] !== "_"
//if all of these conditions pass, return true, else, false
