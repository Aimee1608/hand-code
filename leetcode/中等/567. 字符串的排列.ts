
function checkInclusion(s1: string, s2: string): boolean {
  const arr: string[] = [];
  let ss1 = s1.split('');

  // console.log(ss1)
  
  const help = (data: string[], result: string[]) => {
    if (result.length > data.length) {
      return;
    }
    if (result.length == data.length) {
      // console.log(result);
      arr.push(result.slice().join(''));
  }

  for (let i = 0; i < data.length; i++) {
      // 如果不包含当前节点，则尝试
      if (result.indexOf(data[i]) < 0) {
          // 入栈
          result.push(data[i]);

          // 递归
          help(data, result);

          // 出栈
          result.pop();
      }
  }
  }
  help(s1.split(''), []);
  console.log(arr);

  for (let i = 0; i < arr.length; i++){
    if (s2.indexOf(arr[i])>-1) {
      return true
    }
  }
  return false
};
// "abcdxabcde"
// "abcdeabcdx"
console.log(checkInclusion('abcdxabcde','abcdeabcdx'))

function checkInclusion2(s1: string, s2: string): boolean {
  if(s2.length<s1.length) return false;
  let ss2 = [...s2];
  let start = 0;
 
  let m = {};
  let len = s1.length;
   let i = len;
  for(let v of s1){
      m[v] = (m[v]||0)+1;
  }

  while(i<=ss2.length){
      const arr = ss2.slice( start, i);
      // console.log(arr);
      const nm = {...m};
      let res = true;
      for(let v of arr){
          if(nm[v] === undefined){
              res = false;
              break;
          } else{
              nm[v]--;
              if(nm[v]<0){
                  res = false
                  break;
              }
          }
      }
      if(res) return true;
      start++;
      i++;
  }
return false
};
