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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const list = []
  const help = (node, sum, str) => {
    if (node === null) {
      str = ''
      return false
    }
    sum += node.val
    str = str + '-' + node.val
    // arr.push(node.val)
    if (node.left === null && node.right === null && sum === targetSum) {
      // list.push(arr)
      list.push(str.split('-').slice(1))
      str = ''
      return true
    }
    const left = help(node.left, sum, str)
    const right = help(node.right, sum, str)
    return left || right
  }
  help(root, 0, '')
  console.log(list)

  return list
};


var pathSum = function (root, targetSum) {
  const list = []
  const arr = []
  const help = (node, sum) => {
    if (node === null) {
      return
    }
    sum += node.val
    arr.push(node.val)
    if (node.left === null && node.right === null && sum === targetSum) {
      list.push(arr.slice())
    }
    help(node.left, sum)
    help(node.right, sum)
    arr.pop()
  }
  help(root, 0)
  console.log(list)

  return list
};