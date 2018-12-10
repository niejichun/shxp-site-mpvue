<template>
  <div>

    <div>
      <img src="/static/img/seat-2.jpg" alt="">
      <span>双人座</span>
      <span>适合2人约会</span>
      <span>￥398</span>
    </div>
    <i-panel title="输入用户信息">
      <i-input :value="value1" title="姓名" autofocus placeholder="名字" />
      <i-input :value="value2" type="number" title="联系电话" placeholder="请输入手机号" />
      <i-input :value="value3" type="textarea" title="预约留言" placeholder="最多50字" maxlength="50" />
    </i-panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: '',
        value2: '',
        value3: ''
      }
    },
    mounted: function () {
      this.params = this.$root.$mp.query // 获取参数

      this.value1 = ''
      this.value2 = ''
      this.value3 = ''
      this.value4 = '输入框已禁用'
      this.value5 = ''
      this.value6 = ''
      this.value7 = ''
    },
    methods: {

    }
  }
</script>

<style>
</style>
