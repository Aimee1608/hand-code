function reverseWords(s: string): string {
  let res = '';
  let i = 0;
  s = s.trim();
  let start = 0;
  while(i<s.length){
      if(s[i]===' '){
          if(i!=start){
              res = res === ''? (s.substr(start, i-start)): (s.substr(start, i-start))+' '+ res;
              start = i;
          }
          i++;
          start++;
      } else {
          i++;
      }
  }
  if(start<i){
      res = res === ''? (s.substr(start, i-start)): (s.substr(start, i-start))+' '+ res;
  }
  return res;
};