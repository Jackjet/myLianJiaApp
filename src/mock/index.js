import Mock from 'mockjs'
import loginAPI from './login'
import remoteSearchAPI from './remoteSearch'
import roomAPI from './roomlist'
// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 搜索相关
Mock.mock(/\/search\/city/, 'get', remoteSearchAPI.searchCity)

// 房源相关,路径要配对啊！
/*Mock.mock(/\/search\/room,/, 'get', roomAPI.searchRoomList)
Mock.mock(/\/search\/allroom,/, 'get', roomAPI.getAllRoomList)*/

Mock.mock(/\/search\/room/, 'get', roomAPI.searchRoomList)
Mock.mock(/\/search\/allroom/, 'get', roomAPI.getAllRoomList)
Mock.mock(/\/search\/cardinfo/, 'get', roomAPI.getCardInfo)
