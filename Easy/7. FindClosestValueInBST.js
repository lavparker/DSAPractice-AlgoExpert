// Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Each
// BST
// node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and
// only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.


// tree =   10
//         /   \
//        5     15
//       / \    /  \
//     2    5  13   22
//    /          \
//   1            14 


// target = 12



function findClosestValueInBst(tree, target) {
  return findClosestValueInBSTHelper(tree, target, Infinity)
}

function findClosestValueInBSTHelper(tree, target, closest){
  if (tree === null){
    return closest
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)){
    closest = tree.value
  }

  if (target < tree.value){
      return findClosestValueInBSTHelper(tree.left, target, closest)
  }else if(target > tree.value){
    return findClosestValueInBSTHelper(tree.right, target, closest)
  }else {
    return closest
  }
}

// Time Complexity:
// The time complexity is O(log N) on average, where N is the number of nodes in the Binary Search Tree (BST). This is because, in a balanced BST, the algorithm will eliminate half of the remaining nodes at each recursive call, leading to a logarithmic time complexity.

// However, in the worst case (unbalanced tree), the time complexity can be O(N), where N is the number of nodes. This occurs when the tree degenerates into a linked list, and each node needs to be visited.

// Space Complexity:
// The space complexity is O(log N) in the average case, which corresponds to the maximum depth of the recursion stack. This is because the algorithm uses recursion to traverse the tree, and the maximum depth of the recursion is proportional to the height of the balanced BST.

// In the worst case, if the tree is unbalanced, the space complexity could be O(N), as the maximum depth of the recursion stack could be equal to the number of nodes in the tree.

// In summary, the provided code is efficient in terms of time and space complexity, especially for balanced BSTs. However, in the worst-case scenario of an unbalanced tree, the time and space complexity could degrade to O(N).