function permute(nums: number[]): number[][] {
  let res = [];
  let len = nums.length;
  if (len == 0) return res;
  let used = [];
  let path = [];
  const dfs = (nums: number[], len: number, depth: number, path: number[], used:boolean[], res:number[][]) => {
    if (depth == len) {
      res.push(path.slice())
      return;
    }
    for (let i = 0; i < len; i++){
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, len, depth + 1, path, used, res);
        used[i] = false;
        path.pop();
      }
    }
  }
  dfs(nums, len, 0, path, used, res);
  return res;
};