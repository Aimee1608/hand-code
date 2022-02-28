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

 function sortList(head: ListNode | null): ListNode | null {
    let newHead = new ListNode();
    let newHeadTmp = newHead;
    let arr = [];
    let tmp = head;
    while(tmp){
        arr.push(tmp.val)
        tmp = tmp.next
    }
    // console.log(arr)
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    for(let i = 0; i<arr.length; i++){
        newHeadTmp.next = new ListNode(arr[i])
        newHeadTmp = newHeadTmp.next
    }

    return newHead.next
};