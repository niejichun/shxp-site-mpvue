
<template>
  <div>
    <!--banner-->
    <swiper class="swiper" indicator-dots="true" autoplay="true"
            interval="5000" duration="1000"
            indicator-color="white">
      <block v-for="(item, index) in movies" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%"/>
        </swiper-item>
      </block>
    </swiper>
    <!--banner end-->

    <!--预约订座 title-->
    <i-row style="position:relative;top: 20px;">
      <i-col span="9">
        <span style="float: right;color: darkgrey">-</span>
      </i-col>
      <i-col span="6" style="text-align: center">
        <span style="font-size: 15px">预约订座</span>
      </i-col>
      <i-col span="9">
        <span style="color: darkgrey">-</span>
      </i-col>
    </i-row>
    <!--预约订座 title end -->


    <i-row style="position:relative;top: 30px;">
      <i-col span="24">
        <div style="height: 1rpx;width:100%;background-color: gray"></div>
      </i-col>
    </i-row>


    <!--预约订座 seat picture-->
    <i-row style="position:relative;top: 50px;">
      <i-col span="12" style="text-align: center">
        <image src="/static/img/seat-4.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div class="LeftBlock">二人桌</div>
      </i-col>

      <i-col span="12" style="text-align: center">
        <image src="/static/img/seat-2.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div class="rightBlock">四人桌</div>
      </i-col>
    </i-row>

    <i-row style="position:relative;top: 60px;">
      <i-col span="12" style="text-align: center">
        <image src="/static/img/seat-n.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div class="LeftBlock">六人桌</div>
      </i-col>

      <i-col span="12" style="text-align: center">
        <image src="/static/img/seat-6.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div class="rightBlock">团体活动</div>
      </i-col>
    </i-row>
    <!--预约订座 seat picture end-->

    <!--关于我们-->
    <i-row style="position:relative;top: 100px;">
      <i-col span="24" style="text-align: center">
        <image src="/static/img/aboutme.jpg"
               class="slide-image" mode="widthFix" style="width: 100%;"/>
        <div style="position: absolute;top: 10px;left: 20px;width: 150px;height: 50px;color:white;font-size:18px;line-height:50px;">
          <span style="line-hight:25px">关于我们</span>
        </div>
        <div style="position: absolute;top: 60px;left: 20px;width: 150px;height: 250px;color:white;font-size:12px;line-height:25px;text-align: left">
          作为国内快速成长的西式休闲餐饮连锁企业，公司将大都市的餐饮管理专业化和本土餐厅的舒适用餐环境完美结合，
          以一流的服务，高品质的美食和饮品吸引了来自世界各地的人们。从早午餐到晚餐，凭借着浓郁北美风味的经典西式佳肴，
          始终如一地为客人提供宾至如归的用餐体验。
        </div>
      </i-col>
    </i-row>
    <!--关于我们end-->

    <!--招牌菜式 title-->
    <i-row style="position:relative;top: 120px;">
      <i-col span="9">
        <span style="float: right;color: darkgrey">-</span>
      </i-col>
      <i-col span="6" style="text-align: center">
        <span style="font-size: 15px">招牌菜式</span>
      </i-col>
      <i-col span="9">
        <span style="color: darkgrey">-</span>
      </i-col>
    </i-row>
    <!--招牌菜式 title end -->


    <i-row style="position:relative;top: 130px;">
      <i-col span="24">
        <div style="height: 1rpx;width:100%;background-color: gray"></div>
      </i-col>
    </i-row>


    <i-row style="position:relative;top: 150px;">
      <i-col span="12" style="text-align: center">
        <image src="/static/img/signboard1.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div style="text-align: left;font-size: 10px;padding-left: 14px">西冷牛扒</div>
      </i-col>

      <i-col span="12" style="text-align: center">
        <image src="/static/img/signboard2.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div style="text-align: left;font-size: 10px;padding-left: 14px">海鲜杂烩</div>
      </i-col>
    </i-row>

    <i-row style="position:relative;top: 160px;">
      <i-col span="12" style="text-align: center">
        <image src="/static/img/signboard3.jpeg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div style="text-align: left;font-size: 10px;padding-left: 14px">法国鹅肝</div>
      </i-col>

      <i-col span="12" style="text-align: center">
        <image src="/static/img/signboard4.jpg"
               class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        <div style="text-align: left;font-size: 10px;padding-left: 14px">极品三文鱼</div>
      </i-col>
    </i-row>
    <!--拨打电话-->
    <div style="width: 30px;height: 30px;position: fixed;top: 50%;right: 10px;z-index: 999;border-radius: 20px;text-align: center;color: white;" @click="sendPhone">
      <image src="/static/img/phone.png"
             class="slide-image" mode="widthFix" style="width: 100%;"/>
    </div>
  </div>
</template>

<script >
  import {sendP} from '@/util'
  export default {
    data () {
      return {
        movies: [
          {url: '/static/img/banner1.png'},
          {url: '/static/img/banner2.png'}
        ]
      }
    },
    methods: {
      sendPhone: function () {
        sendP('15898131992')
      }
    }
  }
</script>
<style >
  .swiper{
    height: 365rpx;
  }
  .LeftBlock{
    display:block;
    width:298rpx;
    height:94%;
    z-index:12;
    position:absolute;
    background:rgba(0,0,0,0.4);
    position:absolute;
    top:0px;
    border-radius:5px;
    left:21px;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
  }

  .rightBlock{
    display:block;
    width:298rpx;
    height:95%;
    z-index:12;
    position:absolute;
    background:rgba(0,0,0,0.4);
    position:absolute;
    top:0px;
    border-radius:5px;
    left:417rpx;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
  }
</style>
