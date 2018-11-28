
<template>
  <div>

    <!--<input placeholder="这个只有在按钮点击的时候才聚焦" :focus="focus"-->
    <!--style="width: 300rpx;background-color: red"/>-->
    <!--<searchbar>123</searchbar>-->
    <i-button bind:click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
    <!--<i-tab>123123</i-tab>-->
    <i-tabs :current="current" color="#f759ab" bindchange="handleChange">
      <i-tab key="tab1" title="选项1"></i-tab>
      <i-tab key="tab2" title="选项2"></i-tab>
      <i-tab key="tab3" title="选项3"></i-tab>
    </i-tabs>
    <i-panel title="基础用法">
      <i-input :value="value1" title="收货人" autofocus placeholder="名字" />
      <i-input :value="value2" type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input :value="value3" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
      <i-input :value="value4" title="用户信息" disabled />
    </i-panel>

    <i-panel title="无标题输入框">
      <i-input :value="value5" placeholder="请输入收货人姓名" />
    </i-panel>

    <i-panel title="圆角输入框">
      <i-input :value="value6" type="number" right title="消费总额" mode="wrapped" placeholder="询问收银员后输入" />
      <i-input :value="value7" type="number" right error title="不参与优惠金额" mode="wrapped" placeholder="询问收银员后输入" />
    </i-panel>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="1000">
      <block v-for="(item, index) in movies" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill" style="width: 100%"/>
        </swiper-item>
      </block>
    </swiper>

      <!--<scroll-view class='scroll-view scroll-class' scroll-x="true">-->
        <!--<div class="view-div" v-for="item in tabBar">{{item.title}}</div>-->
      <!--</scroll-view>-->

  </div>
</template>

<script >

export default {
  data () {
    return {
      current: 'tab1',
      current_scroll: 'tab1',
      focus: true,
      movies: [
        {url: 'static/img/1.jpg'},
        {url: 'static/img/2.jpg'},
        {url: 'static/img/3.jpg'},
        {url: 'static/img/4.jpg'}
      ],
      tabBar: [
        { 'title': '推荐' },
        { 'title': '电视剧' },
        { 'title': '电影' },
        { 'title': '美剧' },
        { 'title': '韩剧' },
        { 'title': '日剧' },
        { 'title': '综艺' },
        { 'title': '动画' }
      ],
      currentTab: 0,
      value1: '',
      value2: '',
      value3: '',
      value4: '输入框已禁用',
      value5: '',
      value6: '',
      value7: ''
    }
  },
  methods: {
    clickTab (e) {
      this.currentTab = e
    },
    changeTab (e) {
      this.currentTab = e.mp.detail.current
    },
    scrolltolower () {
      console.log(7)
    },
    scroll (e) {
      console.log(6)
      console.log(e)
    },
    handleChange ({ detail }) {
      this.setData({
        current: detail.key
      })
    },

    handleChangeScroll ({ detail }) {
      this.setData({
        current_scroll: detail.key
      })
    }
  }
}
</script>
<style >
  .scroll-class {
    position: absolute;
    top:0rpx
  }
  .scroll-view {
    text-align: left;
    white-space: nowrap;
    overflow-x: scroll;
  }
  .view-div {
    color: white;
    font-size: 28rpx;
    display: inline-block;
    background: green;
    padding: 20rpx 45rpx;
    background:linear-gradient(rgb(28,25,23),rgb(118,114,111))
    /*border: 1rpx solid #fff;*/
  }
</style>
