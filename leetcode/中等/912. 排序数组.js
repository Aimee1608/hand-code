/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // for(let i = nums.length-1; i>=0; i--){
  //     for(let j = 0; j<i; j++){
  //         if(nums[j]>nums[j+1]){
  //             [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
  //         }
  //     }
  // }
  // for(let i = 0; i<nums.length; i++){
  //     for(let j = i+1; j<nums.length; j++){
  //         if(nums[j]<nums[i]){
  //             [nums[j], nums[i]] = [nums[i], nums[j]];
  //         }
  //     }
  // }
  const help = (left, right) => {
    if (left >= right) return
    let current = nums[left]
    let start = left
    let end = left + 1
    while (end <= right) {
      if (nums[end] <= current) {
        if (start != end) {
          ;[nums[start + 1], nums[end]] = [nums[end], nums[start + 1]]
        }
        start++
      }
      end++
    }
    ;[nums[left], nums[start]] = [nums[start], nums[left]]
    help(left, start - 1)
    help(start + 1, right)
  }
  help(0, nums.length - 1)
  return nums
}
