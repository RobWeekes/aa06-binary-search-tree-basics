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
              currentNode.left = newNode;   // set new node to current node's left node
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

// // ITERATIVE APPROACH -- no stack needed because we don't need to traverse every node
  search(val) {      // because it's a BST we know which branch to go down during search
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

  // // RECURSIVE APPROACH
  // search(val, currentNode = this.root) {
  //   //   let currentNode = this.root;    // declare this as default only when no currenNode is passed in
  //                                       // so function can be called recursively on new nodes
  //     // BASE CASE
  //     if(currentNode === null) return false;  // false for empty tree or no matches down the leg - if(!currentNode) also works
  //     if(currentNode.val === val) return true;  // true if val = root - necessary ?

  //     // If the target is less than the root value, recursively search the left child
  //     if(currentNode.val && val < currentNode.val) {  // if(val < currentNode.val) also works
  //         return this.search(val, currentNode.left);  // use 'return' if we have an either/or situation such as left or right-
  //     }                                               // if we might have to keep going left, recurse without returning

  //     // If the target is greater than the root value, recursively search the right child
  //     if(currentNode.val && val > currentNode.val) {
  //         return this.search(val, currentNode.right);
  //     }
  // }

  preOrderTraversal(currentNode = this.root) {
    if(!currentNode) return;  // if we reach the end of tree, return to bounce back up a level
      console.log(currentNode.val);
      // if there is left child, traverse to left      // see line 79
    //   if(currentNode.left) {     // not needed, covered by line 79
          this.preOrderTraversal(currentNode.left);   // goes all the way to the left until reaches leaf
    //   }                                            // it will run method on (null) and return stack on line 79,
      // after the left, traverse to right            // then it will try to traverse to the right on level above (leaf's predecessor)
    //   if(currentNode.right) {                      // at the leaf it will also run preOrderTraversal(null)
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

  // // Depth First Traversal - Iterative - using array stack

  // depthFirstTraversal() {
  //   // initialize a stack with the root node - educational, could also use JS's call stack as above
  //   const stack = [this.root];

  //   // while the stack is not empty
  //   while(stack.length) {
  //       // print and remove first node in stack
  //       let curr = stack.pop();
  //       console.log(curr.val);

  //       // if the node has a left node
  //       // push the left node on the back of the stack
  //       if(curr.left) stack.push(curr.left);

  //       // if the node has a right node
  //       // push the right node on the back of the stack
  //       if(curr.right) stack.push(curr.right);
  //   }
  // }

  // // Depth First Traversal - Iterative - use array stack to visit every node

  depthFirstTraversal() {
      const stack = [this.root];   // stack array for depth, queue array for breadth

      while(stack.length) {
          let current = stack.pop();
          console.log(current.val);   // this is PRE-ORDER bcuz console log happens first

          if(current.left) {
              // current = current.left;  // DO NOT REASSIGN bcuz it will jump to the wrong node prematurely
              stack.push(current.left);
          }
          // console.log(current.val);   // IN-ORDER - to do in order, go all the way to the left before printing
          if(current.right) {
              // current = current.right;  // DO NOT REASSIGN !
              stack.push(current.right);
          }
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
