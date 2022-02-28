/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let left = { val: '' }
  let right = { val: '' }

  const getTree = (tree, way, obj) => {
    if (tree === null) {
      obj.val += 'null'
      return
    }
    obj.val += (way + '-' + tree.val)
    getTree(tree.left, 'left', obj)
    getTree(tree.right, 'right', obj)
  }
  getTree(p, 'root', left)
  getTree(q, 'root', right)
  console.log('left', left)
  console.log('right', right)
  return left.val === right.val
};


var isSameTree2 = function (p, q) {


  const getTree = (left, right) => {
    if (left === null && right === null) {
      return true
    }
    if (left == null || right == null) {
      return false
    }

    if (left.val != right.val) {
      return false
    }
    return getTree(left.left, right.left) && getTree(left.right, right.right)
  }

  return getTree(p, q)
};




var isSameTree3 = (p, q) => {
  const help = (tree1, tree2) => {
    if (tree1 === null && tree2 === null) return true

    if (tree1 === null || tree2 === null) return false

    if (tree1.val != tree2.val) return false

    return help(tree1.left, tree2.left) && help(tree1.right, tree1.right)
  }
  return help(p, q)
}