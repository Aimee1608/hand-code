/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const arr = []
  const help = (node) => {
    if (node === null) return
    help(node.left)
    help(node.right)
    arr.push(node.val)
  }
  help(root)
  return arr
};

var postorderTraversal2 = function (root) {
  const arr = []
  const stack = []
  if (root) {
    stack.push(root)
  }
  while (stack.length) {
    const node = stack.pop()
    if (node) {
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
      stack.push(node)
      stack.push(null)
    } else {
      arr.push(stack.pop().val)
    }
  }
  return arr
}

var postorderTraversal3 = (root) => {
  const arr = []
  const stack = []
  let pre = null;
  while (stack.length || root) {
    // 判断当前节点是否为null
    if (root) {
      // 先推入当前节点
      stack.push(root);
      // 继续推入左边的节点
      root = root.left;
    } else {
      // 左边的节点为空时
      // 返回左边为null的父节点
      root = stack.pop();
      // 当父节点也不存在右子节点，或者右子节点为父节点
      if (!root.right || root.right === pre) {
        // 遍历父节点的val
        arr.push(root.val);
        // 设置父节点为先节点
        pre = root;
        // 将当前的父节点设置为null,下次走到父节点
        root = null;
      } else {
        // 继续将当前节点推入进去，也将有右子节点推入进去
        stack.push(root);
        stack.push(root.right);
        // 设置当前节点为 当前右子节点的左子节点
        root = root.right.left;
      }

    }
  }
  return arr
}