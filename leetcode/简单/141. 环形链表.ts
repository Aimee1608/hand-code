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

 function hasCycle(head: ListNode | null): boolean {
   if (head === null || head.next === null) return false
   let node = head;
   let s = new Set();
   while (node) {
     if (s.has(node)) {
       return true
     }
     s.add(node);
     node = node.next;
   }
   return false;
};

function hasCycle2(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false
  let slow = head;
  let fast = head.next;
  while (slow!=fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};