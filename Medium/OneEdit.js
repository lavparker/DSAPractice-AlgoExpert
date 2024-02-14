// One Edit
// You're given two strings stringOne and
// stringTwo. Write a function that determines if these two strings can be made equal using only one edit.
// There are 3 possible edits:
// • Replace: One character in one string is swapped for a different character.
// • Add: One character is added at any index in one string.
// • Remove: One character is removed at any index in one string.
// Note that both strings will contain at least one character. If the strings are the same, your function should return true.

// Sample Input
// stringOne = "hello"
// stringTwo = "hollo"
// Sample Output
// True // A single replace at index 1 of either string can make the strings equal

function oneEdit(stringOne, stringTwo) {
    let str1 = stringOne;
    let str2 = stringTwo;

    if (stringOne === stringTwo) {
        return true;
    }

    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    // Determine which string to use as a loop reference
    const loopStr = str1.length >= str2.length ? str1 : str2;

    for (let i = 0; i < loopStr.length; i++) {
        if (str1[i] !== str2[i]) {
            // Attempt replacement
            const replaceStr1 = str1.slice(0, i) + str2[i] + str1.slice(i + 1);
            const replaceStr2 = str2.slice(0, i) + str1[i] + str2.slice(i + 1);
            if (replaceStr1 === str2 || replaceStr2 === str1) {
                return true;
            }

            // Attempt addition
            const addStr1 = str1.slice(0, i) + str2[i] + str1.slice(i);
            const addStr2 = str2.slice(0, i) + str1[i] + str2.slice(i);
            if (addStr1 === str2 || addStr2 === str1) {
                return true;
            }

            // Attempt removal
            const removeStr1 = str1.slice(0, i) + str1.slice(i + 1);
            const removeStr2 = str2.slice(0, i) + str2.slice(i + 1);
            if (removeStr1 === str2 || removeStr2 === str1) {
                return true;
            }

            // If none of the above conditions are met, it means more than one edit is required
            return false;
        }
    }

    // If we reach this point, both strings are identical till the end of the loopStr
    // Check if the lengths of the strings differ by exactly one to determine if an addition or removal is needed
    return Math.abs(str1.length - str2.length) === 1;
}
