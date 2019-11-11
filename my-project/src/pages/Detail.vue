<template>
  <div>
    <DetailHeader />
    <van-tabs v-model="active" color="blue" line-width="26px">
      <van-tab title="点餐">
        <Ordering />
        <Meunveiw />
         <!-- <Detailfooter/> -->
      </van-tab>
      <van-tab title="评价">
          <div>评价</div>
      </van-tab>
      <van-tab title="商家">
          <Detailcontent3/>
        </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);

import { Sticky } from "vant";

Vue.use(Sticky);
import DetailHeader from "../components/Detailheader.vue";
import Ordering from "../components/Ordering";
import Meunveiw from "../components/Meunveiw";
// import Detailfooter from "../components/Detailfooter.vue"
import Detailcontent3 from "../components/Detailcontent3"
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    DetailHeader,
    Ordering,
    Meunveiw,
    // Detailfooter,
    Detailcontent3
  },
 
};
</script>
<style lang="scss" scoped>
</style>