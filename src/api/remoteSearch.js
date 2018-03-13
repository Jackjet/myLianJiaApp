import request from '@/utils/request'

export function citySearch(query) {
  return request({
    url: '/search/city',
    method: 'get',
    params: query
  })
}
export function zoneSearch(query) {
  return request({
    url: '/search/zone',
    method: 'get',
    params: query
  })
}
export function ditieSearch(query) {
  return request({
    url: '/search/ditie',
    method: 'get',
    params: query
  })
}
export function detailZoneSearch(query) {
  return request({
    url: '/search/detailzone',
    method: 'get',
    params: query
  })
}
export function moreQuerySearch(query) {
  return request({
    url: '/search/querymore',
    method: 'get',
    params: query
  })
}
export function getHouseDetai(query) {
  return request({
    url: '/search/housedetail',
    method: 'get',
    params: { query }
  })
}
