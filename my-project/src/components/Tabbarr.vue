<template>
  <div>
    <!-- <van-tabs  v-model="active"  line-height=0>
    <van-tab title="综合排序" @click="shownum"></van-tab>
    <van-tab title="距离最近"></van-tab>
    <van-tab title="品质联盟"></van-tab>
    <van-tab title="筛选"></van-tab>
    </van-tabs>-->

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value1" :options="option3" />
      <van-dropdown-item v-model="value2" :options="option4" />
    </van-dropdown-menu>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      active: 0,
      value1: 0,
      value2: "a",
      show: false,
      option1: [
        { text: "综合排序", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "销量最高", value: 2 },
        { text: "起送价最低", value: 3 },
        { text: "人均从低到高", value: 4 }
      ],
      option2: [{ text: "距离最近", value: "a" }],
      option3: [{ text: "品质联盟", value: 0 }],
      option4: [
        { text: "筛选", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  methods: {
    shownum() {
      this.show = true;
    },
    // paixu() {
    //   //  排序：{PartnerID:1}表示升序， {PartnerID:-1}表示降序
    //   this.$axios
    //     .get("http://localhost:3000/paixu")
    //     .then(({ data }) => {
    //       this.restaurants = data;
    //       window.console.log(data);
    //     });
    // }
  }
};
</script>
