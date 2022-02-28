function multiply(num1: string, num2: string): string {
  if(num1 === '0'|| num2 ==='0') return '0'
  let l1 = num1.length;
  let l2 = num2.length;
  let arr = new Array(l1+l2).fill(0);
  for(let i = l1-1; i>=0; i--){
      for(let j = l2-1; j>=0; j--){
         const sum =  Number(num1[i])*Number(num2[j]);
         let left = arr[i+j+1]+sum;
         arr[i+j+1] = left%10;
         arr[i+j] +=  Math.floor(left/10);
      }
  }
  if(arr[0] === 0){
      arr.shift();
  }
  return arr.join('').toString();
};