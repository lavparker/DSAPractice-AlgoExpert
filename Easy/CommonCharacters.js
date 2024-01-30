function commonCharacters(strings){
  let common = [];
  let fstWrd = strings[0];
  let restStr = strings.slice(1);

  for(let i = 0; i < fstWrd.length; i++){
    let letter = fstWrd[i];
    if(sameChar(restStr, letter) && !common.includes(letter)){
      common.push(letter);
    }
  }

  return common;
}

function sameChar(restStr, letter){
  let counter = 0;

  for(let i = 0; i < restlength; i++){
    if(restStr[i].includes(letter)){
      counter += 1
    }
  }
  return counter === restStr.length;
}

//create a variable and set it equal to an empty array (common)
//create a variable called fstWrd and set it equal to the first string strings[0]
//create a variable called restArr  and set it equal to the rest ofthe string strings.slice(1)
//need 2 separate loops 1 for the first string (string[0]) and one for the array of strings; //you could also use a helper method
//loop through the first string.
//use a helper method and invoke it with restStr, letter.
//create a variable called counter set it = to 0 to keep track to make sure it's equal to the lenght meaning each words includes the char
//take the letter that you've iterated to and check that each element in the array .includes() in the other string
//if true for every string common.push the letter
//return common

// Do not edit the line below.
exports.commonCharacters = commonCharacters;
