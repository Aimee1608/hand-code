function levelOrderBottom(root: TreeNode | null): number[][] {
  const arr = [];
  const help = (node, dep)=>{
      if(node === null){
          return;
      }
      if(arr[dep]){
          arr[dep].push(node.val);
      } else{
          arr[dep] = [node.val];
      }
      help(node.left, dep+1);
      help(node.right, dep+1); 
  }
  help(root, 0)
  return arr.reverse();
};

function levelOrderBottom2(root: TreeNode | null): number[][] {
  const arr = [];
  let stack = [root];
  while (stack.length) {
    arr.push([]);
    const len = stack.length;
    for (let i = 0; i < len; i++){
      const node = stack.shift();
      arr[arr.length - 1].push(node.val);
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
  }
  return arr.reverse();
};