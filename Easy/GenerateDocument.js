// Generate Document
// You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true ; otherwise, it should return false.
// You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the
// document string. For example, if you're given characters = "abcabc" and
// document = "aabbccc" you cannot generate the document because you're missing one
// C .
// The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.
// Note: you can always generate the empty string ("").

//  Sample Input
// characters = "Bste!hetsi ogEAxpelrt × "
// document = "AlgoExpert is the Best!"
// Sample Output
// true

function generateDocument(characters, document) {
  // Write your code here.
  if (document.length === 0){
    return true;
  }

  characters = characters.split("")

  for(let i = 0; i < document.length; i++){
    let char = document[i];
    let charIdx = characters.indexOf(char)
    if(charIdx !== -1){
     characters.splice(charIdx, 1);
    }else{
      return false;
    }
  }
  return true
}

//return true if the string is empty
//loop through the document string;
//while i < document.length
//create a variable called char and set it equal to document[i];
// check to see if characters.includes(chars)
//if true, characters = characters.splice(i, 1)
//if false return false
//edge cases
//what if document is empty
//Time Complexity: O(m * n)
//Space Complexity: O(n)

// Do not edit the line below.
exports.generateDocument = generateDocument;
