// 工具函数库

import config from './config'

export function get (url, data) {
  return request(url, 'GET', data)
}

export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        console.log(res)
        if (res.data.errno === 0) {
          resolve(res.data.info)
        } else {
          showModal('失败', res.errorMsg)
          reject(res.data)
        }
      }
    })
  })
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

export function sendP (phone) {
  wx.makePhoneCall({
    phoneNumber: phone
  })
}

export let titleLabel = {
  reserve: '预约订桌',
  menuCommand: '推荐菜品',
  salad: '沙拉',
  stapleFood: '主食',
  drink: '饮品'
}
