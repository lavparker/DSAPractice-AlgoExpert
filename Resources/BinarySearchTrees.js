// What is Binary Search Tree?
// Binary Search Tree is a node-based binary tree data structure which has the following properties:

// The left subtree of a node contains only nodes with keys lesser than the node’s key.
// The right subtree of a node contains only nodes with keys greater than the node’s key.
// The left and right subtree each must also be a binary search tree.

// Operations on Binary Search tree:

// The four basic operations of BST:

// Searching,
// Insertion, and
// Deletion
// Traversals


// // javascript program to insert a node
// // in a BST

// // Given Node
// class Node
// {

// 	constructor(key){
// 		this.key = key;
// 		this.left = null;
// 		this.right = null;
// 	}

// }


// // Function to insert a new node with
// // given key in BST
// function insert(node, key)
// {

// 	// If the tree is empty, return a new node
// 	if (node == null)
// 		return new Node(key);

// 	// Otherwise, recur down the tree
// 	if (key < node.key)
// 	{
// 		node.left = insert(node.left, key);
// 	}
// 	else if (key > node.key)
// 	{
// 		node.right = insert(node.right, key);
// 	}

// 	// Return the node pointer
// 	return node;
// }

// // Function to do inorder traversal of BST
// function inorder(root)
// {
// 	if (root != null)
// 	{
// 		inorder(root.left);
// 		document.write(root.key + " ");
// 		inorder(root.right);
// 	}
// }

// // Driver Code

// /* Let us create following BST
// 		50
// 	/	 \
// 	30	 70
// 	/ \ / \
// 20 40 60 80
// */
// let root = null;

// // Inserting value 50
// root = insert(root, 50);

// // Inserting value 30
// root = insert(root, 30);

// // Inserting value 20
// root = insert(root, 20);

// // Inserting value 40
// root = insert(root, 40);

// // Inserting value 70
// root = insert(root, 70);

// // Inserting value 60
// root = insert(root, 60);

// // Inserting value 80
// root = insert(root, 80);

// // Print the BST
// inorder(root);


// This code is contributed by Arushi Jindal.



//tree includes

//BFS implementation

// const treeIncludes = (root, target) => {
// 	if(root === null) return false;

// 	const queue = [ root ];
// 	while(queue.length >  0){
// 		const current = queue.shift();
// 		if(current.val === target) return true;

// 			if(current.left) queue.push(current.left);
// 			if(current.right) queue.push(current.right);
// 	}

// 	return false;
// }

// // RECURSIVE DFS

// const treeIncludes = (root, target) => {
// 	if(root === null) return false;
// 	if(root.val === target) return true;
// 	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// }


//

// const treeSum = (root) => {

// 	if(root === null) return 0;

// 	let sum = 0;

// 	sum += treeSum(root.left)
// 	sum += treeSum(root.right)

// 	return sum;

// }


//DFS RERUCSIVE SOLUITON


const treeSum = (root) => {
	//base case
	if(root === null) return 0;

	return root.val + treeSum(root.left) + treeSum(root.right);
}
