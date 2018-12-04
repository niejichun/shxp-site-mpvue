<template>
  <div>
    <i-row style="position:relative;top: 20px;">
      <i-col span="9">
        <span style="float: right;color: darkgrey">-</span>
      </i-col>
      <i-col span="6" style="text-align: center">
        <span style="font-size: 15px">{{titleLabel}}</span>
      </i-col>
      <i-col span="9">
        <span style="color: darkgrey">-</span>
      </i-col>
    </i-row>
    <i-divider></i-divider>
  </div>
</template>

<script>
  export default {
    props: ['titleLabel']
  }
</script>
<style >
</style>
