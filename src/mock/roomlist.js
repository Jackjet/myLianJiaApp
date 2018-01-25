import Mock from 'mockjs'
import { param2Obj } from '@/utils/index'

const mockList = []
const count = 6

for (let i = 0; i < count; i++) {
  mockList.push(Mock.mock({
    'city|1':['广州', '深圳', '北京', '上海'],
    region:'@region',
    province:'@province',
    title:'@ctitle(6, 16)',
    subtitile:'@ctitle(6, 16)',
    "tag|1-3": {
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
    price:'@natural(3666, 8888)'+'元/平',
    id: '@increment',
    img:'@image("200x100", "#50B347", "#FFF", "Mock Data")'
  }))
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
  }
}
