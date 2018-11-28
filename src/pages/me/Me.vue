
<!--<template>-->
  <!--<div>-->
    <!--<swiper class="swiper" indicator-dots="true" autoplay="true" interval="1000" duration="1000">-->
      <!--<block v-for="(item, index) in imgUrls" :index="index" :key="key">-->
        <!--<swiper-item>-->
          <!--<image :src="item" class="slide-image" mode="aspectFill"/>-->
        <!--</swiper-item>-->
      <!--</block>-->
    <!--</swiper>-->

    <!--<scroll-view  :style="{'height': '300px'}" :scroll-y="false" :scroll-x="true" @scrolltolower="scrolltolower" @scroll="scroll" >-->
      <!--<div :style="{'height': '200px','background-color':'red'}">tyuiolpo</div>-->
      <!--<div class=""  :style="{'height': '200px','background-color':'red'}">dsdsd-->
      <!--</div><div class=""  :style="{'height': '200px','background-color':'red'}">grytyju</div>-->
    <!--</scroll-view>-->
    <!--&lt;!&ndash;<image src="/static/swiper/1.jpg" class="slide-image" mode="aspectFill"/>&ndash;&gt;-->
    <!--<button @click="testFun">test ajax</button>-->
  <!--</div>-->
<!--</template>-->

<!--<script >-->
<!--import {post} from '../../util'-->
<!--export default {-->
  <!--data () {-->
    <!--return {-->
      <!--imgUrls: [-->
        <!--'/static/swiper/1.jpg',-->
        <!--'/static/swiper/2.jpg',-->
        <!--'/static/swiper/3.jpg'-->
      <!--],-->
      <!--indicatorDots: false,-->
      <!--autoplay: false,-->
      <!--interval: 5000,-->
      <!--duration: 1000-->
    <!--}-->
  <!--},-->
  <!--mounted: function () {-->
    <!--function scrolltolower () {-->
      <!--console.log(7)-->
    <!--}-->
    <!--function scroll (e) {-->
      <!--console.log(6)-->
      <!--console.log(e)-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--testFun: async function () {-->
      <!--let customer = await post('/api/getCustomer', {state: 1})-->
      <!--console.log(customer)-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->
<!--<style >-->

<!--</style>-->


<!--&lt;!&ndash;<template>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="wraper">&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="container">&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="section-two">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="tab">&ndash;&gt;-->
          <!--&lt;!&ndash;<a :class="currentTab=='0'?'nav active': 'nav'" data-current="0" @click="switchTab('switchTab',$event)">门诊服务</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a :class="currentTab=='1'?'nav active': 'nav'" data-current="1" @click="switchTab('switchTab',$event)">住院服务</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a :class="currentTab=='2'?'nav active': 'nav'" data-current="2" @click="switchTab('switchTab',$event)">综合服务</a>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<swiper class="cont" @change="switchItem('switchItem',$event)" :current="currentTab" circular="true" skip-hidden-item-layout="true">&ndash;&gt;-->
          <!--&lt;!&ndash;<swiper-item><div class="item">A</div></swiper-item>&ndash;&gt;-->
          <!--&lt;!&ndash;<swiper-item><div class="item">B</div></swiper-item>&ndash;&gt;-->
          <!--&lt;!&ndash;<swiper-item><div class="item">C</div></swiper-item>&ndash;&gt;-->
        <!--&lt;!&ndash;</swiper>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
  <!--&lt;!&ndash;export default {&ndash;&gt;-->
    <!--&lt;!&ndash;data () {&ndash;&gt;-->
      <!--&lt;!&ndash;return {&ndash;&gt;-->
        <!--&lt;!&ndash;currentTab: '0'&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;components: {&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;methods: {&ndash;&gt;-->
      <!--&lt;!&ndash;switchTab: function (prompt, res) {&ndash;&gt;-->
      <!--&lt;!&ndash;// console.log(prompt,res);&ndash;&gt;-->
        <!--&lt;!&ndash;let oIndex = res.mp.currentTarget.dataset.current&ndash;&gt;-->
        <!--&lt;!&ndash;this.currentTab = oIndex&ndash;&gt;-->
      <!--&lt;!&ndash;},&ndash;&gt;-->
      <!--&lt;!&ndash;switchItem: function (prompt, res) {&ndash;&gt;-->
      <!--&lt;!&ndash;// console.log(prompt,res.mp.detail.current);&ndash;&gt;-->
        <!--&lt;!&ndash;let oIndex = res.mp.detail.current&ndash;&gt;-->
        <!--&lt;!&ndash;this.currentTab = oIndex&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;created () {&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
  <!--&lt;!&ndash;.container {&ndash;&gt;-->
    <!--&lt;!&ndash;flex: 1;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;/*第二功能模块*/&ndash;&gt;-->
  <!--&lt;!&ndash;.section-two {&ndash;&gt;-->
    <!--&lt;!&ndash;width: 100%;&ndash;&gt;-->
    <!--&lt;!&ndash;height: auto;&ndash;&gt;-->
    <!--&lt;!&ndash;overflow: hidden;&ndash;&gt;-->
    <!--&lt;!&ndash;background-color: #fff;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;/*轮播图导航 */&ndash;&gt;-->
  <!--&lt;!&ndash;.tab {&ndash;&gt;-->
    <!--&lt;!&ndash;width: 100%;&ndash;&gt;-->
    <!--&lt;!&ndash;height: 90rpx;&ndash;&gt;-->
    <!--&lt;!&ndash;box-sizing: border-box;&ndash;&gt;-->
    <!--&lt;!&ndash;padding: 20rpx 0 20rpx;&ndash;&gt;-->
    <!--&lt;!&ndash;display: flex;&ndash;&gt;-->
    <!--&lt;!&ndash;align-items: center;&ndash;&gt;-->
    <!--&lt;!&ndash;border-bottom: 1rpx solid #ebebeb;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;.nav {&ndash;&gt;-->
    <!--&lt;!&ndash;text-align: center;&ndash;&gt;-->
    <!--&lt;!&ndash;flex: 1;&ndash;&gt;-->
    <!--&lt;!&ndash;font-weight: 600;&ndash;&gt;-->
    <!--&lt;!&ndash;box-sizing: border-box;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;.nav:nth-of-type(odd) {&ndash;&gt;-->
    <!--&lt;!&ndash;border-left: 1rpx solid #ebebeb;&ndash;&gt;-->
    <!--&lt;!&ndash;border-right: 1rpx solid #ebebeb;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;.nav.active {&ndash;&gt;-->
    <!--&lt;!&ndash;color: #16cc80;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;/*轮播图内容*/&ndash;&gt;-->
  <!--&lt;!&ndash;.cont {&ndash;&gt;-->
    <!--&lt;!&ndash;width: 100%;&ndash;&gt;-->
    <!--&lt;!&ndash;height: 520rpx;&ndash;&gt;-->
    <!--&lt;!&ndash;padding-top: 25rpx;&ndash;&gt;-->
    <!--&lt;!&ndash;font-size: 28rpx;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;.cont swiper-item {&ndash;&gt;-->
    <!--&lt;!&ndash;width: auto;&ndash;&gt;-->
    <!--&lt;!&ndash;height: 100%;&ndash;&gt;-->
    <!--&lt;!&ndash;background-color: #5fd9a6;&ndash;&gt;-->
    <!--&lt;!&ndash;border: 1rpx solid #ebebeb;&ndash;&gt;-->
    <!--&lt;!&ndash;text-align: center;&ndash;&gt;-->
    <!--&lt;!&ndash;font-size: 50rpx;&ndash;&gt;-->
    <!--&lt;!&ndash;box-sizing: border-box;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->


<template>
  <div class="contain">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getSetting">获取权限</button>
    <span>openId:{{openId}}</span>
    <button @click="getOpenId">getOpenId</button>
    <scroll-view scroll-x class="top">
      <div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
        {{item.title}}
      </div>
    </scroll-view>
    <swiper :current="currentTab" @change="changeTab">
      <swiper-item>
        <div>
          111
        </div>
      </swiper-item>
      <swiper-item>
        <div>n
          222
        </div>
      </swiper-item>
      <swiper-item>
        <div>
          333
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        tabBar: [
          { 'title': '本周最热' },
          { 'title': '好评排行' },
          { 'title': '借阅排行' }
        ],
        currentTab: 0
      }
    },
    computed: {
      ...mapState([
        'openId'
      ])
    },
    mounted () {
      // this.getSetting()
      // this.getSystemInfo()
    },
    methods: {
      ...mapMutations({
        setOpenId: 'SET_OPEN_ID'
      }),
      getUserInfo1 (e) {
        console.log('111', e.mp.detail.userInfo)
      },

      getOpenId () {
        let _this = this
        wx.login({
          // 获取code
          success: function (res) {
            var code = res.code // 返回code
            console.log(code)
            var appId = 'wxb141309c0101eb3d'
            var secret = '78ce417ce31de1c2f33ae60c9c174a5a'
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
              data: {},
              header: {
                'content-type': 'json'
              },
              success: function (res) {
                var openid = res.data.openid // 返回openid
                console.log('openid为' + openid)
                _this.setOpenId(openid)
              }
            })
          }
        })
      },
      getSetting () {
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo)
                  // 用户已经授权过
                  console.log('用户已经授权过')
                }
              })
            } else {
              console.log('用户还未授权过')
            }
          }
        })
      },
      getSystemInfo () {
        wx.getSystemInfo({
          success: function (res) {
            console.log(res.model) //  手机型号
            console.log(res.pixelRatio)
            console.log(res.windowWidth)
            console.log(res.windowHeight)
            console.log(res.language)
            console.log(res.version)
            console.log(res.platform)
            console.log(res.system) //  操作系统版本
          }
        })
      },
      clickTab (e) {
        this.currentTab = e
      },
      changeTab (e) {
        this.currentTab = e.mp.detail.current
      }
    }
  }
</script>

<style>
  .top {
    width: 100%;
    text-align: center;
    line-height: 42px;
    white-space: nowrap;
    position: relative;
    background: #fff;
  }
  .tabbar {
    width: 120px;
    font-size: 18px;
    height: 42px;
    display: inline-block;
    color: #000;
  }

  .tabbar-bottom {
    color: #2196f3;
    border-bottom: 2px solid #2196f3;
  }
</style>
