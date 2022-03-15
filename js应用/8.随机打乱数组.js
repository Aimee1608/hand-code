const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function random(arr) {
  let i = arr.length - 1

  while (i > 0) {
    const index = getRandom(i - 1, 0)
    ;[arr[i], arr[index]] = [arr[index], arr[i]]
    i--
  }
  return arr
}
console.log(random([1, 2, 3, 4]))

// 方法二：
function random2(arr) {
  let sum = arr.length - 1
  while (sum) {
    let index = Math.floor(Math.random() * sum)
    ;[arr[sum], arr[index]] = [arr[index], arr[sum]]
    sum--
  }
  return arr
}

function random(arr) {
  arr.sort(() => {
    return Math.random() - 0.5
  })
  return arr
}
