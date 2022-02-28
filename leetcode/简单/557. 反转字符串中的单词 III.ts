function reverseWords(s: string): string {
  const arr = s.split('');
  let start = 0;
  let end = s.length-1;
  let last = 0;
  while(start<=end){
      if(arr[start]===' '|| start === end){
          let right = start === end? start: start-1;
          while(last<right){
              [arr[last], arr[right]] = [arr[right], arr[last]];
              last++;
              right--;
          }
          last = start+1;
      } 
      start++;
      
  }
  return arr.join('');
};