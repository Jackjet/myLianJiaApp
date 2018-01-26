import request from '@/utils/request'

export function citySearch(city) {
  return request({
    url: '/search/city',
    method: 'get',
    params: { city }
  })
}

