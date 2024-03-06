// 169. Majority Element
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// Follow-up: Could you solve the problem in linear time and in O(1) space?


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countNum = {};

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];

        if(countNum[num]){
            countNum[num] ++
        }else{
            countNum[num] = 1;
        }
    }

    let numCountArr = Object.entries(countNum);
    let count = 0;
    let freqNum;

    for(let j = 0; j < numCountArr.length; j++){
        let hashVar = numCountArr[j]
        if(hashVar[1] > count){
            count = hashVar[1];
            freqNum = hashVar[0];
        }
    }

    return freqNum;
};

//create a variable called countNum and set it equal to an empty hash
//loop through nums array
//add the count of each number to the hash

//create a counter variable and set it equal to 0
//create a variable called freqNum
//create a variable and set it equal to object.enttries(hash)
//loop through this variable and check to see if hashVar[1] > count
//if yes,  count = hashVar[1] && freqNum = hashVar[0]
//return freqNum 
