/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  let nums = []
  while (head) {
    nums.push(head.val)
    head = head.next
  }
  let root = new TreeNode(0)
  let stack = [[0, nums.length - 1, root]]

  while (stack.length) {
    const [left, right, node] = stack.pop()

    let mid = parseInt((left + right) / 2)
    node.val = nums[mid]

    if (left < mid) {
      node.left = new TreeNode(0)
      stack.push([left, mid - 1, node.left])
    }

    if (right > mid) {
      node.right = new TreeNode(0)
      stack.push([mid + 1, right, node.right])
    }
  }

  return root
}
