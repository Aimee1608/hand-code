const currentArray = [
  { id: '01', name: '张大大', pid: '', job: '项目经理' },
  { id: '02', name: '小亮', pid: '01', job: '产品leader' },
  { id: '03', name: '小美', pid: '01', job: 'UIleader' },
  { id: '04', name: '老马', pid: '01', job: '技术leader' },
  { id: '05', name: '老王', pid: '01', job: '测试leader' },
  { id: '06', name: '老李', pid: '01', job: '运维leader' },
  { id: '07', name: '小丽', pid: '02', job: '产品经理' },
  { id: '08', name: '大光', pid: '02', job: '产品经理' },
  { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
  { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
  { id: '11', name: '小华', pid: '04', job: '后端工程师' },
  { id: '12', name: '小李', pid: '04', job: '后端工程师' },
  { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
  { id: '14', name: '小强', pid: '05', job: '测试工程师' },
  { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
]

function arrToTree(list) {
  let arr = []
  let map = new Map()
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    const obj = { label: item.name, id: item.id }
    map.set(item.id, obj)
    if (map.has(item.pid)) {
      const parent = map.get(item.pid)
      if (parent.children) {
        parent.children.push(obj)
      } else {
        parent.children = [obj]
      }
    } else {
      arr.push(obj)
    }
  }
  return arr
}
arrToTree(currentArray)

function arrToTree2(list, pid) {
  // 判断当前这个id是否有子元素,找到pid的所有子元素,如果没有就是子元素
  let flag = list.filter(item => item.pid === pid)
  return flag.length === 0
    ? []
    : flag.map(item => {
        let obj = { label: item.name, id: item.id, children: arrToTree(list, item.id) }
        return obj.children.length === 0 ? { label: obj.label, id: obj.id } : obj
      })
}
arrToTree2(currentArray, '')
