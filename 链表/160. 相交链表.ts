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

var getIntersectionNode2 = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
