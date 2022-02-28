/**
 * @param {string} s
 * @return {number}
 */
var s = "abcabcebb"
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length
  }
  let len = 0

  for (let i = 0; i < s.length; i++) {
    let ilen = 0

    for (let j = i + 1; j < s.length; j++) {
      const arr = s.slice(i, j)
      if (arr.includes(s[j])) {
        if (len < j - i) {
          len = j - i
        }
        break
      } else {
        ilen = j - i + 1
      }
    }
    if (len < ilen) {
      len = ilen
    }
  }
  return len
};


console.log(lengthOfLongestSubstring(s))
var lengthOfLongestSubstring2 = function (s) {
  if (s.length < 2) {
    return s.length
  }
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    let ilen = 0;
    let data = new Object()
    data.set(s[i], i)
    for (let j = i + 1; j < s.length; j++) {

      if (data.has(s[j])) {
        if (len < j - i) {
          len = j - i
        }
        break
      } else {
        ilen = j - i
      }
    }
    if (len < ilen) {
      len = ilen
    }
  }
  return len
}


var lengthOfLongestSubstring3 = function (s) {
  if (s.length < 2) {
    return s.length
  }
  let len = 0;
  let map = new Map();
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    const current = s[end]
    if (map.has(current)) {
      const currentIndex = map.get(current)
      start = Math.max(currentIndex, start)
    }
    // len = Math.max(end - start + 1, len)
    map.set(current, end + 1)
  }

  return len
}

function lengthOfLongestSubstring4(s) {
  const m = new Map();
  let start = 0;
  let max = 0;
  let i = 0;
  while (i < s.length) {
    while (m.has(s[i])) {
      m.delete(s[start])
      start++
    }
    m.set(s[i], i)
    i++
    max = Math.max(max, m.size)

  }
  return max
};