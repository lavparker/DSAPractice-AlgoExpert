// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let curr1 = linkedListOne;
  let curr2 = linkedListTwo;
  let arr1 = [];
  let arr2 = [];

  while(curr1 !== null){
    arr1.shift(curr1.value)
    curr1 = curr1.next
  }

  while(curr2 !== null){
    arr2.shift(curr2.value)
    curr2 = curr2.next
  }
  console.log(arr1)
  let num1 = Number(arr1.join(" "))
  let num2 = Number(arr2.join(" "))

  // Write your code here.
  return num1 + num2;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
