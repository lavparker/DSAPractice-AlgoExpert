// Branch Sums 
// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be
// BinaryTree nodes themselves or None / null.

function branchSums(root) {
  // Write your code here.
  //recursive 

  let sums = []; 

  calculateBranchSums(root, 0, sums)
  return sums; 
  
}

function calculateBranchSums(node, runningSum, sums){
  if (node === null){
    return
  }
  let newRunningSum = runningSum + node.value
  if(node.left === null && node.right === null){
      sums.push(newRunningSum)
      return 
  }

  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
  
}

//iterative 

function branchSums(root) {
  const sums = [];
  if (!root) return sums;

  const stack = [];
  stack.push({ node: root, runningSum: 0 });

  while (stack.length > 0) {
    const { node, runningSum } = stack.pop();

    const newRunningSum = runningSum + node.value;

    if (!node.left && !node.right) {
      sums.push(newRunningSum);
    } else {
      if (node.right) {
        stack.push({ node: node.right, runningSum: newRunningSum });
      }
      if (node.left) {
        stack.push({ node: node.left, runningSum: newRunningSum });
      }
    }
  }

  return sums;
}
