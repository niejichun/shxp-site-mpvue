<template>
  <div>
    <block v-for="(citem, cIndex) in wxClass" :index="cIndex" :key="key">
      <titleClass :titleLabel="citem.text"></titleClass>
      <scroll-view class='scroll-view' scroll-x="true" @scrolltolower="scrolltolower" @scroll="scroll" v-if="citem.id==0">
        <block v-for="(mitem, mindex) in wxMenu" :index="mindex" :key="key">
          <div style="width:120px;height: 130px;margin-left: 10px;display: inline-block;border: 1px solid rgb(218,212,214);border-radius: 5px">
          <image :src="mitem.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
          <div style="font-size: 11px;margin-left: 10px">{{mitem.name}}</div>
          <div style="font-size: 11px;margin-left: 10px">￥ {{mitem.price}}</div>
          </div>
        </block>
      </scroll-view>

      <i-row style="position:relative;left: 18px;" v-if="citem.id!=0">
        <block v-for="(mitem, mindex) in wxMenu" :index="mindex" :key="key">
          <i-col span="12">
            <image :src="mitem.url" class="slide-image" mode="widthFix" style="width: 79%;border-radius:5px" @click="showPricture"/>
            <span style="display: block;font-size: 11px">{{mitem.name}}</span>
            <span style="display: block;font-size: 11px">￥ {{mitem.price}}</span>
          </i-col>
        </block>
      </i-row>
    </block>
  </div>
</template>


<script>
  import {sendP, titleLabel, post} from '@/util'
  import config from '@/config'
  import titleClass from '../../components/title'
  const apiUrl = '/api/shxp/wechat/SHXPWEMenuControl?method='
  export default {
    data () {
      return {
        titleLabel: titleLabel,
        wxMenu: [],
        wxClass: [],
        showWxMenuImg: []

      }
    },
    components: {
      titleClass
    },
    mounted: function () {
      this.getMenu()
      this.getClass()
    },
    methods: {
      getClass: async function () {
        console.log('getClass')
        let res = await post(apiUrl + 'getClass', {})
        this.wxClass = res.shxpProductClass
      },
      getMenu: async function () {
        let res = await post(apiUrl + 'getMenu', {})
        for (let r of res) {
          r.url = config.host + r.url
          this.showWxMenuImg.push(r.url)
        }
        this.wxMenu = res

        console.log('this.wxMenu', this.wxMenu)
      },
      scrolltolower () {
        console.log(7)
      },
      scroll (e) {
        console.log(6)
        console.log(e)
      }
    }
  }
</script>


<style>
  .scroll-view {
    text-align: left;
    white-space: nowrap;
    overflow-x: scroll;
  }
  .view-div {
    display: inline-block;
    background: green;
    padding: 20rpx 50rpx;
    border: 1rpx solid #fff;
  }
</style>
