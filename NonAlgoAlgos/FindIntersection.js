// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10
// Tags
// arrayfreevideo

function FindIntersection(strArr) {

  let str1 = strArr[0];
  let str2 = strArr[1];

  let longStr = str1.length >= str2.length ? str1.split(", ") : str2.split(", ");
  let shortStr = str1.length >= str2.length ? str2.split(", ") : str1.split(", ");
  let sameNum = [];
  // console.log("LongString:", longStr, "ShortString: ", shortStr)

  for(let i = 0; i <= longStr.length; i++){
    let num = longStr[i];
    // console.log("num: ", num)

    if(shortStr.includes(num)){
      sameNum.push(num) ;
    }
  }

  // let sameCombo = sameNum.join("")

  // if(sameCombo[sameCombo.length - 1] === ","){
  //   return sameCombo.slice(0, -1);
  // }else{
  //   return sameCombo;
  // }

   if(sameNum.length >= 1){
    return sameNum.join(",");
  }else{
    return false;
  }
}

// keep this function call here
console.log(FindIntersection(readline()));

//create a variable called str1 and set it equal to strArr[0];
//create a variable called str2 and set it equal to strArr[1];
//create a var called longstr and set it equal to the longest str (use terenary)
//create a var called sameNum and set it equal to []

//longStr = (str1.length >= str2.length) ? str1 : str2;
//shortStr = (str1.length >= str2.length) ? str2 : str1;

//loop through longStr
//create a var called num and set it equal to longStr[i];
//check to see if shortStr.includes(num)
//if true sameNum.push(num)

//return sameNum.join("");
