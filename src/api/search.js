import jsonp from 'common/js/jsonp'
import axios from 'axios'
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

export function search (query, page, zhida, perpage) {
  const url = '/api/search'

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
    perpage: perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all'
  })
  return axios.get(url, {
    params: data
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
