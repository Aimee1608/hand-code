/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null || root2 === null) return root1 || root2
  let newRoot = new TreeNode()
  let stack = [[root1, root2, newRoot]]
  while (stack.length) {
    const [node1, node2, newNode] = stack.pop()
    if (node1 && node2) {
      newNode.val = node1.val + node2.val
    } else if (node1) {
      newNode.val = node1.val
    } else if (node2) {
      newNode.val = node2.val
    }
    if ((node1 && node1.left) || (node2 && node2.left)) {
      newNode.left = new TreeNode()
      stack.push([node1 ? node1.left : null, node2 ? node2.left : null, newNode.left])
    }
    if ((node1 && node1.right) || (node2 && node2.right)) {
      newNode.right = new TreeNode()
      stack.push([node1 ? node1.right : null, node2 ? node2.right : null, newNode.right])
    }
  }
  return newRoot
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const help = (node1, node2) => {
    if (node1 === null && node2 === null) return null
    let newNode = new TreeNode()
    if (node1 === null) {
      newNode.val = node2.val
    } else if (node2 === null) {
      newNode.val = node1.val
    } else {
      newNode.val = node1.val + node2.val
    }
    newNode.left = help(node1 ? node1.left : null, node2 ? node2.left : null)
    newNode.right = help(node1 ? node1.right : null, node2 ? node2.right : null)
    return newNode
  }
  return help(root1, root2)
}
