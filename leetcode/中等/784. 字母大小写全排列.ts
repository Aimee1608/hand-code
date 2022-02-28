function letterCasePermutation(s: string): string[] {
  const res: string[] = [];
  const n = s.length;
  const sl: string[] = s.split('');
  const dfs = (i:number, tmp: string) => {
    if (i === n) {
      res.push(tmp);
      return;
    }
    if (isNaN(parseInt(sl[i]))) {
      dfs(i + 1, tmp + sl[i].toLowerCase());
      dfs(i + 1, tmp + sl[i].toUpperCase());
    } else {
      dfs(i + 1, tmp + sl[i]);
    }
  }
  dfs(0, '');
  return res;
};
console.log(isNaN(parseInt('a')))