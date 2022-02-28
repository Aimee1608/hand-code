
 class ListNode {
    val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }


function partition(head: ListNode | null, x: number): ListNode | null {
  let current = head;
  let left = new ListNode(0, null);
  let right = new ListNode(0, null);

  let nlhead = left;
  let nrhead = right;
  while (current) {
    if (current.val < x) {
      left.next = current
      left = left.next;
    } else {
      right.next = current
      right = right.next;
    }
    current = current.next;
  }
  right.next = null;
  left.next = nrhead.next;
  return nlhead.next;
};