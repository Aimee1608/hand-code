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

 function middleNode(head: ListNode | null): ListNode | null {
  let current = head;
  let i = 1;

  while(current){
      current = current.next;
      i++;
  }
  let mid = Math.ceil(i/2);   
  current = head;
  while(mid>1){
      current = current.next;
      mid--;
  }
 
  return current;
};

function middleNode2(head: ListNode | null): ListNode | null {
  let current = head;
  let i = 0;
  let mid = head;
  while (current) {
    if (i % 2 === 1) {
      mid = mid.next;
    }
    current = current.next;
    i++;
  }
  return mid;
};

function middleNode3(head: ListNode | null): ListNode | null {
  let current = head;
  let i = 1;
  let list = [current];
  while (current) {
    list.push(current);
    current = current.next;
    i++;
  }
  return list[Math.ceil(i/2)];
};

function middleNode4(head: ListNode | null): ListNode | null {
  let current = head;
  let mid = head;
  while (current && current.next) {
    mid = mid.next; 
    current = current.next.next;
  }
  return mid;
};