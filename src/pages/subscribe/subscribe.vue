<template>
  <div>
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab key="0" title="全部"></i-tab>
      <i-tab key="1" title="大厅"></i-tab>
      <i-tab key="2" title="包房"></i-tab>
    </i-tabs>
    <swiper :current="currentTab" @change="changeTab" :style="{height: showHeight + 'px'}">

      <!--全部-->
      <swiper-item>
        <block v-for="(item, index) in subscribeData" :index="index" :key="key">
          <div style="height: 280px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px">
            <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
            <div style="font-size: 14px">{{item.name}}</div>
            <!--<div v-html="item.remark">{{item.remark}}</div>-->
            <div style="margin-top: 10px;font-size: 10px">
              <i-row>
                <i-col span="6">
                  <span>￥ {{item.price}}</span>
                </i-col>
                <i-col span="6">
                  <span>已预约:{{item.allNum}}</span>
                </i-col>
                <i-col span="6">
                  <span>剩余:{{item.residue}}</span>
                </i-col>
                <button style="position:relative;top: -5px;width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right"
                        @click="gotoDetail(item)">立即预约</button>
              </i-row>
            </div>
          </div>
        </block>
      </swiper-item>

      <!--大厅-->
      <swiper-item>
        <block v-for="(item, index1) in subscribeData" :index="index" :key="key">
          <div style="height: 300px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px" v-if="item.location==1">
            <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
            <div style="font-size: 14px">{{item.name}}</div>
            <!--<div v-html="item.remark">{{item.remark}}</div>-->
            <div style="font-size: 10px">
              <i-row>
                <i-col span="6">
                  <span>￥ {{item.price}}</span>
                </i-col>
                <i-col span="6">
                  <span>已预约:{{item.allNum}}</span>
                </i-col>
                <i-col span="6">
                  <span>剩余:{{item.residue}}</span>
                </i-col>
                <button style="position:relative;top: -5px;width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right"
                        @click="gotoDetail(item)">立即预约</button>
              </i-row>
            </div>
          </div>
        </block>
      </swiper-item>

      <!--包房-->
      <swiper-item>
        <block v-for="(item, index) in subscribeData" :index="index" :key="key">
          <div style="height: 300px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px" v-if="item.location==2">
            <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
            <div style="font-size: 14px">{{item.name}}</div>
            <!--<div v-html="item.remark">{{item.remark}}</div>-->
            <div style="font-size: 10px">
              <i-row>
                <i-col span="6">
                  <span>￥ {{item.price}}</span>
                </i-col>
                <i-col span="6">
                  <span>已预约:{{item.allNum}}</span>
                </i-col>
                <i-col span="6">
                  <span>剩余:{{item.residue}}</span>
                </i-col>
                <button style="position:relative;top: -5px;width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right"
                        @click="gotoDetail(item)">立即预约</button>
              </i-row>
            </div>
          </div>
        </block>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {sendP, titleLabel, post} from '@/util'
  import config from '@/config'
  const apiUrl = '/api/shxp/wechat/SHXPWESubscribeControl?method='
  export default {
    data () {
      return {
        current_scroll: '0',
        currentTab: 0,
        subscribeData: [],
        showHeight: 1300
      }
    },
    mounted: function () {
      this.getSubscribe()
    },
    methods: {
      getSubscribe: async function () {
        let res = await post(apiUrl + 'getSubscribe', {})
        for (let r of res) {
          r.url = config.host + r.url
        }
        this.subscribeData = res
      },
      handleChangeScroll (e) {
        this.current_scroll = e.mp.detail.key
        this.currentTab = e.mp.detail.key

        console.log(this.currentTab === 0)
        console.log('this.currentTab', this.currentTab)
        this.showHeight = 1300
        if (this.currentTab > 0) {
          this.showHeight = 0
          for (let s of this.subscribeData) {
            if (s.location === this.currentTab) {
              this.showHeight += 350
            }
          }
        }
      },
      gotoDetail (item) {
        wx.navigateTo({
          url: `../subscribeDetail/main?id=${item.id}&url=${item.url}&name=${item.name}&price=${item.price}&title=${item.title}`
        })
      }
    }
  }
</script>

<style>
</style>
