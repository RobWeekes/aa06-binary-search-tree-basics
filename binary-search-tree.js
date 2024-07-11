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

      if(!this.root) { // for empty tree, insert first node as root
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
          } else {   // right node filled? recurse down the right & try again
              this.insert(val, currentNode.right);
          }
      }
  }

  search(val) {
      let currentNode = this.root;

      while(currentNode) {  // loop stops if we reach the end (leaf) w/o a match
          if(currentNode.val === val) return true;
          if(val < currentNode.val) {   // val is < node, move down left
              currentNode = currentNode.left
          } else {    // val is greater, move down to right child
              currentNode = currentNode.right;
          }
      }
      return false;
  }

  // RECURSIVE APPROACH -- stack overflow!
  // search(val) {
  //     let currentNode = this.root;

  //     // BASE CASE
  //     if(!currentNode) return false;  // false for empty tree or no matches down the leg
  //     if(currentNode.val === val) return true;  // true if val = root - necessary ?

  //     // RECURSIVE CASE

  //     // let stack = [currentNode];
  //     // while(stack.length >= 0) {
  //     // }

  //     // If the target is less than the root value, recursively search the left child
  //     if(val < currentNode.val) {
  //         currentNode = currentNode.left;  // traverse to left
  //         return this.search(val);
  //     }

  //     // If the target is greater than the root value, recursively search the right child
  //     if(val > currentNode.val) {
  //         currentNode = currentNode.right;  // traverse to right
  //         return this.search(val);
  //     }

  //     // return false;  // if no matches -- redundant here?
  // }

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


// local testing

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(bst);
console.log(bst.search(1)) // true
console.log(bst.search(2)) // true
console.log(bst.search(3)) // true
console.log(bst.search(4)) // true
console.log(bst.search(5)) // true
console.log(bst.search(6)) // true
console.log(bst.search(7)) // true
console.log(bst.search(10)) // true



module.exports = { BinarySearchTree, TreeNode };
