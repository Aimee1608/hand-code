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

function reverseList(head: ListNode | null): ListNode | null {
  let node = new ListNode(0, null);
  const newHead = node;
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;  
  }
  for (let i = arr.length-1; i >=0; i--){
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return newHead.next;
};

function reverseList2(head: ListNode | null): ListNode | null{
  let node = new ListNode(0, null);
  const newHead = node;
  let current = head;
  const help = (current) => {
    if (current === null) return
    help(current.next);
    node.next = new ListNode(current.val, null);
    node = node.next;
  }
  help(current);
  return newHead.next;
}

function reverseList3(head: ListNode | null): ListNode | null{
  let node = new ListNode(0, null);
  const newHead = node;
  let current = head;
  while (current) {
    let n = new ListNode(current.val, node.next);
    node.next = n;
    current = current.next;
  }
  return newHead.next;
}