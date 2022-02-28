/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root
  let stack = [root]

  while (stack.length) {
    let newArr = []
    let size = stack.length
    for (let i = 0; i < size; i++) {
      let current = stack[i]
      current.next = i == size - 1 ? null : stack[i + 1]
      current.left && newArr.push(current.left)
      current.right && newArr.push(current.right)
    }

    stack = newArr
  }
  return root
}
