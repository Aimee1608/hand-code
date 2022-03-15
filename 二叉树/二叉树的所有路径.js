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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let arr = []
  let tmp = []
  const help = node => {
    if (node === null) return
    tmp.push(node.val)
    if (node.left === null && node.right === null) {
      arr.push(tmp.join('->'))
    }
    help(node.left)
    help(node.right)
    tmp.pop()
  }
  help(root)
  return arr
}
