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
  const stack = []
  let arr = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      arr.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1],
      curr = arr[i]
    prev.left = null
    prev.right = curr
  }

  return root
}

var flatten2 = function (root) {
  if (root === null) {
    return
  }
  const stack = []
  stack.push(root)
  let pre = null
  while (stack.length) {
    let node = stack.pop()
    if (pre != null) {
      pre.left = null
      pre.right = node
    }

    if (node.right != null) {
      stack.push(node.right)
    }
    if (node.left != null) {
      stack.push(node.left)
    }
    pre = node
  }
}
