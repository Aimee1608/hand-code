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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return []
  let ret = []
  let queue = [root]
  while (queue.length) {
    let len = queue.length - 1
    ret.push([])
    while (len >= 0) {
      const current = queue.shift()
      ret[ret.length - 1].push(current.val)
      current.left && queue.push(current.left)
      current.right && queue.push(current.right)
      len--
    }
  }
  return ret
}

var levelOrder = function (root) {
  let ret = []
  const help = (node, depth) => {
    if (node === null) return
    if (ret.length === depth) {
      ret.push([])
    }
    ret[depth].push(node.val)
    if (node.left) {
      help(node.left, depth + 1)
    }
    if (node.right) {
      help(node.right, depth + 1)
    }
  }
  help(root, 0)
  return ret
}
