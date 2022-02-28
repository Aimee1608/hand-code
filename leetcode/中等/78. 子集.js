/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // let len = nums.length;
  // let arr = [[]];
  // for(let i = 0; i<len; i++){
  //     arr.push([nums[i]]);
  //     let tmp = []
  //     let step =1;
  //     while(step<=i){
  //         let m = 0
  //         while(m<=i){
  //             tmp.push(nums.slice(m, m+step));
  //             m++;
  //         }
  //         step++;
  //     }
  //     for(let j = i+1; j<len; j++){
  //        for(let n = 0;n<tmp.length; n++){
  //            arr.push([...tmp[n], nums[j]])
  //        }
  //     }
  // }
  // return arr

  let res = []
  // 记录走过的路径;
  let track = []
  const backtrack = (nums, start, track) => {
    res.push([...track])
    // 注意 i 从 start 开始递增
    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i])
      // 回溯
      backtrack(nums, i + 1, track)
      // 撤销选择
      track.pop()
    }
  }
  backtrack(nums, 0, track)
  return res
}
