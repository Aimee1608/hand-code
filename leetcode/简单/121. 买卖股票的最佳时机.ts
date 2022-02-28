function maxProfit(prices: number[]): number {
  let i = 1;
  let max = 0;
  let min = prices[0];
  while(i<prices.length){
      
      if(min<prices[i]){
          const profit = prices[i] - min;
          // console.log(profit);
          max = Math.max(max, profit);
         
      }
      min = Math.min(min, prices[i]);
      i++;
  }

  // for(let i = 0; i<prices.length; i++){
  //     for(let j = i+1; j<prices.length; j++){
  //         if(prices[i]<prices[j]){
  //             max = Math.max(max, prices[j]-prices[i])
  //         }
  //     }
  // }
  return max
};