
<template>
  <div>
    <button @click="testFun">test axios</button>
  </div>
</template>

<script >
import {post} from '../../util'
export default {
  methods: {
    testFun: async function () {
      let customer = await post('/api/getCustomer', {state: 1})
      console.log(customer)
    }
  }
}
</script>
<style >

</style>
