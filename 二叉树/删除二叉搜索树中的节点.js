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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return null
  }
  const help = (node, parent) => {
    if (node === null) return
    if (node.val === key) {
      let newNode = null
      if (node.left != null && node.right != null) {
        let ntmp = node.right
        while (ntmp.left) {
          ntmp = ntmp.left
        }
        ntmp.left = node.left
        newNode = node.right
      } else if (node.left === null && node.right != null) {
        newNode = node.right
      } else if (node.left != null && node.right === null) {
        newNode = node.left
      }

      if (parent.left === node) {
        parent.left = newNode
      } else {
        parent.right = newNode
      }
    }
    help(node.left, node)
    help(node.right, node)
  }
  let parent = new TreeNode(0, root, null)
  help(root, parent)
  return parent.left
}
