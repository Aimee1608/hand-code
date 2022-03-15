let arr = [
  {
    label: '张大大',
    id: '01',
    children: [
      {
        label: '小亮',
        id: '02',
        children: [
          {
            label: '小丽',
            id: '07'
          },
          {
            label: '大光',
            id: '08'
          }
        ]
      },
      {
        label: '小美',
        id: '03',
        children: [
          {
            label: '小高',
            id: '09'
          }
        ]
      },
      {
        label: '老马',
        id: '04',
        children: [
          {
            label: '小刘',
            id: '10'
          },
          {
            label: '小华',
            id: '11'
          },
          {
            label: '小李',
            id: '12'
          }
        ]
      },
      {
        label: '老王',
        id: '05',
        children: [
          {
            label: '小赵',
            id: '13'
          },
          {
            label: '小强',
            id: '14'
          }
        ]
      },
      {
        label: '老李',
        id: '06',
        children: [
          {
            label: '小涛',
            id: '15'
          }
        ]
      }
    ]
  }
]
// 未知id的情况
function treeToArr(list, pid, id) {
  let arr = []
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    id += 1

    arr.push({ id, name: item.label, pid })
    if (item.children && item.children.length > 0) {
      arr = arr.concat(treeToArr(item.children, id, id))
      id += item.children.length
    }
  }
  return arr
}
console.log(treeToArr(arr, '', 0))

// 已知id的情况
function treeToArr2(list, pid) {
  let arr = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    arr.push({ id: item.id, name: item.label, pid })
    if (item.children && item.children.length > 0) {
      arr = arr.concat(treeToArr2(item.children, item.id))
    }
  }
  return arr
}
console.log(treeToArr2(arr, ''))
