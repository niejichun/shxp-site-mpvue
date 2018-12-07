<template>
  <div>
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab key="0" title="全部"></i-tab>
      <i-tab key="1" title="大厅"></i-tab>
      <i-tab key="2" title="包房"></i-tab>
    </i-tabs>
    <swiper :current="currentTab" @change="changeTab" style="height: 1200px;">
        <swiper-item>
          <block v-for="(item, index) in subscribeData" :index="index" :key="key">
            <div style="height: 270px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px">
              <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
              <div style="font-size: 14px">{{item.name}}</div>
              <div style="font-size: 12px;color: lightgrey;">{{item.remark}}</div>
              <div style="margin-top: 10px;font-size: 10px">
                <span>￥ {{item.price}}</span>
                <span>已预约：</span>
                <span>{{item.allNum}}</span>
                <span>剩余：</span>
                <span>{{item.residue}}</span>
                <button style="width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right"
                  @click="gotoDetail">立即预约</button>
              </div>
            </div>
          </block>
        </swiper-item>
      <swiper-item>
        <block v-for="(item, index) in subscribeData" :index="index" :key="key">
          <div style="height: 270px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px">
            <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
            <div style="font-size: 14px">{{item.name}}</div>
            <div style="font-size: 12px;color: lightgrey;">{{item.remark}}</div>
            <div style="margin-top: 10px;font-size: 10px">
              <span>￥ {{item.price}}</span>
              <span>已预约：</span>
              <span>{{item.allNum}}</span>
              <span>剩余：</span>
              <span>{{item.residue}}</span>
              <button style="width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right">立即预约</button>
            </div>
          </div>
        </block>
      </swiper-item>
      <swiper-item>
        <block v-for="(item, index) in subscribeData" :index="index" :key="key">
          <div style="height: 270px;border-bottom: 1px solid lightgray;margin-top: 15px;padding-left: 10px;padding-right: 10px">
            <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
            <div style="font-size: 14px">{{item.name}}</div>
            <div style="font-size: 12px;color: lightgrey;">{{item.remark}}</div>
            <div style="margin-top: 10px;font-size: 10px">
              <span>￥ {{item.price}}</span>
              <span>已预约：</span>
              <span>{{item.allNum}}</span>
              <span>剩余：</span>
              <span>{{item.residue}}</span>
              <button style="width: 75px;height: 20px;border-radius: 20px;font-size: 11px;background-color: rgb(38,38,38);line-height: 20px;color: white;float: right">立即预约</button>
            </div>
          </div>
        </block>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current_scroll: '0',
        currentTab: 0,
        subscribeData: [
          {url: '/static/img/seat-2.jpg', price: '198', allNum: 20, residue: 20, name: '双人座', remark: '适合2人的约会'},
          {url: '/static/img/seat-4.jpg', price: '298', allNum: 15, residue: 15, name: '四人座', remark: '适合4人的约会'},
          {url: '/static/img/seat-6.jpg', price: '398', allNum: 10, residue: 10, name: '六人座', remark: '适合5人的约会'},
          {url: '/static/img/seat-n.jpg', price: '498', allNum: 5, residue: 5, name: '团体活动', remark: '适合6人以上约会'}
        ]
      }
    },
    methods: {
      handleChangeScroll (e) {
        this.current_scroll = e.mp.detail.key
        this.currentTab = e.mp.detail.key
      },
      gotoDetail () {
        wx.navigateTo({
          url: '../subscribeDetail/main?id=1'
        })
      }
    }
  }
</script>

<style>
</style>
