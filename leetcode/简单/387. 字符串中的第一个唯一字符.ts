function firstUniqChar(s: string): number {
  let m = new Map();
  let n = s.length;
  for(let [i, v] of Array.from(s).entries()){
      if(m.has(v)){
        m.set(v, -1);
      } else {
        m.set(v, i);
      }
  }
  let first = n;
  for(let i of m.values()){
      if(i!==-1 && i<first){
        first = i;
      }
  }
  if(first == n){
    return -1;
  }
  return first;
};