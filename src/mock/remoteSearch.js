import Mock from 'mockjs'
import { param2Obj } from '@/utils/index'

const CityList = []
const count = 100

for (let i = 0; i < count; i++) {
  CityList.push(Mock.mock({
    'city|1':['广州', '深圳', '北京', '上海'],
    region:'@region',
    province:'@province',
    discription:'@ctitle(6, 16)',
    num:'@natural(1, 188)'+'套',
    id: '@increment',
    'houseType|1':['新房','二手房','租房'],
    timestamp: +Mock.Random.date('T')
  }))
}
const zoneList =[]
const zoneLenght = 30

for (let i = 0; i < zoneLenght; i++) {
  zoneList.push(Mock.mock({
    'city|1':['广州', '深圳', '北京', '上海'],
    data:'@county',
    id: '@increment',
  }))
}

const dietieList =[]
const lenght = 10

for (let i = 0; i < lenght; i++) {
  dietieList.push(Mock.mock({
    'city|1':['广州', '深圳', '北京', '上海'],
    data:i+1+' 号线',
    id: '@increment',
  }))
}

const detailZoneList =[]


for (let i = 0; i < 30; i++) {
  detailZoneList.push(Mock.mock({
    data:'@county',
    id: '@increment',
    'line|1':['1 号线','2 号线','3 号线','4 号线','5 号线','6 号线','7 号线','8 号线','9 号线','10 号线']
  }))
}
const moreQueryList = []
  moreQueryList.push(
    {
      "itemDeitail": ['50以下','50-70','70-90','90-110','110-140','140-170','170-200','200以上'],
      'title':'建筑面积(m²)',
      'queryType':'squerySize'
    },
    {'itemDeitail':['朝东','朝南','朝北','朝西','南北'],
      'title':'朝向',
      'queryType':'chaoXiang'
    },
    {'itemDeitail':['低','中','高'],
      'title':'楼层',
      'queryType':'floorType'
    },
    {'itemDeitail':['精装修','普通装修','毛坯房'],
      'title':'装修',
      'queryType':'zhuangxiuType'
    },
    {'itemDeitail':['有电梯','无电梯'],
      'title':'电梯',
      'queryType':'diantiType'
    },
    {'itemDeitail':['商品房','公房','经适房','其它'],
      'title':'权属',
      'queryType':'quanshuType'
    },
    {'itemDeitail':['5年以内','5年以内','10年以内','15年以内','20年以内','20年以上'],
      'title':'楼龄',
      'queryType':'yearsType'
    },
    {'itemDeitail':['满五年','满两年','近地铁','新上','随时看房','不看地下室','不看车位','优选'],
      'title':'标签',
      'queryType':'tagType'
    }
  )

export default {
  searchCity: config => {
    const {city,houseType}  = param2Obj(config.url)

    let mockCityList = CityList.filter(item => {

      if (houseType && item.houseType !== houseType) return false
      if (city && city.indexOf(item.city) < 0) return false
      return true
    })
    return { items: mockCityList }
  },
  searchZone: config=>{
    const {city,line}  = param2Obj(config.url)
    //过滤搜索列表带过来的城市条件
    let tempList = zoneList.filter(item => {

      if (city && item.city !== city) return false

      return true
    })
    return {items: tempList}
    },
  searchDetailZone:config=>{
    const {city,line,detailzone}  = param2Obj(config.url)
    //过滤搜索条件
   /* let temp = []
    detailZoneList.forEach((item)=>{
         temp.push(detailzone+' '+item.data)
    })*/
    /*let tempList = detailZoneList.filter(item => {

     // if (detailzone && item.data !== detailzone) return false

      return true
    })*/
    let tempList = detailZoneList.filter(item=>{
      if(line){
        if(item.line.indexOf('号线')>-1){
          let temp = item.line.replace(/[^0-9]/ig,"");
          if(line && temp !==line)return false
        }
      }
      return true
    })
    return {items: tempList}
  },
  searchDitie: config=>{
    return {items: dietieList}
  },
  searchMoreQuery: config=>{
    return {items: moreQueryList}
  }
}
