
/**
* 防抖函数
*/
export function debounce(func, delay) {
 let timer = null;
 return function(...args) {
   if(timer) clearTimeout(timer)
   timer = setTimeout(() => {
     func.apply(this, args)
   }, delay);
 }
}

/**
 * 将服务器返回的时间戳过滤成普通的年月日格式
 */
export function formatDate(date, fmt) {
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  for(let a in o) {
    if(new RegExp(`(${a})`).test(fmt)) {
      let str = o[a] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }

  return fmt;
}