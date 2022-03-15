/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {

  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }
  let currentL1 = list1
  let currentL2 = list2
  let head = null
  let newNode = new ListNode()
  head = newNode;
  let newVal = null;

  while (currentL1 && currentL2) {
    if (currentL1.val <= currentL2.val) {
      newVal = currentL1.val
      currentL1 = currentL1.next
    } else {
      newVal = currentL2.val
      currentL2 = currentL2.next
    }
    newNode.next = new ListNode(newVal, null)
    newNode = newNode.next
  }

  if (currentL2) {
    newNode.next = currentL2
  }
  if (currentL1) {
    newNode.next = currentL1
  }
  return head.next
};
mergeTwoLists([1, 2, 4], [1, 3, 4])