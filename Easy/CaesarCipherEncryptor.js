// Caesar Cipher Encryptor
// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
// Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a .

// Sample Input
// string = "xyz"
// key = 2
// Sample Output
// "zab"


function caesarCipherEncryptor(string, key) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = '';
  let decoded;

  for(let i = 0; i < string.length; i++){
    let pos = alpha.indexOf(string[i])
    console.log(pos)
    if(pos + key < alpha.length - key){
      decoded = alpha[pos + key];
    }else{
      decoded= alpha[(pos + key) % alpha.length]
    }

    newStr += decoded;
  }
  return newStr;
}
//create a variable called alpha and set it equal to the alphabet
//create a variable called newStr = ""
//loop through the string
//to determine alpha of string...
//set a variable called decoder
//if i + n <= alpha.length - key
//decoded = alpha[alpha + key];
//else
//decoded = alpha[(i+key)%alpha.length]
//newStr += decoded
//return newStr
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
