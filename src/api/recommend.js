import jsonp from 'common/js/jsonp'
import {
  commonParam,
  options
} from 'api/config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParam, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    needNewCode: 0,
    rnd: Math.random()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParam, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  return axios.get(url, {params: data}).then((resp) => {
    return Promise.resolve(resp.data)
  })
}