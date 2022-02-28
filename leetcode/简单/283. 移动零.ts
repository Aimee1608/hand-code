/**
 Do not return anything, modify nums in-place instead.
 换位置之后的start 为 0 
 */
 function moveZeroes(nums: number[]): void {
  let end = nums.length-1;
  let len = 0;
  let i = 0;
  while(i<=end){
    if (nums[0] === 0) {
      let start = i + 1;
      len = 1;
      while (start <= end) {
        if (nums[start] === 0) {
          len++
        } else {
          [nums[start], nums[start - len]] = [nums[start - len], nums[start]];
        }
        start++
      }
      break;
    }
    i++
  }

};