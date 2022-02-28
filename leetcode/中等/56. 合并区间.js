/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let i = 1
  intervals.sort((a, b) => a[0] - b[0])
  while (i < intervals.length) {
    let [start, end] = intervals[i - 1]
    let [nstart, nend] = intervals[i]
    if (end >= nstart) {
      intervals[i - 1] = [start, Math.max(end, nend)]
      intervals.splice(i, 1)
    } else {
      i++
    }
  }
  return intervals
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge2 = function (intervals) {
  let i = 1
  intervals.sort((a, b) => a[0] - b[0])
  let arr = [intervals[0]]
  while (i < intervals.length) {
    let top = arr[arr.length - 1]
    let [start, end] = top
    let [nstart, nend] = intervals[i]
    if (end >= nstart) {
      top[1] = Math.max(end, nend)
    } else {
      arr.push([nstart, nend])
    }
    i++
  }
  return arr
}
