// Run-Length Encoding
// Write a function that takes in a non-empty string and returns its run-length encoding.
// From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".
// To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A s), can't naively be encoded as "12A", since this string can be decoded as either
// "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3" •

//Sample Input
// string = "AAAAAAAAAAAAABBCCCCDD"
// Sample Output
// "9A4A2B4C2D"

function runLengthEncoding(string) {
  // Write your code here.
  let char;
  let count = 1;
  let encoded = "";

  for(let i = 0; i < string.length; i++){
    let letter = string[i];
    let pointer = string[i + 1];
    if(letter === pointer && count < 9){
      char = letter
      count++
    }else{
      encoded += count + letter
      char = letter
      count = 1
    }
  }
    return encoded
  }

//Time Complexity: O(n)
//Space Complexity: O(1)



// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;