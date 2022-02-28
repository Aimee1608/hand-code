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
  let str1 = ''
  let str2 = ''
  const getTree = (tree) => {
    if (tree === null) {
      str1 += 'null'
      str2 = 'null' + str2
      return
    }
    str1 += tree.val
    getTree(tree.left)
    getTree(tree.right)
    str2 = tree.val + str2
  }
  getTree(root)
  return str1 === str2
};

var isSymmetric2 = function (root) {

  const getTree = (left, right) => {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null) {
      return false
    }

    return left.val == right.val && getTree(left.right, right.left) && getTree(left.left, right.right)
  }

  return getTree(root.left, root.right)
};




const isSymetric3 = (root) => {
  if (root === null) return true
  const help = (tree1, tree2) => {
    if (tree1 === null && tree2 === null) return true
    if (tree1 === null || tree2 === null) return false
    return tree1.val === tree2.val && help(tree1.left, tree2.right) && help(tree1.right, tree2.left)
  }

  return help(root.left, root.right)
}