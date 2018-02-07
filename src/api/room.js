import request from '@/utils/request'

export function roomSearch(type) {
  return request({
    url: '/search/room',
    method: 'get',
    params: { type }
  })
}
export function roomByQuery(query) {
  return request({
    url: '/search/byquery',
    method: 'get',
    params: query
  })
}
export function refresh(query) {
  return request({
    url: '/search/refresh',
    method: 'get',
    params: query
  })
}
export function AllRoomList() {
  return request({
    url: '/search/allroom',
    method: 'get'
  })
}
export function cardInfoApi(city) {
  return request({
    url: '/search/cardinfo',
    method: 'get'
  })
}

