function asyncToGen(genFunction) {
  // 接受一个genFunction函数并返回一个新的函数
  //返回一个新的函数
  return function (...args) {
    // 先执行genFunction函数，并返回gen 结果, 需要改变this指向
    const gen = genFunction.apply(this, args)
    // 和promise 类似，需要返回个新的promise实例
    return new Promise((resolve, reject) => {
      // 执行每一个step 类似于 genFunction.next()
      // 通过此函数来实现.then的操作
      function step(key, arg) {
        // 设置next执行的结果genRsult
        let genResult
        try {
          genResult = gen[key](arg)
        } catch (err) {
          return reject(err)
        }
        // 解构next执行后结果的内容
        const { value, done } = genResult
        // 如果done为true 直接返回resolve的结果
        if (done) {
          return resolve(value)
        }
        // 如果done 不为true，说明还有代码没有执行完，需要继续返回返回promise实例，并将当前的结果传递下去
        return Promise.resolve(value).then(
          val => {
            step('next', val)
          },
          err => {
            step('throw', err)
          }
        )
      }
      step('next')
    })
  }
}

const getData = () => new Promise(resolve => setTimeout(() => resolve('data'), 1000))
function* testG() {
  const data = yield getData()
  console.log('data', data)
  const data2 = yield getData()
  console.log('data2', data2)
  return 'success'
}
const gen = asyncToGen(tsetG)
gen().then(res => console.log(res))
