import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const CityList = []
const count = 100

for (let i = 0; i < count; i++) {
  CityList.push(Mock.mock({
    city: '@city'
  }))
}

export default {
  searchHouse: config => {
    const { searchItem } = param2Obj(config.url)
    const mockCityList = CityList.filter(item => {
      const itemCity = item.city
      if (itemCity && itemCity.indexOf(searchItem) < 0) return false
      return true
    })
    return { items: mockCityList }
  }
}
