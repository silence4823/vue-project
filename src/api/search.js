import jsonp from 'common/js/jsonp'
import {
  commonParam,
  options
} from 'api/config'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParam, {
    g_tk: 729873033,
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function search (query, page, zhida) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commonParam, {
    g_tk: 729873033,
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    w: query,
    catZhida: zhida ? 1 : 0,
    p: page,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    remoteplace: 'txt.mqq.all'
  })

  return jsonp(url, data, options)
}
