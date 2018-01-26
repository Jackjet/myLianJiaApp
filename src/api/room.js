import request from '@/utils/request'

export function roomSearch(type) {
  return request({
    url: '/search/room',
    method: 'get',
    params: { type }
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
