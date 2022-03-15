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
var isValidBST = function (root) {
  let pre = null
  const help = node => {
    if (node === null) return true
    if (!help(node.left)) {
      return false
    }
    if (pre && pre.val >= node.val) {
      return false
    }
    pre = node
    return help(node.right)
  }
  return help(root)
}
