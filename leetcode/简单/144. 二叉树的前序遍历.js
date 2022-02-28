/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const arr = []
  const help = (node) => {
    if (node === null) return
    arr.push(node.val)
    help(node.left)
    help(node.right)
  }
  help(root)
  return arr
};

var preorderTraversal2 = function (root) {
  const arr = []
  const stack = []
  if (root) stack.push(root);


  while (stack.length) {
    let node = stack.pop()
    if (!node) {
      arr.push(stack.pop().val);
      continue;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    stack.push(node)
    stack.push(null)
  }
  return arr
}

var preorderTraversal3 = function (root) {
  const arr = []
  const stack = []
  while (stack.length || root) {
    if (root) {
      arr.push(root.val);
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      root = root.right;
    }
  }
  return arr
}