import Mock from 'mockjs'
import remoteSearchAPI from './remoteSearch'

// 搜索相关
Mock.mock(/\/search\/city/, 'get', remoteSearchAPI.searchCity)
