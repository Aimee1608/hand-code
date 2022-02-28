/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 递归比迭代快
var inorderTraversal = function (root) {
  const arr = []
  const getTree = (tree) => {
    if (tree === null) return;
    getTree(tree.left);
    arr.push(tree.val);
    getTree(tree.right);
  }
  getTree(root)
  return arr
};

var inorderTraversal2 = function (root) {
  const arr = []
  const stack = []
  while (root) {
    stack.push(root)
    root = root.left
  }
  while (stack.length) {
    let node = stack.pop()
    arr.push(node.val)
    node = node.right
    while (node) {
      stack.push(node)
      node = node.left
    }
  }
  return arr
};

console.log()

class A {
  constructor() {
    this.a = 111
  }
}

class B extends A {
  constructor() {
    super()
    console.log(this.a)
  }
}
const b = new B()
b.a = 1
console.log(b.a, b.__proto__.constructor.a)

const inorderTraversal3 = (root) => {
  const arr = []
  const getTree = (node) => {
    if (node === null) return
    getTree(node.left)
    arr.push(node.val)
    getTree(node.right)
  }
  getTree(root)
  return arr
}

const inorderTraversal4 = (root) => {
  const arr = []
  const stack = []
  let node = root
  while (node) {
    stack.push(node)
    node = node.left
  }
  while (stack.length) {
    let tree = stack.pop()
    arr.push(tree.val)
    tree = tree.right
    while (tree) {
      stack.push(tree)
      tree = tree.left
    }
  }
  return arr
}

const inorderTraversal5 = (root) => {
  const arr = []
  const stack = []
  let node = root
  while (stack.length || node) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      arr.push(node.val)
      node = node.right
    }
  }
  return arr
}