// Function to print the circular rotation of array
function print(array, arrLength, ind) { //a = inputArray, n = a.length, ind =
// Create an auxiliary array of twice size.
let auxArr = new Array(2 * arrLength);

// Copy the input array 'array' to the auxiliary array 'auxArr' twice
// so that we can rotate the array circularly
for (let i = 0; i < arrLength; i++)
	auxArr[i] = auxArr[arrLength + i] = array[i];

// print from the `ind-th` index to the `(n+ind)th` index in the auxiliary array 'auxArr'.
let output = '';
for (let i = ind; i < arrLength + ind; i++)
	output += auxArr[i] + ' ';
console.log(output);
}

// Driver code
let array = ['A', 'B', 'C', 'D', 'E', 'F'];
let arrLength = array.length;

// Call the function and pass the input array, its size, and the index to rotate.
print(array, arrLength, 3);
