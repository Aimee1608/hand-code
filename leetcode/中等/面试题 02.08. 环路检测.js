/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let s = new Set()
  while (head) {
    if (s.has(head)) {
      return head
    } else {
      s.add(head)
    }
    head = head.next
  }
  return null
}

// 快慢指针
var detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next && slow) {
    // 3 0 2 -4  0 2 -4
    // 3 2 0 -4  2 0 -4

    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      let ptr = head
      while (ptr != slow) {
        ptr = ptr.next
        slow = slow.next
      }
      return slow
    }
  }
  return null
}
