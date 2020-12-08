import axios from 'axios'

export function request(config) {

  //轮播图的网络请求数据
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // instance1.interceptors.request.use(config => {
  //   return config
  // },err => {

  // })

  // instance1.interceptors.respond.use(res => {
  //   return res
  // },err => {

  // })

  return instance1(config)
}

export function requestGoods(config) {
   //商品的网络请求数据
   const instance2 = axios.create({
    baseURL: 'http://152.136.185.210:8000/',
    timeout: 5000
  })

  // instance2.interceptors.request.use(config => {
  //   return config
  // },err => {

  // })

  // instance2.interceptors.respond.use(config => {
  //   return config
  // },err => {
    
  // })

  return instance2(config)
}

