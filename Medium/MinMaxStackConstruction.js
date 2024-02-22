// Min Max Stack Construction
// Write a MinMaxStack class for a Min Max Stack. The class should support:
// • Pushing and popping values on and off the stack.
// • Peeking at the value at the top of the stack.
// • Getting both the minimum and the maximum values in the stack at any given point in time.
// All class methods, when considered independently, should run in constant time and with constant space.
// Sample Usage
// // All operations below are performed sequentially.
// MinMaxStack(): - // instantiate a MinMaxStack push (5): - getMin(): 5
// getMax (): 5
// peek(): 5
// push (7): - getMin(): 5
// getMax () : 7
// peek(): 7
// push (2): - getMin(): 2
// getMax (): 7
// peek(): 2
// pop (): 2
// pop(): 7
// getMin(): 5
// getMax ():
// 5
// peek(): 5

// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor(){
    this.array = []
  }
  peek(array) {
    if(this.length === 0){
      return null
    }else{
      return this.array[this.array.length - 1]
    }

  }

  pop(array) {
    // Write your code here.
   return this.array.pop()
  }

  push(number) {
    // Write your code here.
    return this.array.push(number)
  }

  getMin(array) {
    // Write your code here.
    return Math.min(this.array)
  }

  getMax(array) {
    // Write your code here.
    return Math.max(this.array)
  }
}

//Peek - if this.length === 0return null else return array[0]

//Pop - if array.isEmpty?() return null else
  //create a variable called popped and set it equal to array.pop()
  //return popped

//Push - this.push()
//Min
//Max
// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
