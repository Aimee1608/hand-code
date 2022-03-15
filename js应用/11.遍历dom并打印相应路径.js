//  <div id="root">
//     <p>p1</p>
//     <span>
//         <span>span2 </span>
//     </span>
//     <p>p2 </p>
// </div>
traverse(document.getElementById('root'))

// =>
// ["DIV"]
// ["DIV", "P"]
// ["DIV", "SPAN"]
// ["DIV", "SPAN", "SPAN"]
// ["DIV", "P"]

// 不会
function traverse(root) {
  const res = []
  const list = []
  function help(root) {
    if (root.length === 0) {
      res.push(list.slice())
    } else {
      for (let i = 0; i < root.length; i++) {
        list.push(root[i])
        help(root[i].children)
        list.pop()
      }
    }
  }

  help([root])
  return res
}
