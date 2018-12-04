
<template>
  <div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="1000" duration="1000">
      <block v-for="(item, index) in imgUrls" :index="index" :key="key">
        <swiper-item>
          <image :src="item" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>

    <scroll-view  :style="{'height': '300px'}" :scroll-y="false" :scroll-x="true" @scrolltolower="scrolltolower" @scroll="scroll" >
      <div :style="{'height': '200px','background-color':'red'}">tyuiolpo</div>
      <div class=""  :style="{'height': '200px','background-color':'red'}">dsdsd
      </div><div class=""  :style="{'height': '200px','background-color':'red'}">grytyju</div>
    </scroll-view>
    <!--<image src="/static/swiper/1.jpg" class="slide-image" mode="aspectFill"/>-->
    <button @click="testFun">test ajax</button>
  </div>
</template>

<script >
import {post} from '../../util'
export default {
  data () {
    return {
      imgUrls: [
        '/static/swiper/1.jpg',
        '/static/swiper/2.jpg',
        '/static/swiper/3.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },
  mounted: function () {
    function scrolltolower () {
      console.log(7)
    }
    function scroll (e) {
      console.log(6)
      console.log(e)
    }
  },
  methods: {
    testFun: async function () {
      let customer = await post('/api/getCustomer', {state: 1})
      console.log(customer)
    }
  }
}
</script>
<style >

</style>


<!--<template>-->
  <!--<div class="wraper">-->
    <!--<div class="container">-->
      <!--<div class="section-two">-->
        <!--<div class="tab">-->
          <!--<a :class="currentTab=='0'?'nav active': 'nav'" data-current="0" @click="switchTab('switchTab',$event)">门诊服务</a>-->
          <!--<a :class="currentTab=='1'?'nav active': 'nav'" data-current="1" @click="switchTab('switchTab',$event)">住院服务</a>-->
          <!--<a :class="currentTab=='2'?'nav active': 'nav'" data-current="2" @click="switchTab('switchTab',$event)">综合服务</a>-->
        <!--</div>-->
        <!--<swiper class="cont" @change="switchItem('switchItem',$event)" :current="currentTab" circular="true" skip-hidden-item-layout="true">-->
          <!--<swiper-item><div class="item">A</div></swiper-item>-->
          <!--<swiper-item><div class="item">B</div></swiper-item>-->
          <!--<swiper-item><div class="item">C</div></swiper-item>-->
        <!--</swiper>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--currentTab: '0'-->
      <!--}-->
    <!--},-->
    <!--components: {-->
    <!--},-->
    <!--methods: {-->
      <!--switchTab: function (prompt, res) {-->
      <!--// console.log(prompt,res);-->
        <!--let oIndex = res.mp.currentTarget.dataset.current-->
        <!--this.currentTab = oIndex-->
      <!--},-->
      <!--switchItem: function (prompt, res) {-->
      <!--// console.log(prompt,res.mp.detail.current);-->
        <!--let oIndex = res.mp.detail.current-->
        <!--this.currentTab = oIndex-->
      <!--}-->
    <!--},-->
    <!--created () {-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.container {-->
    <!--flex: 1;-->
  <!--}-->
  <!--/*第二功能模块*/-->
  <!--.section-two {-->
    <!--width: 100%;-->
    <!--height: auto;-->
    <!--overflow: hidden;-->
    <!--background-color: #fff;-->
  <!--}-->
  <!--/*轮播图导航 */-->
  <!--.tab {-->
    <!--width: 100%;-->
    <!--height: 90rpx;-->
    <!--box-sizing: border-box;-->
    <!--padding: 20rpx 0 20rpx;-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--border-bottom: 1rpx solid #ebebeb;-->
  <!--}-->
  <!--.nav {-->
    <!--text-align: center;-->
    <!--flex: 1;-->
    <!--font-weight: 600;-->
    <!--box-sizing: border-box;-->
  <!--}-->
  <!--.nav:nth-of-type(odd) {-->
    <!--border-left: 1rpx solid #ebebeb;-->
    <!--border-right: 1rpx solid #ebebeb;-->
  <!--}-->
  <!--.nav.active {-->
    <!--color: #16cc80;-->
  <!--}-->
  <!--/*轮播图内容*/-->
  <!--.cont {-->
    <!--width: 100%;-->
    <!--height: 520rpx;-->
    <!--padding-top: 25rpx;-->
    <!--font-size: 28rpx;-->
  <!--}-->
  <!--.cont swiper-item {-->
    <!--width: auto;-->
    <!--height: 100%;-->
    <!--background-color: #5fd9a6;-->
    <!--border: 1rpx solid #ebebeb;-->
    <!--text-align: center;-->
    <!--font-size: 50rpx;-->
    <!--box-sizing: border-box;-->
  <!--}-->
<!--</style>-->


<!--<template>-->
  <!--<div class="contain">-->
    <!--<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getSetting">获取权限</button>-->
    <!--<span>openId:{{openId}}</span>-->
    <!--<button @click="getOpenId">getOpenId</button>-->
    <!--<scroll-view scroll-x class="top">-->
      <!--<div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">-->
        <!--{{item.title}}-->
      <!--</div>-->
    <!--</scroll-view>-->
    <!--<swiper :current="currentTab" @change="changeTab">-->
      <!--<swiper-item>-->
        <!--<div>-->
          <!--111-->
        <!--</div>-->
      <!--</swiper-item>-->
      <!--<swiper-item>-->
        <!--<div>n-->
          <!--222-->
        <!--</div>-->
      <!--</swiper-item>-->
      <!--<swiper-item>-->
        <!--<div>-->
          <!--333-->
        <!--</div>-->
      <!--</swiper-item>-->
    <!--</swiper>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import {mapState, mapMutations} from 'vuex'-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--tabBar: [-->
          <!--{ 'title': '本周最热' },-->
          <!--{ 'title': '好评排行' },-->
          <!--{ 'title': '借阅排行' }-->
        <!--],-->
        <!--currentTab: 0-->
      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--...mapState([-->
        <!--'openId'-->
      <!--])-->
    <!--},-->
    <!--mounted () {-->
      <!--// this.getSetting()-->
      <!--// this.getSystemInfo()-->
    <!--},-->
    <!--methods: {-->
      <!--...mapMutations({-->
        <!--setOpenId: 'SET_OPEN_ID'-->
      <!--}),-->
      <!--getUserInfo1 (e) {-->
        <!--console.log('111', e.mp.detail.userInfo)-->
      <!--},-->

      <!--getOpenId () {-->
        <!--let _this = this-->
        <!--wx.login({-->
          <!--// 获取code-->
          <!--success: function (res) {-->
            <!--var code = res.code // 返回code-->
            <!--console.log(code)-->
            <!--var appId = 'wxb141309c0101eb3d'-->
            <!--var secret = '78ce417ce31de1c2f33ae60c9c174a5a'-->
            <!--wx.request({-->
              <!--url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',-->
              <!--data: {},-->
              <!--header: {-->
                <!--'content-type': 'json'-->
              <!--},-->
              <!--success: function (res) {-->
                <!--var openid = res.data.openid // 返回openid-->
                <!--console.log('openid为' + openid)-->
                <!--_this.setOpenId(openid)-->
              <!--}-->
            <!--})-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--getSetting () {-->
        <!--wx.getSetting({-->
          <!--success: function (res) {-->
            <!--if (res.authSetting['scope.userInfo']) {-->
              <!--wx.getUserInfo({-->
                <!--success: function (res) {-->
                  <!--console.log(res.userInfo)-->
                  <!--// 用户已经授权过-->
                  <!--console.log('用户已经授权过')-->
                <!--}-->
              <!--})-->
            <!--} else {-->
              <!--console.log('用户还未授权过')-->
            <!--}-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--getSystemInfo () {-->
        <!--wx.getSystemInfo({-->
          <!--success: function (res) {-->
            <!--console.log(res.model) //  手机型号-->
            <!--console.log(res.pixelRatio)-->
            <!--console.log(res.windowWidth)-->
            <!--console.log(res.windowHeight)-->
            <!--console.log(res.language)-->
            <!--console.log(res.version)-->
            <!--console.log(res.platform)-->
            <!--console.log(res.system) //  操作系统版本-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--clickTab (e) {-->
        <!--this.currentTab = e-->
      <!--},-->
      <!--changeTab (e) {-->
        <!--this.currentTab = e.mp.detail.current-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
  <!--.top {-->
    <!--width: 100%;-->
    <!--text-align: center;-->
    <!--line-height: 42px;-->
    <!--white-space: nowrap;-->
    <!--position: relative;-->
    <!--background: #fff;-->
  <!--}-->
  <!--.tabbar {-->
    <!--width: 120px;-->
    <!--font-size: 18px;-->
    <!--height: 42px;-->
    <!--display: inline-block;-->
    <!--color: #000;-->
  <!--}-->

  <!--.tabbar-bottom {-->
    <!--color: #2196f3;-->
    <!--border-bottom: 2px solid #2196f3;-->
  <!--}-->
<!--</style>-->
