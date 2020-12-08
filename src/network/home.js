import {request, requestGoods} from 'network/request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return requestGoods({
    url: '/api/w6/home/data',
    params: {
      type,
      page
    }
  })
}