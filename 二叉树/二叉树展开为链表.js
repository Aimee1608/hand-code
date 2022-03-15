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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return
  }
  const stack = []
  stack.push(root)
  let pre = null
  while (stack.length) {
    const node = stack.pop()
    if (pre !== null) {
      pre.left = null
      pre.right = node
    }

    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
    pre = node
  }
}

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return
  }
  let arr = []
  const help = node => {
    if (node === null) {
      return
    }
    arr.push(node)
    help(node.left)
    help(node.right)
  }
  help(root)
  for (let i = 0; i < arr.length; i++) {
    arr[i].left = null
    arr[i].right = i === arr.length - 1 ? null : arr[i + 1]
  }
}
