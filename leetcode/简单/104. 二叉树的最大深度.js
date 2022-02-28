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
  if (root == null) return 0
  const getTree = (tree) => {
    if (tree === null) {
      return 0
    }
    let left = getTree(tree.left)
    let right = getTree(tree.right)
    left++
    right++
    return Math.max(left, right)

  }

  return getTree(root)
};

const maxDepth2 = (root) => {
  const help = (node) => {
    if (node === null) return 0
    const left = help(node.left)
    const right = help(node.right)
    return Math.max(left, right) + 1
  }
  return help(root)
}