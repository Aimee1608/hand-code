/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
      val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let i = 0;
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current);
    current = current.next;
    i++
  }
  let r = arr[arr.length - n];
  const pre = arr[arr.length - n - 1];
  if (pre) {
    pre.next = r.next
  } else{
    head = r.next;
  }
  return head;
};

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let pre = null;
  let m = head;
  let fast = 1;
  let slow = 1;
  while (current) {
    if (slow + n <= fast) {
      pre = m;
      m = m.next;
     slow++
    }
    current = current.next;
    fast++
  }
  if (pre) {
    pre.next = m.next
  } else{
    head = m.next;
  }
  return head;
};


function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let pre = null;
  let m = head;
  while (current) {
    if (n > 0) {
      current = current.next;
      n--
    }
    pre = m;
    m = m.next;
    current = current.next;
  }
  if (pre) {
    pre.next = m.next
  } else{
    head = m.next;
  }
  return head;
};

function removeNthFromEnd4(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let dummy = new ListNode(0, head);
  let m = dummy;
  while (n-- >0) {
    current = current.next;
  }

  while (current) {
    current = current.next;
    m = m.next
  }
  m.next = m.next.next
  return dummy.next;
};