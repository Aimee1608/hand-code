/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if(!root) return []
    let stack = [root]
    let tmp = true;
    let res = [];
    while(stack.length){
        const arr = [];
        let ret = []
       for(let i = 0;i<stack.length; i++){
           const current = stack[i]  
           ret[i] = tmp?current.val: stack[stack.length-i-1].val
           current.left&&arr.push(current.left)
           current.right && arr.push(current.right)
       }
       ret.length>0 &&res.push(ret)
       stack = arr;
       tmp = !tmp;
    }
    return res;
};