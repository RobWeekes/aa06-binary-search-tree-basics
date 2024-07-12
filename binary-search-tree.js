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

//   search(val) {
//       let currentNode = this.root;

//       while(currentNode) {  // loop stops if we reach the end (leaf) w/o a match
//           if(currentNode.val === val) return true;
//           if(val < currentNode.val) {   // val is < node, move down left
//               currentNode = currentNode.left
//           } else {    // val is greater, move down to right child
//               currentNode = currentNode.right;
//           }
//       }
//       return false;
//   }

  // RECURSIVE APPROACH -- returning false!
  search(val, currentNode = this.root) {
    //   let currentNode = this.root;    // declare this as default only when no currenNode is passed in
                                        // so function can be called recursively on new nodes
      // BASE CASE
      if(currentNode === null) return false;  // false for empty tree or no matches down the leg
      if(currentNode.val === val) return true;  // true if val = root - necessary ?

      // If the target is less than the root value, recursively search the left child
      if(currentNode.val && val < currentNode.val) {
          return this.search(val, currentNode.left);  // use 'return' if we have an either/or situation such as left or right-
      }                                               // if we might have to keep going left, recurse without returning

      // If the target is greater than the root value, recursively search the right child
      if(currentNode.val && val > currentNode.val) {
          return this.search(val, currentNode.right);
      }
  }

  preOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;  // if we reach the end of tree, return to bounce back up a level
      console.log(currentNode.val);
      // if there is left child, traverse to left      // see line 79
    //   if(currentNode.left) {     // not needed, covered by line 79
          this.preOrderTraversal(currentNode.left);
    //   }
      // after the left, traverse to right
    //   if(currentNode.right) {
          this.preOrderTraversal(currentNode.right);
    //  }
  }

  inOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
      // initialize a queue with the root node
    const queue = [this.root];              // must use a placeholder array to use a queue sequence
    // while the queue is not empty
    while(queue.length) {
        // print and remove first node in queue
        let node = queue.shift();
        console.log(node.val);
        // if the node has a left node
        // push the left node on the back of the queue
        if(node.left) queue.push(node.left);
        // if the node has a right node
        // push the right node on the back of the queue
        if(node.right) queue.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // initialize a stack with the root node - educational, could also use JS's call stack as above
    const stack = [this.root];

    // while the stack is not empty
    while(stack.length) {
        // print and remove first node in stack
        let curr = stack.pop();
        console.log(curr.val);

        // if the node has a left node
        // push the left node on the back of the stack
        if(curr.left) stack.push(curr.left);

        // if the node has a right node
        // push the right node on the back of the stack
        if(curr.right) stack.push(curr.right);
    }
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
// console.log(bst.search(1)) // true
console.log(bst.search(2)) // true
console.log(bst.search(3)) // true
console.log(bst.search(4)) // true
console.log(bst.search(5)) // true
console.log(bst.search(6)) // true
console.log(bst.search(7)) // true
console.log(bst.search(10)) // false

bst.preOrderTraversal();
bst.inOrderTraversal();
bst.postOrderTraversal();

module.exports = { BinarySearchTree, TreeNode };
