// 819. Most Common Word (leetcode)
// Solved
// Easy
// Topics
// Companies
// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.



// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"


// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.
//lowercase

///[\s!?',;.]+/

//lowercase the string
//split a string using regex by the space and punctuation

//create an empty hash

//loop through the array
//if the word is = to the banned word, continue
//if the word is not equal to the banned word and is not in the hash,
    //hash[word] = 1
//else the word is not equal to the banned word and is in the hash hash[word] +=1

//create a counter
//create a longword
//outside of the loop
//call object.entntries and turn it into a variable
//for each element, word[num] check to see if ele[i][1] is > counter
//if yes counter is equal to ele[i][1] && longWord is equal to ele[i][0]

//return longword
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let lowPara = paragraph.toLowerCase();
    // let regex = /[\s!?',;.]+/
    let regex = /[!?',;.\s]+/;
    let parArray = lowPara.split(regex);
    let wordCount = {};
    // console.log(parArray)

    for(let i = 0; i < parArray.length; i++){
        let word = parArray[i];
        if(banned.includes(word)){
            continue;
        }else if(!banned.includes(word) && wordCount[word]){
            wordCount[word] ++
        }else{
            wordCount[word] = 1
        }
    }

    // console.log(wordCount)

    let counter = 0;
    let longWord = ""
    let wordArr = Object.entries(wordCount);

    for(let i = 0; i < wordArr.length; i++){
        let word = wordArr[i];
        if(word[1] > counter && word[0] !== ""){
            counter = word[1]
            longWord = word[0]
        }
    }

    return longWord;


};

