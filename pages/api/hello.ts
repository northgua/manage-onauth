// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// BaaS.init('49c09fde6af540a7bc08', {})

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// export const saveDocument = () => {
//   console.log('BaaS', BaaS);
//   let tableName = 'product'
//   // 通过 `tableName` 实例化一个 `TableObject` 对象，操作该对象即相当于操作对应的数据表
//   let Product = new BaaS.TableObject(tableName)
//   // 本地创建一条空记录
//   let product = Product.create() // product 为 TableRecord 实例

//   let apple = {
//     name: 'apple',
//     price: 1,
//     desc: ['good'],
//     amount: 0
//   }

//   // 为上面创建的空记录赋值，并保存到服务器，save() 方法返回一个 Promise 对象
//   product.set(apple).save().then(res => {
//     // console.log(res)
//   })
// };