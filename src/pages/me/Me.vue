<template>
  <div>
    <!--<button @click="logintest">test login</button>-->
      <div v-if="showAuthor">
        <div class='header'>
          <image src='/static/img/wechat.png'></image>
        </div>

        <div class='content'>
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像等)</text>
        </div>

        <button class='bottom' type='primary' open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
      </div>

  </div>
</template>

<script>
  import {login, getSetting, getUserInfo, post} from '@/util'
  const apiUrl = '/api/shxp/wechat/SHXPWEMeControlSRV?method='
  // const apiUrl = '/api/mobile/wechat?method='
  export default {
    data () {
      return {
        showAuthor: false,
        userInfo: {}
      }
    },
    mounted: async function () {
      this.checkAuthorization()
    },
    methods: {
      checkAuthorization: async function () {
        let _self = this
        let getSettingRes = await getSetting()
        if (getSettingRes.authSetting['scope.userInfo']) {
          let getUserInfoRes = await getUserInfo()
        } else {
          _self.showAuthor = true
        }

        // getSetting().then(res => {
        //   console.log('getSetting res', res)
        //   if (res.authSetting['scope.userInfo']) {
        //     return getUserInfo()
        //   }
        // }).then(res => {
        //   console.log('getUserInfo.res', res)
        // })

        // wx.getSetting({
        //   success: function (res) {
        //     console.log(res)
        //     if (res.authSetting['scope.userInfo']) {
        //       wx.getUserInfo({
        //         success: function (res) {
        //           console.log('res', res)
        //           // 从数据库获取用户信息
        //           // that.queryUsreInfo()
        //           // 用户已经授权过
        //           // wx.switchTab({
        //           //   url: ''
        //           // })
        //         }
        //       })
        //     } else {
        //       _self.showAuthor = true
        //     }
        //   }
        // })
      },
      bindGetUserInfo: async function (e) {
        let _self = this
        if (e.mp.detail.userInfo) { // 用户按了允许授权按钮
          let loginRes = await login()
          console.log(loginRes.code)
          let result = await post(apiUrl + 'get_openid', {code: loginRes.code})
          console.log(result)
          _self.showAuthor = false
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
      },
      logintest: async function () {
        let codeRes = await login()
        var appid = 'wxb141309c0101eb3d'// appid需自己提供，此处的appid我随机编写
        var secret = '78ce417ce31de1c2f33ae60c9c174a5a'// secret需自己提供，此处的secret我随机编写

        // 调用微信登录接口
        var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + codeRes.code + '&grant_type=authorization_code'
        wx.request({
          url: l,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function (res) {
            // var obj={};
            // obj.openid=res.data.openid;
            // obj.expires_in=Date.now()+res.data.expires_in;
            console.log(res)
          // wx.setStorageSync('user', obj);//存储openid
          }
        })
      }

    }
  }
</script>

<style>
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
