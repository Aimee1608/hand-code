
function levelOrder(root: TreeNode | null): number[][] {
  const arr = [];
  const help = (node, dep) => {
    if (node === null) return;
    if (arr.length === dep) {
      arr.push([])
    }
    arr[dep].push(node.val);
    if (node.left != null) {
      help(node.left, dep + 1);
    }
    if (node.right != null) {
      help(node.right, dep + 1);
    }
  }
  help(root, 0)
  return arr;
}