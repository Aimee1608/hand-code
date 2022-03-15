/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const help = (left, right) => {
    if (left > right) return null
    const mid = left + Math.floor((right - left) / 2)
    let node = new TreeNode(nums[mid])
    node.left = help(left, mid - 1)
    node.right = help(mid + 1, right)
    return node
  }
  return help(0, nums.length - 1)
}

var sortedArrayToBST = function (nums) {
  const stack = []
  let root = new TreeNode(0)
  stack.push([0, nums.length - 1, root])
  while (stack.length) {
    const [left, right, node] = stack.pop()
    const mid = left + Math.floor((right - left) / 2)
    node.val = nums[mid]
    if (left < mid) {
      node.left = new TreeNode(0)
      stack.push([left, mid - 1, node.left])
    }
    if (mid < right) {
      node.right = new TreeNode(0)
      stack.push([mid + 1, right, node.right])
    }
  }
  return root
}
