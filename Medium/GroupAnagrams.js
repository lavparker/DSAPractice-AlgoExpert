// Group Anagrams
// Write a function that takes in an array of strings and groups anagrams together.
// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example,
// "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.
// Your function should return a list of anagram groups in no particular order.
// Sample Input
// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
// Sample Output
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

function groupAnagrams(words) {
 let anagrams = [];
 let shortAna = [];

  let j = 0;
  while(j < words.length){
    let compWord = words[j];
    // console.log("compWord: ", compWord)
    for(let i = j; i < words.length; i++ ){
      let word = words[i];
      console.log("word: ", word, "compWord: ", compWord, " : ", isAnagram(word, compWord))
      if(isAnagram(word, compWord) === true){
        shortAna.push(word)
      }

    }
     anagrams.push(shortAna);
     shortAna = [];
    j++
  }

  return anagrams;
}

function isAnagram(word, compWord){

  // console.log("word: ", word, ": ", word.length, "compWord: ", compWord, compWord.length, (word.length !== compWord.length))
  if(word.length !== compWord.length){
    return false;
  }

  let letterCount = {};

  for(let i = 0; i < word.length; i++){
    let letter = word[i];
    // console.log("letter: ", letter)
    if(letterCount[letter]){
      letterCount[letter] ++
    }else{
      letterCount[letter] = 1;
    }
  }

  // console.log("letterCountBefore: ", letterCount)

  for(let j = 0; j < compWord.length; j++){
    let letter = compWord[j];
    if(letterCount[letter]){
      // console.log("letter: ", letter, "count: ", letterCount[letter])
      letterCount[letter] --
    }else{
    // console.log("letter: ", letter, "letterCountAfter: ", letterCount, false)

      return false;
    }
  }

  // console.log("letterCountAfter: ", letterCount)

  // console.log("object Length: ", Object.keys(letterCount).length, "word: ",word, "compWord: ", compWord )

  // if(Object.keys(letterCount).length === 0){
  //   return true
  // }

  return true;
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;

//create a variable called comp word and set it equal to words[j]
//create a variable called anagrams set it equal to an empty array

//while j !== words.length;
  //create a variable called shortAna and set it equal to an empty array
  //loop through words array and initialize i to j (everything after what's already been checked)
    //for each word pass into isAnagram()helper function
      //if isAnagram is true, push the word to shortAna array.
    //at the end of the inner looop, push shortAna into anagrams array
//iterate up 1 with j

//helper function isAnagram
//will take in the word and the comparing word
//create a variable called letterCount and set it equal to an empty hash
//loop through the word add the letter count to the hash
//create another loop and loop through the comparing word
//remove each letter count from the hash
//if you can't remove from the hash, return false
//if the hash is not empty, return false (Object.keys(value).length === 0)
//else return true

