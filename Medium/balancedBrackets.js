// Balanced Brackets O
// Write a function that takes in a string made up of brackets (• [. {., 1, and 3) and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.
// A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in E(J) •
// Sample Input
// string= "([])(){}(())()()"
// Sample Output
// true // it's balanced

//use a stack
//we want to keep track of every pair of matching brackets
//we need to keep track of the last bracket we saw
//we will build a stack
//[]
//we will start traversing our string
//we will check to see if our character is an opening bracket
//if it is, we store it in a stack
//we continue iterating through the string,
  //while the brackets are open, you can store it in the stack
//once we hit our first closed bracket, we need to check if our stack is empty
//if its empty  we know that we don't have an open bracket to match it to.and the string is unbalances
//if we do have brackets in our stack, we want to check what the last bracket was
//we want to check that the last brack corresponds to the type of the current bracket that we're at
//because if the last bracket doesn't correspond to the current bracket then we are also in a situation where the string is imbalanced
//if it does match, we're good.
//since we know that the current brack has a closing bracket, so we can get rid of them we can pop the opening bracket off the stack and move on in our string.
//as long as we are iterating through the string, we can push the open brackets onto the stack
//once we hit a closing bracket, we check our stack to see if the last bracket is a match to our closing bracket
//as soon as it's not, it's an unbalanced string and we'll return false.
//if we reach the end and all are matched (make sure the stack is empty too), return true.

//Time complexity is O(n)
//Space complexity is O(n)

