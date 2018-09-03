import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {commonParam, options} from 'api/config'

export function getTopList () {
  const url = '/api/getTopList'
  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    needNewCode: 1
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicList (topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParam, {
    g_tk: 2107488428,
    platform: 'h5',
    needNewCode: 1,
    topid,
    tpl: 3,
    page: 'detail',
    type: 'top'
  })
  return jsonp(url, data, options)
}