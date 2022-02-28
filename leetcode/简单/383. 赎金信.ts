// 使用indexOf
function canConstruct(ransomNote: string, magazine: string): boolean {
  if(ransomNote.length>magazine.length)return false;
  const arr = [...magazine];
  const left = [...ransomNote];
  for(let i= 0; i<left.length;i++){
       let index = arr.indexOf(left[i])
       if(index>-1){
           arr.splice(index, 1);
       }else {
           return false;
       }
  }

   return true;
};

// 先排序 后比较
function canConstruct2(ransomNote: string, magazine: string): boolean {
  if(ransomNote.length>magazine.length)return false;
  const p = [...ransomNote];
  const q = [...magazine];
  p.sort();
  q.sort();
  let i = 0;
  let j = 0;
   while(i<p.length && j<q.length){
       if(p[i]===q[j]){
           i++
           j++
       }else{
           j++
       }
   }
   return i===p.length;
};

// hash map
function canConstruct3(ransomNote: string, magazine: string): boolean {
  const m = new Map();
  const r = new Map();
  for(let v of ransomNote){
      if(r.has(v)){
          r.set(v, r.get(v)+1)
      } else {
          r.set(v, 1);
      }
  }
  for(let v of magazine){
      if(m.has(v)){
          m.set(v, m.get(v)+1)
      } else {
          m.set(v, 1);
      }
  }
  for(let [v, n] of r){
      if(!m.has(v) || m.get(v)<n){
          return false
      }
  }
  return true
}

console.log(canConstruct3('a', 'b'))