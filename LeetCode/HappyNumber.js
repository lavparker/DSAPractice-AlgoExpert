// 202. Happy Number
// Easy
// Topics
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.



// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let repeatedObj = {};
    let posNum = Math.abs(n);
    let strNum = posNum.toString();



    let strNumArr = strNum.split("");
        while(true){
        let sum = 0;

        for(let i = 0; i < strNumArr.length; i++){
            let num = Number(strNumArr[i]);
            let numSqr = num * num;
            sum += numSqr;
            let visited = sum.toString();

            if(sum === 1){
                return true
            }else if(sum !== 1 && !repeatedObj[visited]){ //if the sum is not equal to 1 and the sum is not there
                repeatedObj[visited] = sum;
                n = sum
                continue;
            }else if(sum !== 1 && repeatedObj[visited]){
                return false;
            }
        }
    }



};

//create a hash to keep track of sums i've already visited so that I know that i'm not stuck in a loop call it repeated
//create a variable and called posNum and set it = to Math.abs(n)
//turn the number into a string and call it strNum
//turn the number back into a number and call it num
//create a sum variable and set it equal to 0
//while sum > 1
//split the strNum into an array
//loop through strNumArray
//each variable is called num1 = Number(strNumArray[i])
//numSqr = num1 * num1
//sum += numSqr
//if(sum === 1){
//     return true
// }else if(repeated[sum]){
//     return false
// }else continue


