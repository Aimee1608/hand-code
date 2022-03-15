// 有个 m * n 的矩形，每次只能向下或向右移动一格，问从左上角到右下角有几种方式

// getCount(1, 3) // 输出 1
// getCount(4, 1) // 输出 1
// getCount(4, 3) // 输出 10
// 动态规划
var uniquePaths = function (m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    f[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }
  return f[m - 1][n - 1]
}

// 组合数学
var uniquePaths = function (m, n) {
  let ans = 1
  for (let x = n, y = 1; y < m; ++x, ++y) {
    ans = Math.floor((ans * x) / y)
  }
  return ans
}

// 二刷
function getPath(m, n) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    arr[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    arr[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
    }
  }
  return arr[m - 1][n - 1]
}
