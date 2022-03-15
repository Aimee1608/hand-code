const Ajax = ({ method, url, data, head }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, false)
    Object.keys(head).forEach(key => {
      xhr.setRequestHeader(key, header[key])
    })
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    let str = ''
    Object.keys(data).forEach(key => {
      str += `${key}=${data[key]}&`
    })
    xhr.send(str.substring(0, str.length - 1))
  })
}

// 简易版
const Ajax2 = ({ method, url }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, false)
    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send()
  })
}
