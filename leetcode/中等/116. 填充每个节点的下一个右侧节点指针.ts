/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function connect(root: Node | null): Node | null {
  // const help = (node: Node| null)=>{
  //     if(node === null) return;
  //     // 前  中 左 右 1 2 4 5 3 6 7
  //     help(node.left);        
  //     // 中  左 中 右  4 2 5 1 6 3 7
  //     help(node.right);
  //     // 后 左 右 中  4 5 2 6 7 3 1
  //     console.log(node.val);
  // }
  // help(root);
  if(root === null) return null;
  let m = new Map();
  const help = (left: Node| null, right: Node|null, i)=>{
      if(left === null && right === null) return [];
      left.next = right;
      right.next = null;
      if(m.has(i)){
          m.get(i).next = left;
         
      } 
      m.set(i, right);
      
      help(left.left, left.right, i+1);
      help(right.left, right.right, i+1);
      return [left, right];
  }

  help(root.left, root.right, 0);

  return root;
};