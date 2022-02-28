/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false
  if (s.length === 0 && t.length >= 0) return true
  let start = 0
  let i = 0

  while (i < t.length && start < s.length) {
    if (t[i] === s[start]) {
      start++
    }
    i++
  }
  return start === s.length
}
