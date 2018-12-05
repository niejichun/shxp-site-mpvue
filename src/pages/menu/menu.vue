<template>
  <div>
    <titleClass :titleLabel='titleLabel.salad'></titleClass>
    <scroll-view class='scroll-view' scroll-x="true" @scrolltolower="scrolltolower" @scroll="scroll">
      <block v-for="(item, index) in signboards" :index="index" :key="key">
        <div style="width:120px;height: 130px;margin-left: 10px;display: inline-block;border: 1px solid rgb(218,212,214);border-radius: 5px">
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 100%;border-radius: 5px"/>
          <div style="font-size: 11px;margin-left: 10px">{{item.name}}</div>
          <div style="font-size: 11px;margin-left: 10px">￥ {{item.price}}</div>
        </div>
      </block>
    </scroll-view>

    <titleClass :titleLabel='titleLabel.stapleFood'></titleClass>
    <i-row style="position:relative;left: 18px;">
      <block v-for="(item, index) in signboards" :index="index" :key="key">
        <i-col span="12">
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 79%;border-radius:5px" @click="showPricture"/>
          <span style="display: block;font-size: 11px">{{item.name}}</span>
          <span style="display: block;font-size: 11px">￥ {{item.price}}</span>
        </i-col>
      </block>
    </i-row>

    <titleClass :titleLabel='titleLabel.drink'></titleClass>
    <i-row style="position:relative;left: 18px;">
      <block v-for="(item, index) in signboards" :index="index" :key="key">
        <i-col span="12">
          <image :src="item.url" class="slide-image" mode="widthFix" style="width: 79%;border-radius:5px" @click="showPricture"/>
          <span style="display: block;font-size: 11px">{{item.name}}</span>
          <span style="display: block;font-size: 11px">￥ {{item.price}}</span>
        </i-col>
      </block>
    </i-row>

  </div>
</template>


<script>
  import titleClass from '../../components/title'
  import {titleLabel} from '@/util'
  export default {
    data () {
      return {
        titleLabel: titleLabel,
        signboards: [
          {
            url: '/static/img/signboard1.jpg',
            name: '至尊牛排',
            price: 58
          },
          {
            url: '/static/img/signboard2.jpg',
            name: '海鲜杂烩',
            price: 108
          },
          {
            url: '/static/img/signboard3.jpg',
            name: '法国鹅肝',
            price: 98
          },
          {
            url: '/static/img/signboard4.jpg',
            name: '三文鱼',
            price: 48
          }
        ],
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      }
    },
    components: {
      titleClass
    },
    methods: {
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
