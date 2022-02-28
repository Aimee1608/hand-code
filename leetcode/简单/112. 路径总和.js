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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

  const getTree = (node, sum) => {
    // 如果该节点为空节点 返回false
    if (node === null) {

      return false
    }
    // 如果该节点为叶子节点，计算返回结果
    if (node.left === null && node.right === null) return sum + node.val === targetSum

    const left = getTree(node.left, sum + node.val)
    const right = getTree(node.right, sum + node.val)
    return left || right
  }
  return getTree(root, 0)

};

const hasPathSum2 = (root, targetSum) => {

  const help = (node, sum) => {
    if (node === null) return false
    sum += node.val
    if (sum === targetSum && node.left === null && node.right === null) {
      return true
    }
    return help(node.left, sum) || help(node.right, sum)
  }
  return help(root, 0)
}