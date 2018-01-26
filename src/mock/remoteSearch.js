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
    timestamp: +Mock.Random.date('T')
  }))
}
export default {
  searchCity: config => {
    const searchItem  = param2Obj(config.url)
    const mockCityList = CityList.filter(item => {
      const itemCity = item.city
      if (itemCity && itemCity.indexOf(searchItem.city) < 0) return false
      return true
    })
    return { items: mockCityList }
  }
}
