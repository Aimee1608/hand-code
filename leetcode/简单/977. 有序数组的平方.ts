function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++){
    nums[i] = Math.pow(nums[i], 2)
  }
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      if (nums[j]<nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums
};


function sortedSquares2(nums: number[]): number[] {
  let start = 0;
  let end = nums.length - 1;
  let k = nums.length - 1;
  let arr = new Array(nums.length)
  while (start<=end) {
    if (Math.abs(nums[start]) < Math.abs(nums[end])) { 
      arr[k] = Math.pow(nums[end], 2)
      k--
      end++
    } else {
      arr[k] = Math.pow(nums[start], 2)
      k--
      start++
    }
  }
 return nums
};