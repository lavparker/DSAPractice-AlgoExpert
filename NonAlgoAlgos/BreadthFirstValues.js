// breadth first values
// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// breadthFirstValues(a);
// //    -> ['a', 'b', 'c', 'd', 'e', 'f']
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// breadthFirstValues(a);
// //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// const a = new Node('a');

// //      a

// breadthFirstValues(a);
// //    -> ['a']
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //    /  \
// //   x    d
// //         \
// //          e

// breadthFirstValues(a);
// //    -> ['a', 'b', 'c', 'x', 'd', 'e']
// breadthFirstValues(null);
// //    -> []

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  //iterative approach

  //want to check if our root is null

  if(root === null) return [];

  //start with queue data structure
  const queue = [root];

  //next, I need to create my main algorithm
  while(queue.length > 0){
    //begin algorithm by removing from the front of my queue.
    //I will remove from one end and add to the opposite end. I will         treat index 0 as the front of my array and the last index as if it's     the back of my array
    const values = [];
    const current = queue.shift();
    //as something leaves the queue I want to push it to values.
    values.push(current.val);
    //from here I need to add current's children into my queue.
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);


  }

  //once my while loop is done running I will return my entire values array once
  return values;

};

module.exports = {
  breadthFirstValues,
};
