import Mock from 'mockjs'
import { param2Obj } from '@/utils/index'

const mockList = []
const count = 28
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
    img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3739955964,2895168016&fm=27&gp=0.jpg",
    data:'@county',
    id: '@increment',
    'line|1':['1 号线','2 号线','3 号线','4 号线','5 号线','6 号线','7 号线','8 号线','9 号线','10 号线']
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
let page = 0
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

  searchRoomByQuery: (config) => {
    let tempList = []
    let step = 6
    let hasData = true
    /*这里传过来的值类型是字符串类型！！*/
    const {city,line,detailzone,morenum}  = param2Obj(config.url)
     let moreNum = parseInt(morenum)

      if(moreNum){
       step = moreNum
        // page定义在全局中
       ++page;
       let end = (page * step) + step

       if(mockList[end]!==undefined){
         let start = page * step
         tempList = mockList.slice(start,end)

       }else{
         hasData = false
       }
    }else{
       tempList = mockList.slice(page,step)
    }

    return { items: tempList,hasMore:hasData }
  },
  getCardInfo:()=>{
    return { items: cardLis }
  }
}
