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
  const getHight = (node) => {
    if (node === null) return -1
    let left = getHight(node.left)
    let right = getHight(node.right)

    if (left === -1 && right === -1) return 1
    if (left === -1) return right + 1
    if (right === -1) return left + 1
    return Math.min(left, right) + 1

  }
  return getHight(root)
};




const minDepth2 = (root) => {

  const help = (node) => {
    if (node === null) return -1
    const left = help(node.left)
    const right = help(node.right)
    if (left === -1 && right === -1) {
      return 1
    }
    if (left === -1) {
      return right + 1
    }
    if (right === -1) {
      return left + 1
    }
    return Math.min(left, right) + 1
  }
  return help(root)
}