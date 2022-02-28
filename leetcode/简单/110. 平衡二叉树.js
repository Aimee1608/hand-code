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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const getTree = (node) => {
    if (node === null) return 0
    let left = getTree(node.left)
    let right = getTree(node.right)

    if (left < 0) return -1
    if (right < 0) return -1

    return Math.abs(right - left) > 1 ? -1 : Math.max(left, right) + 1
  }
  const max = getTree(root)
  return max !== -1
};

var isBalanced2 = function (root) {
  const getHight = (node) => {
    if (node === null) return 0
    const left = getHight(node.left)
    if (left == -1) return -1
    const right = getHight(node.right)
    if (right == -1) return -1
    return Math.abs(right - left) > 1 ? -1 : Math.max(left + 1, right + 1)
  }
  return getHight(root) != -1
}

const isBalanced3 = (root) => {
  const help = (node) => {
    if (node === null) return 0
    let left = help(node.left)
    if (left == -1) {
      return -1
    }
    let right = help(node.right)

    if (right == -1) {
      return -1
    }
    return Math.abs(left - right) > 1 ? -1 : Math.max(left + 1, right + 1)
  }
  return help(root) != -1
}