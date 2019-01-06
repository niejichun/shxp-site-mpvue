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

export function login () {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}

export function getSetting () {
  return new Promise((resolve, reject) => {
    wx.getSetting({ success: resolve, fail: reject })
  })
}
export function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}
//
// export function setStorage (key, value) {
//   return new Promise((resolve, reject) => {
//     wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
//   })
// }
//
// export function getStorage (key) {
//   return new Promise((resolve, reject) => {
//     wx.getStorage({ key: key, success: resolve, fail: reject })
//   })
// }
//
// export function getLocation (type) {
//   return new Promise((resolve, reject) => {
//     wx.getLocation({ type: type, success: resolve, fail: reject })
//   })
// }
