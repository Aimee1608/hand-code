function rob(nums: number[]): number {
  let pre = 0;
  let max = 0;
  let tmp = 0;
  let i = 0;
  while (i<nums.length) {
    tmp = max;
    max = Math.max(pre + nums[i], max);
    pre = tmp;
    i++;
  }
  return max;
};