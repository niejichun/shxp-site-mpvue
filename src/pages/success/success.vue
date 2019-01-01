<template>
  <div id="main">
    <div>
      <i-row>
        <i-col span="9" offset="3">
          <button id="gotoOrder" @click="gotoOrder">查看订单</button>
        </i-col>
        <i-col span="9">
          <button id="gotoHome" @click="gotoHome">返回首页</button>
        </i-col>

      </i-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      gotoOrder: function () {
        wx.redirectTo({
          url: '../order/main'
        })
      },
      gotoHome: function () {
        wx.switchTab({
          url: '../home/main'
        })
      }
    }
  }
</script>

<style>
  #main{
    height: 400px;
  }
  #main div{
    position: relative;
    top: 50%;
  }
  #gotoHome{
    background-color: mediumseagreen;
    color: white;
    width: 90%
  }
  #gotoOrder{
    background-color: white;
    color: mediumseagreen;
    border:solid 1px mediumseagreen;
    width: 90%
  }
</style>
