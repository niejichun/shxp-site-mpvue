<template>
  <div>
    <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab key="0" title="全部"></i-tab>
      <i-tab key="1" title="待支付"></i-tab>
      <i-tab key="2" title="进行中"></i-tab>
      <i-tab key="3" title="已完成"></i-tab>
      <i-tab key="4" title="已取消"></i-tab>
    </i-tabs>



    <div v-for="(item, index) in reserveData" class="reserve" >
      <div class="reserve_order">
        <i-row>
          <i-col span="15">
            订单号：{{item.reserve_code}}
          </i-col>
          <i-col span="4" offset="3">
            {{item.reserve_state_desc}}
          </i-col>
        </i-row>
      </div>

      <div class="reserve_seat">
        <i-row>
          <i-col span="8">
            <img :src="item.seatClass_img_url" alt=""  style="width: 100%;height:80px;border-radius: 5px">
          </i-col>
          <i-col span="12" offset="1">
            <div>{{item.seatClass_name}}</div>
            <div style="font-size: 10px;position: relative;top: 13px;">{{item.seatClass_title}}</div>
            <div style="position: relative;top: 23px;">￥{{item.seatClass_price}}</div>
          </i-col>
        </i-row>
      </div>

      <div>
        <span class="complete" @click="showModel(3,item)">完成预约</span>
        <span class="cancel" @click="showModel(4,item)">取消预约</span>
      </div>
    </div>

    <i-modal title="操作确认" :visible="visible" :actions="actions" @click="modifyState">
      <view>{{modelStr}}</view>
    </i-modal>
  </div>
</template>

<script>
  import {sendP, titleLabel, post} from '@/util'
  import config from '@/config'
  const apiUrl = '/api/shxp/wechat/SHXPWEOrderControl?method='
  export default {
    data () {
      return {
        reserveData: [],
        current_scroll: '0',
        visible: false,
        actions: [{name: '取消'}, {name: '确定', color: '#ed3f14', loading: false}],
        modelStr: '',
        targetState: '',
        oldItem: {}
      }
    },
    mounted: function () {
      this.getReserve(0)
    },
    methods: {
      getReserve: async function (state) {
        let res = await post(apiUrl + 'getReserve', {reserve_state: state})
        for (let r of res) {
          r.seatClass_img_url = config.host + r.seatClass_img_url
          if (r.reserve_state === '1') {
            r.reserve_state_desc = '未支付'
          } else if (r.reserve_state === '2') {
            r.reserve_state_desc = '进行中'
          } else if (r.reserve_state === '3') {
            r.reserve_state_desc = '已完成'
          } else {
            r.reserve_state_desc = '已取消'
          }
        }
        this.reserveData = res
      },
      handleChangeScroll: async function (e) {
        this.current_scroll = e.mp.detail.key
        this.getReserve(this.current_scroll)
      },

      showModel: function (state, item) {
        this.targetState = state
        this.oldItem = item
        if (state === 3) {
          this.modelStr = '确定完成预定吗'
        } else {
          this.modelStr = '确定完成取消吗'
        }
        this.visible = true
      },
      modifyState: async function () {
        let res = await post(apiUrl + 'modifyReserve', {reserve_state: this.targetState, reserve_id: this.oldItem.reserve_id})
        this.visible = false
        this.getReserve(this.current_scroll)
      }
    }
  }
</script>

<style>
  .reserve{
    height: 210px;
    padding:0px 10px 0px 10px;
  }
  .reserve_order{
    height: 50px;
    line-height: 50px;
    font-size: 14px
  }
  .reserve_seat{
    border-top:solid 1px rgb(236,236,236);
    border-bottom:solid 1px rgb(236,236,236);
    padding: 10px 0px 10px 0px
  }
  .complete{
    display:inline-block;
    width:90px;
    height:30px;
    border:solid 1px grey;
    text-align:center;
    margin-top:10px;
    float:right;
  }
  .cancel{
    display:inline-block;
    width:90px;
    height:30px;
    border:solid 1px grey;
    text-align:center;
    margin-top:10px;
    float:right;
    margin-right: 10px
  }
</style>
