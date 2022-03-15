// https://leetcode-cn.com/problems/path-sum/

var hasPathSum = function (root, targetSum) {
  if (root == null) {
    return false
  }
  if (root.left == null && root.right == null) {
    return targetSum === root.val
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

function getSum(root, targetSum) {
  if (root === null) return false
  if (root.left === null && root.right === null) {
    return targetSum - root.val === 0
  }
  return getSum(root.left, targetSum - root.val) || getSum(root.right, targetSum - root.val)
}
