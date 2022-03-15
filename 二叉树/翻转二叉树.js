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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const help = node => {
    if (node === null) return
    ;[node.left, node.right] = [node.right, node.left]
    help(node.left)
    help(node.right)
  }
  help(root)
  return root
}

var invertTree = function (root) {
  const stack = []
  let head = root
  while (stack.length || root) {
    if (root) {
      ;[root.left, root.right] = [root.right, root.left]
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return head
}
