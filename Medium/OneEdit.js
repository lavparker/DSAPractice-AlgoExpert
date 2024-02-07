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

function nthPower(array, n) {
    let equal = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        while (num % n === 0 && num !== 1) {
            num /= n;
        }

        if (num === 1) {
            equal.push(i);
        }
    }

    return equal;
}

console.log(nthPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
