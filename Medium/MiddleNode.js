// Middle Node
// You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. If there are two middle nodes (i.e. an even length list), your function should return the second of these nodes.
// Each LinkedList node has an integer value aswellas a next node pointing to the next node in the list or to
// None / null if it's the tail of the list.

// Sample Input
// tinkedList = 2->7->3 ->5
// Sample Output
// // The middle could be 7 or 3,
// 3 -> 5 // we return the second middle node

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  // Write your code here.
  // let pos = {};
  let count = 0;
  let current = linkedList;

  while(current !== null){
    // pos[count] = current.value + current.next.value
    current = current.next;
    count++
  }

  current = linkedList

  for(let i = 0; i < Math.floor(count / 2); i++){
    current = current.next
  }

  return current;
}
