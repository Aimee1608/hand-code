function searchRange(nums: number[], target: number): number[] {
  let arr = [-1, -1];
  let i = 0;
  let s = -1;
  while(i<nums.length){
      if(nums[i]===target){
          if(s===-1){
              arr[0] = i;
          }
          s++;
          
      }
      i++;
  }
  if(s>=-1&&arr[0]>-1){
   arr[1] = arr[0]+s;
  }
  
  return arr;
};


function searchRange2(nums: number[], target: number): number[] {
  if(nums.length==0) return [-1,-1];
  let left = 0;
  let right = nums.length-1;
  while(left<=right){
      let mid = left + Math.floor((right-left)/2);
      if(nums[mid]>target){
          right = mid-1;
      }else if(nums[mid]<target){
          left = mid+1;
      } else {
          let start = mid;
          let end = mid;
          while(nums[start] === target){
              start--;
          }
          while(nums[end] === target){
              end++;
          }
          return [start+1, end-1];
      }
  }
  return [-1, -1];
};