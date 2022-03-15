function combine(n: number, k: number): number[][] {
  const ans = [];
  const dfs = (cur: number, n: number, k: number, temp:number[]) => {
    if (temp.length + (n - cur + 1) < k) {
      return;
    }
    if (temp.length == k) {
      ans.push(temp);
    }
    dfs(cur + 1, n, k, [...temp, cur]);
    dfs(cur + 1, n, k, temp);
  }
  dfs(1, n, k, []);
  return ans;
}