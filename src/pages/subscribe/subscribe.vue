<template>
  <div>
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab key="0" title="全部"></i-tab>
      <i-tab key="1" title="大厅"></i-tab>
      <i-tab key="2" title="包房"></i-tab>
    </i-tabs>
    <swiper :current="currentTab" @change="changeTab">
      <swiper-item>
        <div>全部</div>
      </swiper-item>
      <swiper-item>
        <div>大厅</div>
      </swiper-item>
      <swiper-item>
        <div>包房</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current_scroll: '0',
        currentTab: 0
      }
    },
    methods: {
      handleChangeScroll (e) {
        this.current_scroll = e.mp.detail.key
        this.currentTab = e.mp.detail.key
      }
    }
  }
</script>

<style>
</style>
