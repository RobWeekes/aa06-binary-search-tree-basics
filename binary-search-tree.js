// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
      this.root = null;
  }

  insert(val, currentNode = this.root) {
      const newNode = new TreeNode(val);

      if(!currentNode) { // for empty tree, insert first node as root
          this.root = newNode;
          return;
      }

      if(val < currentNode.val) {   // val is smaller than node at root <- go down left leg
        // check if left node is empty --
          if(currentNode.left === null) {   // if left node empty / if(!currentNode.left)
              currentNode.left = newNode;   // set new node to root's left node
          } else {   // if left node is filled, traverse down left & recurse evaluate
              this.insert(val, currentNode.left);
          }
      }

      if(val > currentNode.val) {   // val is larger than node at root -> go down right leg
          // check if right node is empty
          if(currentNode.right === null) {   // if right is empty
              currentNode.right = newNode;   // set right node as new node
          } else {   // right node filled? recurse down the right
              this.insert(val, currentNode.right);
          }
      }
  }


  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
