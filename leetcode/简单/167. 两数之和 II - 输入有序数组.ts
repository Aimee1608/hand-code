function twoSum(numbers: number[], target: number): number[] {
  let arr = [];
  for(let i = 0; i<numbers.length; i++){
      for(let j = i+1; j< numbers.length; j++){
          if(numbers[i]+numbers[j]=== target){
              arr = [i+1, j+1]
              return arr;
          }
      }
  }
  return arr;
};


function twoSum2(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length-1;
  while(start<end){
      const sum = numbers[start] + numbers[end]
          if(target<sum){
              end--
          } else if(target>sum){
              start++
          } else{
              return [start+1, end+1]
          }
  }
  return [];
};