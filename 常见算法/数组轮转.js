function reverse(arr, start, end) {
  while (start < end) {
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
function fn(arr, k) {
  let relK = k % arr.length
  if (relK === 0) return arr
  reverse(arr, 0, arr.length - 1)
  reverse(arr, 0, relK - 1)
  reverse(arr, relK, arr.length - 1)
  return arr
}
fn([1, 2, 3, 4, 5, 6, 7], 3)
