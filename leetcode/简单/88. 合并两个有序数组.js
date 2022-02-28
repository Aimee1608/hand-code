/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let arr = []
  while (i < m && j < n) {
    console.log(i, j, nums1[i], nums2[j], arr)
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i])
      i++
    } else if (nums1[i] == nums2[j]) {
      arr.push(nums1[i])
      arr.push(nums1[i])
      i++
      j++
    } else {
      arr.push(nums2[j])
      j++
    }
    console.log(arr)
  }

  console.log(arr)
  while (i < m) {
    arr.push(nums1[i])
    i++
  }
  while (j < n) {
    arr.push(nums2[j])
    j++
  }

  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
  console.log(nums1)
  return m + n
};

var merge2 = function (nums1, m, nums2, n) {

  let i = m - 1;
  let j = n - 1;
  let a = m + n - 1;
  while (i >= 0 && j >= 0) {
    // console.log(i, j, a, nums1)
    if (nums1[i] <= nums2[j]) {
      nums1[a] = nums2[j]
      j--
    } else {
      nums1[a] = nums1[i]
      nums1[i] = 0;
      i--
    }
    a--
  }
  while (j >= 0) {
    nums1[j] = nums2[j]
    j--
  }


  console.log(nums1)
  // if (m === 0) {
  //   for (let i = 0; i < nums2.length; i++) {
  //     nums1[i] = nums2[i]
  //   }
  // }
  return m + n
};


// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([2, 0], 1, [1], 1))


function merge2(nums1, m, nums2, n) {
  let i = m + n - 1;
  m--;
  n--;
  while (i >= 0) {
    if (nums1[m] <= nums2[n]) {
      nums1[i] = nums2[n];
      n--;

    } else {
      [nums1[i], nums1[m]] = [nums1[m], nums1[i]];
      m--
    }
    i--
  }

  while (n >= 0) {
    nums1[n] = nums2[n]
    n--
  }
}