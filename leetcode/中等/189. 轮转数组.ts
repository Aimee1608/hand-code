/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  nums.splice(0, 0, ...nums.splice(nums.length - k, nums.length));
  // return nums
  console.log(nums)
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

function rotate2(nums: number[], k: number): void{
  k = k % nums.length;
  let s = nums.length - k;
  let l = s-1;
  while (l >= 0) {
    let i = l
    while (i < l+k) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
      i++
    }
    l--
  }
  console.log(nums)
}

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))

function rotate3(nums: number[], k: number): void{
  k = k % nums.length;
  let l = nums.length-1;
  while (l >= nums.length - k) {  
    const item = nums.pop();
    if (item) {
      nums.unshift(item)
    }
    l--
  }
  console.log(nums)
}

function rotate4(nums: number[], k: number): void{
  k = k % nums.length;
  const help = (left: number, right:number, nums: number[]) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]] ;
      right--;
      left++;
    }
  }
  help(0, nums.length - 1, nums);
  help(0, k - 1, nums);
  help(k, nums.length - 1, nums);
  console.log(nums);
}

console.log(rotate4([1, 2, 3, 4, 5, 6, 7], 3))