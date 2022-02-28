/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    
    const help = (preorder, inorder)=>{
        if(preorder.length === 0 || inorder.length === 0){
            return null
        }
        let i = 0;
         let tree = new TreeNode(preorder[0])
        while(i<preorder.length){
            if(preorder[0] === inorder[i]){
                let pre_left = preorder.slice(1, i+1)
                let pre_right = preorder.slice(i+1, preorder.length);
                let in_left = inorder.slice(0, i);
                let in_right = inorder.slice(i+1, inorder.length);
                tree.left = help(pre_left, in_left);
                tree.right = help(pre_right, in_right);
                break;
            }
            
            i++;
        }
        return tree;
    }
    return help(preorder, inorder)
};