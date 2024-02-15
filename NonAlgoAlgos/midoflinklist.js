// Auxiliary Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3.
// If there are even nodes, then there would be two middle nodes, we need to print the second middle element.
// For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4.

//Test Case:
const linkedList = {
  "head": "1",
  "nodes": [
    {"id": "1", "next": "2", "value": 1},
    {"id": "2", "next": "3", "value": 2},
    {"id": "3", "next": "4", "value": 3},
    {"id": "4", "next": "5", "value": 4},
    {"id": "5", "next": null, "value":5}
  ]
}


// {
//   "head": "1",
//   "nodes": [
//     {"id": "1", "next": "2", "value": 1},
//     {"id": "2", "next": "3", "value": 2},
//     {"id": "3", "next": "4", "value": 3},
//     {"id": "4", "next": "5", "value": 4},
//     {"id": "5", "next": "6", "value": 5},
//     {"id": "6", "next": null, "value":6}
//   ]
// }

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function midOfLinkedList(linkedList){
    let curr = linkedList.head;
    let countHash = {};
    let count = 0;
    let mid;

    while(curr !== null){

        countHash[count] = curr.value;
        count++
        curr = linkedList.nodes.find(node => node.id === curr.next);

    }

    if(count % 2 === 0){
        mid =(count / 2) + 1
    }else{
        mid = count / 2
    }

    return countHash[count];
}


console.log(midOfLinkedList(linkedList) )
