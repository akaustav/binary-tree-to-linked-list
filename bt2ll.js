/*
Stack: ->base<- 0, 1, 2, 3 ->top<-
Linked List: 1 -> 2 -> 3 -> 4 -> 5
Doubly Linked List: 1 <-> 2 <-> 3 <-> 4 <-> 5

Binary: Tree:
     A
    / \
   /   \
  B     C
 / \   / \
D   E F   G


List of Linked List:
A
B -> C
D -> E -> F -> G


        Node (value)
        /  \
       /    \
      /      \
    BTNode (val, left, right, parent)
            LLNode (val, next)
            DLLNode (val, next, prev)

*/


// Binary Tree to Linked List

// Node Constructor
function Node(value) {
  'use strict';

  this.value = value;
}

// Binary Tree Node Constructor
function BTNode(value, left, right) {
  'use strict';

  Node.call(this, value);
  this.left  = left;
  this.right = right;
}

// BTNode extends Node
BTNode.prototype = Object.create(Node.prototype);
BTNode.prototype.constructor = BTNode;


// Linked List Node Constructor
function LLNode(value, next) {
  'use strict';

  Node.call(this, value);
  this.next = next;
}

// LLNode extends Node
LLNode.prototype = Object.create(Node.prototype);
LLNode.prototype.constructor = LLNode;


function LinkedList() {
  this.head = undefined;
}


LinkedList.prototype.add = function add(value) {
  var head = this.head;

  if (!head) {
    this.head = new LLNode(value);
  } else {
    var currentNode = head;
    var newNode = new LLNode(value);

    currentNode.next = newNode;
  }
};


function BinaryTree() {
  this.root = undefined;
}

BinaryTree.prototype.push = function push(value) {
  var root = this.root;

  if (!root) {
    this.root = new BTNode(value);
    return;
  }

  var currentNode = root;
  var newNode     = new BTNode(value);

  while (currentNode) {
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};


BinaryTree.prototype.getLevel = function getLevel(val) {
  return this.getLevelRecursive(val, this.root, 1);
}

/* get the level of the node */
// root node is assumed to be at level 1
BinaryTree.prototype.getLevelRecursive = function getLevelRecursive(val, btnode, level) {
  if (!btnode) { return 0; }

  if (btnode.value === val) {
    return level;
  }

  return this.getLevelRecursive(val, btnode.left, level+1) | this.getLevelRecursive(val, btnode.right, level+1);
}


BinaryTree.prototype.createLevelLinkedListRecursive = function createLevelLinkedListRecursive(root, lists, level) {
  if (!root) return; // base case

  var list = undefined;

  if (lists.length === level) { // Level is not contained in the list
    list = new LinkedList();
    lists.push(list);
  } else {
    list = lists[level];
  }

  if (list && list instanceof LinkedList) {
    list.add(root.value);
  }

  this.createLevelLinkedListRecursive(root.left, lists, level + 1);
  this.createLevelLinkedListRecursive(root.right, lists, level + 1);
};


BinaryTree.prototype.createLevelLinkedList = function createLevelLinkedList() {
  debugger;
  var lists = [];
  this.createLevelLinkedListRecursive(this.root, lists, 0);
  return lists;
};


var bt = new BinaryTree();

bt.push(4);
bt.push(1);
bt.push(2);
bt.push(3);
bt.push(5);
bt.push(6);
bt.push(7);

var x = bt.createLevelLinkedList();
