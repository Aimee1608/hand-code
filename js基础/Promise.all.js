Promise.all = function (list) {
  return new Promise((resolve, reject) => {
    let result = []
    let count = 0
    const getVal = (index, val) => {
      result[index] = val
      count++
      if (count === list.length) {
        resolve(result)
      }
    }
    list.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then(
          val => {
            getVal(index, val)
          },
          error => reject(error)
        )
      } else {
        getVal(index, item)
      }
    })
  })
}
