<template>
  <div>
      <div v-if="canIUse">
        <div class='header'>
          <image src='/images/wx_login.png'></image>
        </div>

        <div class='content'>
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像等)</text>
        </div>

        <button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
          授权登录
        </button>
      </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        canIUse: false
      }
    },
    mounted: function () {
      //canIUse  判断API
      let a = wx.canIUse('button.open-type.getUserInfo')


      // wx.getSetting({
      //   success: (res) => {
      //     console.log('res', res)
      //     if (!res.authSetting['scope.userInfo']) {
      //       this.canIUse = true
      //     }
      //   }
      // })
    },
    methods: {

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
