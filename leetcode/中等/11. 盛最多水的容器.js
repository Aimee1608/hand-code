var maxArea = function (height) {
  // let arr = []
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const result = (j - i) * Math.min(height[i], height[j])
      // arr.push(result)
      max = max < result ? result : max
    }
  }
  return max
};

// 相同情况下两边距离越远越好
var maxArea2 = function (height) {
  // let arr = []
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const area = Math.min(height[start], height[end]) * (end - start)
    max = Math.max(area, max)
    if (height[start] <= height[end]) {
      start++
    } else {
      end--
    }
  }
  return max
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))