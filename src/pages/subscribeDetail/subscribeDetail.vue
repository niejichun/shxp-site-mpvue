<template>
  <div>

    <div style="height: 100px;padding-left: 10px">
      <i-row>
        <i-col span="8">
          <img :src="seatInfo.url" alt=""  style="width: 100%;height:80px;border-radius: 5px">
        </i-col>
        <i-col span="12" offset="1">
          <div>{{seatInfo.name}}</div>
          <div style="font-size: 10px;position: relative;top: 13px;">{{seatInfo.title}}</div>
          <div style="position: relative;top: 23px;">￥{{seatInfo.price}}</div>
        </i-col>

      </i-row>
    </div>

    <div style="height: 340px;">
      <!--<input placeholder="这是一个可以自动聚焦的input" auto-focus />-->
      <i-input @change="getName" type="textarea" autofocus placeholder="名字" />
      <i-input @change="getPhone" type="textarea" title="联系电话" placeholder="请输入手机号" />
      <i-input @change="getRemark" type="textarea" title="预约留言" placeholder="最多50字" maxlength="50" />

      <picker mode="date" start="2019-01-01" @change="getDate" style="margin-left:13px;margin-top:10px;font-size:15px;color:dimgrey;">
        预定时间&nbsp;&nbsp;&nbsp;{{reserve.reserve_date}}
      </picker>

      <i-row>
        <i-col span="12">
          <i-button @click="confirmInterval(0)">午餐</i-button>
        </i-col>
        <i-col span="12">
          <i-button @click="confirmInterval(1)">晚餐</i-button>
        </i-col>
      </i-row>

      <i-button @click="handleClick" type="ghost" shape="circle" size="small">预定</i-button>
    </div>
  </div>
</template>

<script>
  import {sendP, titleLabel, post} from '@/util'
  import config from '@/config'
  const apiUrl = '/api/shxp/wechat/SHXPWESubscribeControl?method='
  export default {
    data () {
      return {
        reserve: {
          reserve_date: ''
        },
        seatInfo: {},
        interval: 0,
        reserve_date: ''
      }
    },
    mounted: function () {
      this.seatInfo = this.$root.$mp.query // 获取参数
    },
    methods: {
      getName: function (event) {
        this.reserve.reserve_name = event.mp.detail.detail.value
      },
      getPhone: function (event) {
        this.reserve.reserve_phone = event.mp.detail.detail.value
      },
      getRemark: function (event) {
        this.reserve.reserve_remark = event.mp.detail.detail.value
      },
      getDate: function (event) {
        this.reserve.reserve_date = event.mp.detail.value
      },
      confirmInterval: function (interval) {
        this.reserve.reserve_time_interval = interval
      },
      handleClick: async function () {
        this.reserve.seatClass_id = this.seatInfo.id
        let res = await post(apiUrl + 'addReserve', this.reserve)
        if (res.state === 'success') {
          wx.redirectTo({url: '../success/main'})
        }
      }
    }
  }
</script>

<style>
</style>
