<template>
  <div>
    <van-divider :style="{ color: '#000',borderColor: '#999', padding: '0 5px' }">推荐商店</van-divider>
  </div>
</template>
<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {};
</script>
<style  scoped>
div{
    font-size: 1.125rem;
}
</style>