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

function isValidBST(root: TreeNode | null): boolean {
    let pre = null;
    const help = (node: TreeNode | null)=>{
        if(node === null) return true;
        if(help(node.left)){
            return false;
        }
        if(pre!=null && node.val<pre.val){
            return false;
        }
        pre = node;
        return help(node.right);
    }
    return help(root);
};