// Semordnilap
// Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
// A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other.
// For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".
// The order of the returned pairs and the order of the strings within each pair does not matter.

// Sample Input
// words = ["diaper", "abc", "test", "cba", "repaid"]
// Sample Output
// [["diaper", "repaid"], ["abc", "cba"]]


function semordnilap(words) {
  // Write your code here.
  let twinsies = [];

  for(let i = 0; i < words.length; i++){
    for(let j = i + 1; j < words.length; j++){
      let word1 = words[i];
      let word2 = words[j];

      if(word1 === reverseWord(word2)){
        twinsies.push([word1, word2])
      }
    }
  }
  return twinsies;
}

function reverseWord(word){
  let reversed = "";

  for(let i = word.length - 1; i >=0; i--){
    reversed += word[i]
  }
  return reversed;
}

//create a variable called twinsies and set it equal to an empty array
//create a nested loop
// for each pair create a variable for word 1, and oen for word 2
//APPROACH 1: sort each of the letters words in alphabetical order
// check to see if word 1 is equal to word 2
//if yes push the words (in their original form) into the twinsies array

//APPROACH 2: check to see if word1 is === word2.reverse() if yes, push both words into the twinsies array
// Do not edit the line below.
exports.semordnilap = semordnilap;
