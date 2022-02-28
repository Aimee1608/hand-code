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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head;
  let node = new ListNode(0, null);
  let newHead = node;
  while(current){
      if(current.val !== val){
         node.next = current;
         node = node.next;
      }
      current = current.next;
  }
  node.next = null;
  return newHead.next;
};