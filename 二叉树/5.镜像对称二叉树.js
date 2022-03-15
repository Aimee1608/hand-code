// 判断对称二叉树
var isSymmetric = function (root) {
  if (root == null) {
    return false
  }
  return check(root.left, root.right)
}

function check(root1, root2) {
  if (root1 === null && root2 === null) {
    return true
  }
  if (root1 === null || root2 === null) {
    return false
  }
  return root1.val == root2.val && check(root1.left, root2.right) && check(root1.right, root2.left)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const help = (left, right) => {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return help(left.left, right.right) && help(left.right, right.left)
  }
  return help(root.left, root.right)
}

// 二刷
function isSymmetric(tree) {
  if (tree === null) return true
  const help = (left, right) => {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val != right.val) return false
    return help(left.left, right.right) && help(left.right, right.left)
  }
  help(tree.left, tree.right)
}
