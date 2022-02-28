function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let m= new Set();
  while(headA){
      m.add(headA);
      headA = headA.next;
  }
  while(headB){
      if(m.has(headB)){
          return headB
      }
      headB = headB.next;
  }
  return null
};