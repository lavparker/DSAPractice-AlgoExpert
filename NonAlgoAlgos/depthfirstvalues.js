// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  //iterative version:
  //something to note: if you have an empty input, (i.e. you're using null as a parameter) you will thor an error sayign that val can't be read as null. To work around this edge case, you:

  if(root === null) return [];

  const result = [];
  //you can use an array to represent a stack as long as you use two particular methods. Array.push() and Array.pop().
//Next, I'll initialize my root node in the stack.

  const stack = [ root ];

  //While I have elements on the stack. (i can use a while loop)

  while(stack.length > 0){
    //stack.pop() will return the element that we just removed.
    const current = stack.pop();
    result.push(current.val); //we know that every instance of node has a .val prop.

    //from there i need to add this node's children. using stack.push()
       //we also need to make sure that these children exist. i.e. if a node has a right child but not a left child, you'll be pushing node to the stack and you don't want to do that.
    // I want to push the children only if they exist. Which means that I need to check if the left exists and then push it and then check if the right exists and then push it.

    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);

  }

  return result;


};

module.exports = {
  depthFirstValues,
};

//Time and Space Complexity: n: # of nodes in the tree
//Time: O(n) we're going to add every node to our stack, and that node is eventually going to leave the stack exactly once. We're not double visiting any of the nodes.
//Space: O(n) - the only thing we stored is the stack, a linear data structure. We're not going to put ever more than n things on the stack.

// we want to take in a binary tree. particularly the root of the binary tree. That root node will have pointers to it's left and right children and those nodes will point to other nodes. Let's say a node doesn't have a left and right child. Then it's pointer is going to be set to null.

//for a depth first traversal we could start at the root node of A, what we'll do is add that to a collection. From there, according to a depth first traversal, I could go to b and here is where we make an important decision. We can either go to c or to d. If i'm doing a depth first traversal, I need to go deeper in the tree before I move laterally. So that means that I need to go from b to d. Once I bottom out at d, there's no where deeper I can go from d, so now I move laterally to the e node. This pattern continues..... I don't have anything after e, so I move laterally to c, and then from c, I go to f.

//This would be considered a depth first traversal on a binary tree.




                                        //      a
                                        //    /   \
                                        //   b     c
                                        //  / \     \
                                        // d   e     f

                                  //values: a, b, d, e, c, f

//How do we implement this? We can use a stack.

//With a stack, we can only add and remove things from the top of the stack (LIFO).
// When starting with the traversal, I'm going to start at the root node of a. I take the root node, and i'll store it on my stack. From there, I begin my main algorithm. To start this traversal, we'll check if the stack is empty.
//The stack is not empty because I have at least 1 element. I start by removing (popping) the top element of my stack. I'll remove the A, and I'll label that as my current node being explored. When something leaves the stack, then I can consider it being visited. So I need to list out my values. I just visited the a node. At this point, I can look at that node's children now.
//Looking at the a node in the tree, I see that it has a b, child on it's left and a c child on it's right. From there, I add (push) those two children to my stack. I'll put c first and b afterwards.
//notice if I push my right child first, followed by my left child, that makes it such that my left child is at the top of my stack which means that i would hit them next. This ends the first iteration of the depth first traversal.
//I'll ask te same question again "Is my stack empty?" It's not, so I pop the top of my stack. i'll call B my current which means I can print it out or insert it into my values list. From there, I consider b's children. b has 2 children, so I add them both. I push e followed by pushing d. That ends that iteration.
//Now, something interestig happens. My stack is still not empty, so i remove the top. So I call d my current, and I add d to my list of values.
//When I look at d's children, it has no children. There's nothing to add to the stack from here. So technically, I've finished this iteration.
//I still have stuff on my stack, so I'll e off of the top of my stack, I'll set e to current, and I'll add e to my values. e has no children so I'm dne with that iteration.
//finally, I have c, i'll remove c from the stack, set it to current and add it to values.
//I see that c node only has 1 child, so i'll push the f node to the stack. //REMEMBER TO ALWAYS CHECK IF YOUR CHILDREN EXIST BEFORE ADDING THEM TO THE STACK.
//For the final iteration, you have the f node. We remove it fromthe stack, and add it to values. Check to see if f has children. It doesn't so I've finished this iteration. Now my stack is empty.
//Once the stack is empty, I know that I must have traveled through the entire binary tree. 
