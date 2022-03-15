function compose(middlewares) {
  return function (context, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      // 表示执行了多次next
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middlewares[i]
      // 什么时候会走到这里
      if (i === middlewares.length) {
        fn = next
      }
      console.log(i)
      if (!fn) {
        return Promise.resolve()
      }

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
async function a(context, next) {
  console.log('1.函数 【a】next之前-执行了.....')
  await next()
  console.log('8.函数 【a】next之后-执行了.....')
}
async function b(context, next) {
  console.log('2.函数 【b】next之前-执行了.....')
  await next()
  console.log('7.函数 【b】next之后-执行了.....')
}
async function c(context, next) {
  console.log('3.函数 【c】next之前-执行了.....')
  await next()
  console.log('6.函数 【c】next之后-执行了.....')
}

async function d(context, next) {
  console.log('4.函数 【d】next之前-执行了.....')
  console.log('5.函数 【d】next之后-执行了.....')
}

var middleware = [a, b, c, d]
const handle = compose(middleware)
// handle()

// 简易版事件串行执行 一样会执行
function compose2(middlewares) {
  function dispatch(i) {
    if (i === middlewares.length) return
    let tmp = middlewares[i]
    tmp({}, () => {
      dispatch(i + 1)
    })
  }
  dispatch(0)
}
compose2(middleware)
// trigger串行
function handles(events) {
  let list = []
  const next = () => {
    if (list.length > 0) {
      list.shift()()
    }
  }
  for (let i = 0; i < events.length; i++) {
    list.push(next => {
      events[i]()
      next()
    })
  }
  next()
}

function compose3(middlewares) {
  function dispatch(i) {
    if (i === middlewares.length) return
    const fn = middlewares[i]
    fn(dispatch.bind(null, i + 1))
  }
  dispatch(0)
}

// 二刷
function compose4(middlewares) {
  function dispatch(i) {
    if (i === middlewares) return
    const tmp = middlewares[i]
    tmp(() => {
      dispatch(i + 1)
    })
  }
  return dispatch(0)
}
