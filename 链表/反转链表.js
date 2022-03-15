/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let current = head
  while (current) {
    let next = current.next
    current.next = pre
    pre = current
    current = next
  }
  return pre
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  let pre = null
  const help = (current, pre) => {
    if (current === null) return pre
    let next = current.next
    current.next = pre
    pre = current
    return help(next, pre)
  }

  return help(head, pre)
}
