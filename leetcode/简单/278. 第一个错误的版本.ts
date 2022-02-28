/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {
   return function (n: number): number {
     let left: number = 0;
     let right: number = n - 1;
     while (left <=right) {
       const mid = left + ((right - left) >> 1);
      //  如果是true 说明是错误的版本
      if (isBadVersion(mid)) {
        right = mid-1
      } else {
        left = mid +1
      }
     }
    return left
    
  };
 };

var solution2 = function (isBadVersion: any) {
  return function (n: number): number{
    if(n === 1) return 1
    const help = (left, right) => {
      if (left > right) {
        return left
      }
      const mid = left + ((right-left)>>1)
      if (isBadVersion(mid)) {
        right = mid-1
      } else {
        left = mid +1
      }
      return help(left, right)
    }
    return help(1, n)
  }
}