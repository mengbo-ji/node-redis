import * as Redis from 'ioredis'

// 1、连接redis
const redis = new Redis({
  port: 6379,
  host: '127.0.0.1',
  showFriendlyErrorStack: true,
})

// async function main() {
//   try {
//     // 2、操作数据
//     await redis.set('foo', 'bar')
//     await redis.set('foo1', 'bar1')
//     const foo = await redis.get('foo')
//     const foo1 = await redis.get('foo1')
//     console.log(foo, foo1)
//   } catch (error) {
//     console.log('操作失败', error.message)
//   }
// }

// async function main() {
//   try {
//     const pipeline = redis.pipeline()
//     for (let i = 0; i < 100; i++) {
//       pipeline.set(`${i}-foo`, i)
//     }
//     const ret = await pipeline.exec()
//     console.log('ret', ret)
//   } catch (error) {
//     console.log('操作失败', error.message)
//   }
// }

async function main() {
  try {
    const ret = await redis
      .multi()
      .set('mengbo', 100)
      .set('mengbo1', 200)
      .exec()
    console.log('ret', ret)
  } catch (error) {
    console.log('操作失败', error.message)
  }
}
main()