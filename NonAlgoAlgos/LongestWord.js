// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
// Tags
// string manipulationsearchingfree

function LongestWord(sen) {
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/;
  let count = 0;
  let longestWord = "";
  let senArray = sen.split(regex);

  for(let i = 0; i < senArray.length; i++){
    let wrd = senArray[i];

    if(wrd.length > count){
      count = wrd.length;
      longestWord = wrd;
    }
  }

  return longestWord;

}

// keep this function call here
console.log(LongestWord(readline()));

//create a regex that will split at a space and at punctuation
//create a counter that will keep track of length of word set equal to 0;
//create a variable called longestword that keeps track of the current longest word set to ""
//create variable called senArray that splits the sent at the punctuation and space (regex)
//loop through the senArray
//create a variable called wrd and set equal to senArray[i]
//as we loop, check to see if wrd.length is > count
//if true, then set count equal to wrd.length and set longestword equal to wrd.
//return longest wrd
