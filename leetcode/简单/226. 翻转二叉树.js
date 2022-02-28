/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const help = (node) => {
    if (node === null) return
    let va = node.right
    node.right = node.left
    node.left = va
    help(node.right)
    help(node.left)
  }
  help(root)
  return root
};

var invertTree2 = (root) => {
  const stack = []
  let node = root;
  while (stack.length || node) {
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      node = node.right;
    }
  }
  return root;
}


function invertTree3(root) {
  const help = (node) => {
    if (node === null) return null;
    const tree = new TreeNode(node.val);
    tree.left = help(node.right);
    tree.right = help(node.left);
    return tree
  }
  const node = help(root)
  // console.log(root, node);
  return node;
};