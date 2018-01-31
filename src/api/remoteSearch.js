import request from '@/utils/request'

export function citySearch(query) {
  return request({
    url: '/search/city',
    method: 'get',
    params: query
  })
}

