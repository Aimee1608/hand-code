/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const help = node => {
    if (node == null) return null
    if (node === p || node === q) {
      return node
    }
    let left = help(node.left)
    let right = help(node.right)
    if (left && right) {
      return node
    }
    return left || right
  }
  return help(root)
}
