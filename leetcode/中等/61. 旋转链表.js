/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null
  let pre = head
  let len = 0
  while (head) {
    head = head.next
    len++
  }
  let relK = k % len
  let left = null
  let right = new ListNode()
  let newHead = right
  let i = 0
  head = pre
  while (head) {
    if (len - relK - 1 === i) {
      left = head
      right.next = head.next
      while (right && right.next) {
        right = right.next
      }
      left.next = null
      right.next = pre
      return newHead.next
    }
    head = head.next
    i++
  }
  return pre
}
