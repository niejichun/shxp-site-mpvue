
<template>
  <div>    
      <div class='header'>
        <image src='/static/img/wechat.png'></image>
      </div>

      <div class='content'>
        <view>申请获取以下权限</view>
        <text>获得你的公开信息(昵称，头像等)</text>
      </div>

      <button class='bottom' type='primary' open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>

      <!--个人账号无法微信认证，不能获取手机号-->
      <!--<button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">授权登录</button>-->
  </div>
</template>

<script >
  import {post, login, getSetting, getUserInfo} from '@/util'
  import config from '@/config'
  const apiUrl = '/api/shxp/wechat/SHXPWEAuthorControl?method='
  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    mounted: function () {
      this.checkAuthorization()
    },
    methods: {
      saveStorage: async function () {
        let userInfoRes = await getUserInfo()
        let loginRes = await login()
        let openIdRes = await post(apiUrl + 'get_openid', {code: loginRes.code})
        let storageData = {
          ...userInfoRes,
          oenId: openIdRes.openid
        }
        wx.setStorageSync('wxData', storageData)
      },
      checkAuthorization: async function () {
        let _self = this
        let getSettingRes = await getSetting()// 检测是否已授权
        console.log(getSettingRes)
        if (getSettingRes.authSetting['scope.userInfo']) { // 已授权，获取用户信息，以及openId，本地缓存
          this.saveStorage()
          wx.switchTab({url: '../home/main'})
        }
      },
  
      bindGetUserInfo: async function (e) {
        let _self = this
        if (e.mp.detail.userInfo) { // 用户按了允许授权按钮
          this.saveStorage()
          wx.switchTab({url: '../home/main'})
        } else { // 用户按了拒绝按钮
          wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入',
            showCancel: false,
            confirmText: '返回授权',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击了“返回授权”')
              }
            }
          })
        }
      }
    }
  }
</script>
<style >
  .header {
    margin: 90rpx 0 90rpx 50rpx;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
  }

  .header image {
    width: 200rpx;
    height: 200rpx;
  }

  .content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
  }

  .content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
  }

  .bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
  }

</style>
