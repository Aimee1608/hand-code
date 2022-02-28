function calculate(s: string): number {
    let sign = [1]; // 记录加减号
    let i = 0;
    let num = 0;
    let ret = 0;
    let op = 1;
    while(i<s.length){
       if(s[i] === ' '){
           i++
           continue;
       } 
       const b = Number(s[i]);
       if(b>= 0 && b<=9){
         num = num*10+b;
         i++
         continue;
       }
       ret+=op*num;
       num = 0;
       if(s[i] === '+'){
          op = sign[sign.length-1];
       }else if(s[i] === '-'){
          op = -sign[sign.length-1];
       }else if(s[i] === '('){
           sign.push(op);
       } else if(s[i] ===')'){
           sign.pop();
       }
       i++;
       
    }
    ret += op*num;
    return ret;
};
