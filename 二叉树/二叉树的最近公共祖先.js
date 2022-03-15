/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const help = node => {
    if (node == null) return null
    if (node === p || node === q) {
      return node
    }
    let left = help(node.left)
    let right = help(node.right)
    if (left && right) {
      return node
    }
    return left || right
  }
  return help(root)
}

// 二刷
function getCommonRoot(root, p, q) {
  const help = node => {
    if (node === null) return null
    if (node === p || node === q) {
      return node
    }
    const left = help(node.left)
    const right = help(node.right)
    if (left && right) {
      return node
    }
    return left || right
  }
  return help(root)
}

// 变形，假设两个叶子节点有指向父级的指针 有点类似两个链表相交节点
// 空间复杂度n(p)
const getCommonRoot2 = (p, q) => {
  let set = new Set()

  while (p) {
    set.add(p)
    p = p.parent
  }
  while (q) {
    if (set.has(q)) {
      return q
    } else {
      q = q.parent
    }
  }
}
// 空间复杂度o(n)
// 先找到顶层parent
// [1,2,3,4,5]
const getCommonRoot3 = (p, q) => {
  let qParent = p
  while (qParent && qParent.parent) {
    qParent = qParent.parent
  }

  const help = node => {
    if (node === null) return null
    if (node === p || node === q) return node
    const left = help(node.left)
    const right = help(node.right)
    if (left && right) {
      return node
    }
    return left || right
  }
  help(qParent)
}

// 二刷
function getCommon(root, p, q) {
  if (root === null) return null
  if (root === p || root === q) return root
  const left = getCommon(root.left, p, q)
  const right = getCommon(root.right, p, q)
  if (left && right) {
    return root
  }
  return left || right
}
