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
    if (node === null || node === p || node === q) return node
    let left = help(node.left)
    let right = help(node.right)
    if (left === null) {
      return right
    }
    if (right === null) {
      return left
    }
    return node
  }
  return help(root)
}

var lowestCommonAncestor = function (root, p, q) {
  while ((root.val - p.val) * (root.val - q.val) > 0) {
    if (p.val < root.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return root
}
