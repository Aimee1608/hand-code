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
 * @return {number}
 */
var maxDepth = function (root) {
  const help = (node, depth) => {
    if (node === null) return depth
    let left = help(node.left, depth + 1)
    let right = help(node.right, depth + 1)
    return Math.max(left, right)
  }
  return help(root, 0)
}
