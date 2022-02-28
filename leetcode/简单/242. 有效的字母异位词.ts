function isAnagram(s: string, t: string): boolean {
  const s1 = [...s];
  s1.sort();
  const t1 = [...t];
  t1.sort();
  return s1.join('') === t1.join('')
};

function isAnagram2(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  const m = {};
  for (let v of s) {
    m[v] = (m[v]|| 0)+1
  }
  for (let v of t) {
    if (m[v] === undefined) {
      return false
    } else {
      m[v]--
      if (m[v] < 0) {
        return false
      } 
    }
  }
  return true;
}