function addStrings(num1: string, num2: string): string {
  let i = num1.length-1;
  let j = num2.length-1;
  let n = j>i? j: i;
  n;
  const arr = new Array(n+2).fill(0);
  
  while(j>=0 || i>=0){
      let sum = arr[n+1];
      if(num1.length<num2.length && i < 0){
          sum += Number(num2[j]);
          j--;
      } else if(num1.length>num2.length && j < 0){
          sum += Number(num1[i]);
          i--;
      } else {
          sum += Number(num1[i])+Number(num2[j]);
          i--;
          j--;
      }   
      arr[n+1] = sum%10;
      arr[n] = Math.floor(sum/10);
      n--;
  }
  if(arr[0] === 0) {
      arr.shift()
  }
  return arr.join('');
};