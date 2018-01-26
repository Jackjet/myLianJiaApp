import Mock from 'mockjs'
import { param2Obj } from '@/utils/index'

const mockList = []
const count = 18
const cardList = []
const cartdCount = 2
for (let i = 0; i < count; i++) {
  mockList.push(Mock.mock({
    'city|1':['广州', '深圳', '北京', '上海'],
    region:'@region',
    province:'@province',
    title:'@ctitle(6, 16)',
    subtitile:'@ctitle(6, 16)',
    "tag|2-3": {
      "full": "满5年",
      "randomTime": "随时可看",
      "trace": "地铁"
    },
    "type|1":[
      "新房",
      "二手房",
      "租房"
    ],
    totalPrice:'@natural(66, 388)'+'万',
    price:'@natural(3666, 9888)'+'元/平',
    id: '@increment',
    img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3739955964,2895168016&fm=27&gp=0.jpg"
  }))
}
for (let i = 0; i < cartdCount; i++) {
  cardList.push(Mock.mock({
    "card|2": [
      {
        'city|1':['广州', '深圳', '北京', '上海'],
        title:'@ctitle(6, 10)',
        textInfo:'@ctitle(6, 16)',
        subInfo:'@ctitle(6, 16)',
        id: '@increment',
        'img|1':["http://img5.imgtn.bdimg.com/it/u=617181117,1601598812&fm=27&gp=0.jpg","http://img5.imgtn.bdimg.com/it/u=385156745,117573264&fm=27&gp=0.jpg"]
      }
     ]
  }
  ))
}
export default {
  searchRoomList: config => {
    const searchItem  = param2Obj(config.url)
    const tempList = mockList.filter(item => {
      const itemType = item.type
      if (itemType && itemType.indexOf(searchItem.type) < 0) return false
      return true
    })
    return { items: tempList }
  },
  getAllRoomList: () => {
     return { items: mockList }
  },
  getCardInfo:()=>{
    return { items: cardList }
  }
}
