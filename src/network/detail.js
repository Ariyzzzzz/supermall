import { requestGoods } from "./request"

export function getDetails(iid) {
  return requestGoods({
    url: '/api/w6/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return requestGoods({
    url: '/api/w6/recommend'
  })
  
}

export class Goods {
  constructor(itemInfo, columns, sercives) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.lowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = sercives
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.images = info.images ? info.images : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}