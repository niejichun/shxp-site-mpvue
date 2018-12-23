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
      <i-input :value="name" title="姓名" autofocus placeholder="名字" />
      <i-input :value="number" type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input :value="leave" type="textarea" title="预约留言" placeholder="最多50字" maxlength="50" />

      <picker mode="date" :value="date" start="2018-09-01" @change="dateChange"
        style="margin-left:13px;margin-top:10px;font-size:15px;color:dimgrey;">
        预定时间&nbsp;&nbsp;&nbsp;{{date}}
      </picker>

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
        name: '',
        number: '',
        leave: '',
        seatInfo: {},
        date: ''
      }
    },
    mounted: function () {
      this.seatInfo = this.$root.$mp.query // 获取参数
      console.log(this.seatInfo)
    },
    methods: {
      dateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.date = e.mp.detail.value
      },
      handleClick: async function () {
        // todo
        let res = await post(apiUrl + 'addReserve', {})
        this.subscribeData = res
      }
    }
  }
</script>

<style>
</style>
