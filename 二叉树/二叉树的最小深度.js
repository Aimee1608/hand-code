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
var minDepth = function (root) {
  let min = 0
  const help = (root, dep) => {
    if (root === null) return dep
    if (root.left === null && root.right === null) {
      if (min === 0) {
        min = dep + 1
      } else {
        min = Math.min(min, dep + 1)
      }
    }
    help(root.left, dep + 1)
    help(root.right, dep + 1)
  }
  help(root, 0)
  return min
}
