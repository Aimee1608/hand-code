/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let first = head
  let slow = head
  // let pre = null;
  let arr = []
  while (first && first.next) {
    // pre = new ListNode(slow.val, pre);
    arr.push(slow.val)
    first = first.next.next
    slow = slow.next
  }

  if (first != null) {
    slow = slow.next
  }
  while (slow && arr.length > 0) {
    const val = arr.pop()
    if (slow.val != val) {
      return false
    }
    slow = slow.next
  }
  return true
}
