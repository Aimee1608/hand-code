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
// 前序
// 递归
var preorderTraversal = function (root) {
  let ret = []
  const help = node => {
    if (node === null) return
    ret.push(node.val)
    help(node.left)
    help(node.right)
  }
  help(root)
  return ret
}
// 迭代
var preorderTraversal = function (root) {
  let ret = []
  let stack = []
  while (stack.length || root) {
    if (root) {
      ret.push(root.val)
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return ret
}

// 中序
// 递归
var inorderTraversal = function (root) {
  let ret = []
  const help = node => {
    if (node === null) return
    help(node.left)
    ret.push(node.val)
    help(node.right)
  }
  help(root)
  return ret
}

// 迭代
var inorderTraversal = function (root) {
  let ret = []
  let stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      ret.push(root.val)
      root = root.right
    }
  }
  return ret
}

// 后序
var postorderTraversal = function (root) {
  let ret = []
  const help = node => {
    if (node === null) return null
    help(node.left)
    help(node.right)
    ret.push(node.val)
  }
  help(root)
  return ret
}

// 迭代？
var postorderTraversal = function (root) {
  let ret = []
  let pre = null
  let stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if (!root.right || root.right === pre) {
        ret.push(root.val)
        pre = root
        root = null
      } else {
        stack.push(root)
        stack.push(root.right)
        root = root.right.left
      }
    }
  }
  return ret
}
