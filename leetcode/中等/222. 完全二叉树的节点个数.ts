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
 * @return {number}
 */
 var countNodes = function(root) {
    let node = root;
    let stack = [];
    let sum = 0;
    while(stack.length||node){
        if(node){
            sum++;
            stack.push(node);
            node = node.left;            
        }else{
            node = stack.pop();
            node = node.right;
        }
    }
    return sum;
};



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
 * @return {number}
 */
 var countNodes2 = function(root) {
    // let node = root;
    // let stack = [];
    // let sum = 0;
    // while(stack.length||node){
    //     if(node){
    //         sum++;
    //         stack.push(node);
    //         node = node.left;            
    //     }else{
    //         node = stack.pop();
    //         node = node.right;
    //     }
    // }
    if(!root) return 0
    let sum = 0;
    let stack = [root];
    let res = []
    while(stack.length){
        let arr = [];
        for(let i = 0; i<stack.length; i++){
            res.push(stack[i].val)
            sum++;
            stack[i].left&&arr.push(stack[i].left)
            stack[i].right&&arr.push(stack[i].right)
        }
        stack = arr;
    }
    // console.log(res)
    return sum;
};



var countNodes3 = function(root) {
    const help = (node)=>{
        return node ==null?0:1+help(node.left)+help(node.right);
    }
    return help(root)
};