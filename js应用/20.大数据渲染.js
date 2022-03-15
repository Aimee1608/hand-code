// 如果有10万条数据需要渲染，如何优化
// 核心：requestAnimationFrame + createDocumentFragment
function show(data, root) {
  const total = data.length
  let once = 20
  function help(currentTotal) {
    if (currentTotal > total) {
      return
    }
    let pageCount = Math.min(total - currentTotal, once)
    window.requestAnimationFrame = () => {
      let fragment = document.createDocumentFragment()
      let i = 0
      while (i < pageCount) {
        const li = document.createElement('li')
        li.innerText = data[currentTotal + i]
        fragment.appendChild(li)
        i++
      }
      root.appendChild(fragment)
      help(currentTotal + pageCount)
    }
  }
  help(0)
}
