/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  const help = (node) => {
    if (node === null || node === p || node === q) return node
    const left = help(node.left)
    const right = help(node.right)
    if (left === null) {
      return right
    }
    if (right === null) {
      return left
    }
    return node
  }
  return help(root)

};

var lowestCommonAncestor2 = function (root, p, q) {
  while ((root.val - p.val) * (root.val - q.val) > 0) {
    // if (p.val < root.val) {
    //   root = root.left
    // }
    // if (p.val >= root.val) {
    //   root = root.right
    // }
    if (p.val < root.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return root
}

