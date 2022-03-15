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
  const maxDep = (node, dep) => {
    if (node === null) return dep
    let left = maxDep(node.left, dep + 1)
    let right = maxDep(node.right, dep + 1)
    return Math.max(left, right)
  }
  const help = root => {
    if (root === null) return true
    return Math.abs(maxDep(root.left, 0) - maxDep(root.right, 0)) <= 1 && help(root.left) && help(root.right)
  }
  return help(root)
}
