

//I can only see my first element and I don't know if it's in it's correct position or not. So in order to check, I will need to pop all of the elements off of the stack
//Need to pop off all of the elements and recursively put them back one by one in sorted order


//TC
//Time: O(n^2) - we need to call the function n times and with each of the funciton calls, we need todo N steps or n amount of work in terms of adding this element that we've popped off back into it's correct position
//Space: O(n) recursive call stack
function sortStack(stack) {
  //base case
  if(stack.length === 0){
    return stack;
  }
  let top = stack.pop();

  sortStack(stack)

  insertInSortedOrder(stack, top)

  return stack;

}

function insertInSortedOrder(stack, value){
  if(stack.length === 0 || stack[stack.length - 1]  <= value){
    stack.push(value)
    return
  }else{
    let top = stack.pop()
    insertInSortedOrder(stack, value)
    stack.push(top)
  }
}

// Do not edit the line below.
exports.sortStack = sortStack;

//array of ints as a stack
//recursively sorts the stack in place and returns it

//the end of the array is the top of the stack. (array.lenght - 1) is top
//you can only pop elements from top
// and push elements to top of the stack using .append
//peek at elements at the top using the last element in the array
