// Remove Duplicates From Linked List O
// You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.
// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

// Sample Input
// linkedList = 1 → 1 → 3 → 4 → 4 → 4 → 5 → 6 → 6 // the head node with value 1
// Sample Output
// 1 → 3 -> 4 -> 5 → 6 // the head node with value 1

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;
  while(current.next !== null){
    if(current.next.value === current.value){
      current.next = current.next.next;
    }else{
      current = current.next;
    }
  }
  return linkedList;
}

//create a variable called current and set it equal to linkedList (the head)
//create a loop while (current.next !== null)
//check to see if current.next.value === current.value
//if so, current.next = current.next.next
//current = current.next
//in the end return linkedList

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;


//ATTMEPT 2


// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList
  while(current.next !== null){
    if(current.next.value === current.value){
      current.next = current.next.next
    }else{
      current = current.next
    }
  }
  return linkedList;
}

//create a variable called head and set it equal to linkedList
//create a loop while current !== null
// if current.next === current
// then current.next === current.next.next
//current = current.next
//return head

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
