
<template>
  <div>
    <!--banner-->
    <swiper class="swiper" indicator-dots="true" autoplay="true"
            interval="5000" duration="1000"
            indicator-color="white">
      <block v-for="(item, index) in banners" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%"/>
        </swiper-item>
      </block>
    </swiper>
    <!--banner end-->
    <titleClass :titleLabel='titleLabel.reserve'></titleClass>
    <!--预约订座 seat picture-->
    <i-row style="position:relative;left: 18px;">
      <block v-for="(item, index) in tableType" :index="index" :key="key">
        <i-col span="12">
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 80%;border-radius:5px"/>
        </i-col>
      </block>
    </i-row>
    <div class="oneBlock">二人桌</div>
    <div class="twoBlock">四人桌</div>
    <div class="threeBlock">六人桌</div>
    <div class="fourBlock">团体活动</div>
    <!--预约订座 seat picture end-->

    <!--关于我们-->
    <i-row style="position:relative;top: 20px;">
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

    <titleClass :titleLabel='titleLabel.menuCommand'></titleClass>

    <!--招牌菜式 -->
    <!--https://www.jb51.net/article/130017.htm  图片预览参考-->
    <i-row style="position:relative;left: 18px;">
      <block v-for="(item, index) in signboards" :index="index" :key="key">
        <i-col span="12">
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 79%;border-radius:5px" @click="showPricture"/>
          <span style="display: block;font-size: 11px">{{item.name}}</span>
        </i-col>
      </block>
    </i-row>
    <!--招牌菜式 end -->
    <!--拨打电话-->
    <div style="width: 30px;height: 30px;position: fixed;top: 90%;right: 10px;z-index: 999;border-radius: 20px;text-align: center;color: white;" @click="sendPhone">
      <image src="/static/img/phone.png"
             class="slide-image" mode="widthFix" style="width: 100%;"/>
    </div>

    <div class="weui-uploader__input-box">
      <div class="weui-uploader__input"></div>
    </div>


    <div v-if="showAuthor">
        <div class='header'>
          <image src='/static/img/wechat.png'></image>
        </div>

        <div class='content'>
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像等)</text>
        </div>

        <button class='bottom' type='primary' open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>

        <!--个人账号无法微信认证，不能获取手机号-->
        <!--<button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">授权登录</button>-->
      </div>


      
  </div>
</template>

<script >
  import {sendP, titleLabel, post} from '@/util'
  import config from '@/config'
  import titleClass from '../../components/title'
  const apiUrl = '/api/shxp/wechat/SHXPWEHomeControl?method='
export default {
    data () {
      return {
        titleLabel: titleLabel,
        banners: [
          {url: '/static/img/banner1.png'},
          {url: '/static/img/banner2.png'}
        ],
        tableType: [
          {url: '/static/img/seat-2.jpg'},
          {url: '/static/img/seat-4.jpg'},
          {url: '/static/img/seat-6.jpg'},
          {url: '/static/img/seat-n.jpg'}
        ],
        signboards: [],
        showSignboardImg: []
      }
    },
    components: {
      titleClass
    },
    mounted: function () {
      this.getSignboard()
    },
    methods: {
      getSignboard: async function () {
        const res = await post(apiUrl + 'searchSignboardProduct', {})
        for (let r of res) {
          r.url = config.host + r.url
          this.showSignboardImg.push(r.url)
        }
        this.signboards = res
      },
      sendPhone: function () {
        sendP('15898131992')
      },
      showPricture: function (e) {
        wx.previewImage({
          current: e.target.dataset.src, // 当前显示图片的http链接
          urls: this.showSignboardImg
        })
      }
    }
  }
</script>
<style >
  .swiper{
    height: 365rpx;
  }
  .oneBlock{
    display:block;
    width:298rpx;
    height:193rpx;
    z-index:12;
    position:absolute;
    top:528rpx;
    left:46rpx;
    background:rgba(0,0,0,0.4);
    border-radius:5px;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
    text-align: center;
  }
  .twoBlock{
    display:block;
    width:298rpx;
    height:193rpx;
    z-index:12;
    position:absolute;
    top:528rpx;
    left:421rpx;
    background:rgba(0,0,0,0.4);
    border-radius:5px;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
    text-align: center;
  }
  .threeBlock{
    display:block;
    width:298rpx;
    height:193rpx;
    z-index:12;
    position:absolute;
    top:733rpx;
    left:46rpx;
    background:rgba(0,0,0,0.4);
    border-radius:5px;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
    text-align: center;
  }
  .fourBlock{
    display:block;
    width:298rpx;
    height:193rpx;
    z-index:12;
    position:absolute;
    top:733rpx;
    left:421rpx;
    background:rgba(0,0,0,0.4);
    border-radius:5px;
    color:white;
    font-size: 20px;
    line-height: 185rpx;
    text-align: center;
  }
</style>
