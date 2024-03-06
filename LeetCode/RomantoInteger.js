// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNums = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0;
    let num;

    for(let i = 0; i < s.length; i++){
        let roman = s[i];
        let nextRoman = s[i +1];
        // console.log("roman is ", roman)
        if((roman === "I" && nextRoman === "V") || (roman === "I" && nextRoman === "X")){
            // console.log(roman, " number: ", romanNums[roman])
            // console.log("roman equals I" )
            num = romanNums[nextRoman] - romanNums[roman];
            sum += num;
            i++;
        }else if((roman === "X" && nextRoman === "L") || (roman === "X" && nextRoman === "C")){
            // console.log("roman equals X " )

            num = romanNums[nextRoman] - romanNums[roman];
            sum += num;
            i++;

        }else if((roman === "C" && nextRoman === "D") || (roman === "C" && nextRoman === "M")){
            // console.log("roman equals C" )

            num = romanNums[nextRoman] - romanNums[roman];
            sum += num;
            i++;

        }else{
            sum += romanNums[roman]
        }
    }

    return sum;
};



//create a hash table called romanNums and set up all of the known roman nums L, V, X, L, C, D, M and what they are equal to.
//create a variable called sum and set it equal to 0;
//create a variable called num;
//loop through the str,
//create a var called roman and set it equal to str[i]
//nextRoman = str[i + 1]
//if((roman === "I" && nextRoman === "V") || roman === "I && nextRoman === "X" )
    //num = romanNums[nextRoman] - romanNums[roman]
    //sum += num
//else
    // sum += romanNums[roman]
//if((roman === "X" && nextRoman === "L") || roman === "X && nextRoman === "C" )
    //num = romanNums[nextRoman] - romanNums[roman]
    //sum += num
//else
    // sum += romanNums[roman]
//if((roman === "C" && nextRoman === "D") || roman === "C" && nextRoman === "D" )
    //num = romanNums[nextRoman] - romanNums[roman]
    //sum += num
//else
    // sum += romanNums[roman]


//return sum



console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
