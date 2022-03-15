// [{ParentName: {FirstName: 'xxx'， SecondName: [{FirstAge: '18'}]}}]  转化一下key    ParentName => parent_name

function translate(params) {
  if (Array.isArray(params)) {
    return params.map(item => {
      return translate(item)
    })
  }
  let obj = {}
  if (typeof params === 'object') {
    Object.keys(params).forEach(key => {
      let str = key.replace(/[A-Z]/g, (match, index) => {
        return index ? `_${match.toLowerCase()}` : match.toLowerCase()
      })
      if (typeof params[key] === 'object') {
        obj[str] = translate(params[key])
      } else {
        obj[str] = params[key]
      }
    })
  }
  return obj
}

console.log(translate([{ ParentName: { FirstName: 'xxx', SecondName: [{ FirstAge: '18' }] } }]))
// 字符串转驼峰
function fn(str) {
  let newS = str.replace(/_([a-z])/g, (all, i) => {
    return i.toUpperCase()
  })
  return newS
}
fn('get_element_by_id')

// 转下划线
function fn(str) {
  let newS = str.replace(/[A-Z]/g, i => {
    return '_' + i.toLowerCase()
  })
  if (newS[0] === '_') {
    newS = newS.substr(1)
  }
  return newS
}
fn('getElementById')
