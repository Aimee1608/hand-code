function intersect(nums1: number[], nums2: number[]): number[] {
  const arr = [];
  nums1.sort((a,b)=>a-b);
  nums2.sort((a,b)=>a-b);
  let i = 0;
  let j = 0;
  while(i<nums1.length &&j<nums2.length){
      if(nums1[i]=== nums2[j]){
          arr.push(nums1[i])
          i++;
          j++;
      } else if(nums1[i]<nums2[j]){
          i++
      } else if(nums1[i]>nums2[j]){
          j++
      }
  }
  return arr;
};