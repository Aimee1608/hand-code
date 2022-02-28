/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var sortedArrayToBST = function (nums) {
  const insert = (node, val) => {
    const tree = new TreeNode(val)
    let newNode = node
    let current = null
    while (newNode) {
      current = newNode
      if (newNode.val < val) {
        newNode = newNode.right
      } else {
        newNode = newNode.left
      }
    }
    if (current.val < val) {
      current.right = tree
    } else {
      current.left = tree
    }
  }

  let center = parseInt(nums.length / 2)
  let node = new TreeNode(nums[center])
  let i = center
  let j = center + 1
  let arr = []
  // while (i >= 0 && j < nums.length) {
  //   // insert(node, nums[i])
  //   // insert(node, nums[j])
  //   arr.push(parseInt((0 + i) / 2))
  //   arr.push(parseInt((j + nums.length - 1) / 2))
  //   i++
  //   j--
  // }

  const getCenter = (left, right) => {
    // console.log(left, right)
    if (left > right) return
    const center = parseInt((left + right) / 2)
    arr2.push(nums[center])
    getCenter(left, center - 1)
    // console.log(center)

    // console.log(arr2)
    getCenter(center + 1, right)
  }
  const arr2 = []
  getCenter(0, nums.length - 1)
  console.log('arr', arr2)
  return node
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
function fn(nums) {
  let root = new TreeNode(0)
  let stack = [[0, nums.length - 1, root]]

  while (stack.length) {
    const [left, right, node] = stack.pop()

    let mid = parseInt((left + right) / 2)
    node.val = nums[mid]

    if (left < mid) {
      node.left = new TreeNode(0)
      stack.push([left, mid - 1, node.left])
    }

    if (right > mid) {
      node.right = new TreeNode(0)
      stack.push([mid + 1, right, node.right])
    }
  }

  return root
}

function sortedArrayToBST2(nums) {
  const setTree = (nums, left, right) => {
    if (left > right) return null
    const mid = left + parseInt((right - left) / 2)
    const node = new TreeNode(nums[mid])
    node.left = setTree(nums, left, mid - 1)
    node.right = setTree(nums, mid + 1, right)
    return node
  }
  return setTree(nums, 0, nums.length - 1)
}

const sortedArrayToBST3 = list => {
  const node = new TreeNode(0)
  let left = 0
  let right = list.length - 1
  const stack = [left, right, node]
  while (stack.length) {
    let [left, right, node] = stack.pop()
    const middle = parseInt((right - left) / 2) + left
    node.val = list[middle]
    if (middle > left) {
      node.left = new TreeNode(0)
      stack.push([left, middle - 1, node.left])
    }
    if (middle < right) {
      node.right = new TreeNode(0)
      stack.push([middle + 1, right, node.right])
    }
  }
  return node
}

const sortedArrayToBST4 = list => {
  const help = (left, right) => {
    if (left > right) return null
    const middle = parseInt((right - left) / 2) + left
    const node = new TreeNode()
    node.val = list[middle]
    node.left = help(left, middle - 1)
    node.right = help(middle + 1, right)
    return node
  }
  return help(0, list.length - 1)
}
