/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let arr = []
  const list = []
  const help = (node) => {
    if (node === null) return
    arr.push(node.val)
    if (node.left === null && node.right === null) {
      list.push(arr.join('->'))
    }
    help(node.left)
    help(node.right)
    arr.pop()
  }
  help(root)
  return list
};

var binaryTreePaths2 = function (root) {
  const stack = []
}