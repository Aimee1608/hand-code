
//  * Definition for a binary tree node.
 class TreeNode {
      val: number
     left: TreeNode | null
    right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
  }
 }


 function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  const help = (node1: TreeNode|null, node2: TreeNode|null)=>{
      if(node1 === null && node2 === null) return null;
       const node = new TreeNode(0, null, null);
      if(node2 === null){
          node.val = node1.val;

      } else if(node1 === null){
           node.val = node2.val;
      } else {
           node.val = node1.val + node2.val;
      }
          node.left = help(node1?node1.left: null, node2?node2.left: null);
          node.right = help(node1?node1.right: null, node2?node2.right: null);
          return node;
  }
  return help(root1, root2)
};