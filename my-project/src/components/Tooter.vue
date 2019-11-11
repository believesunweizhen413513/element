<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/main/recover" icon="search">发现</van-tabbar-item>
      <van-tabbar-item @click=" gotolink('/main/mach')" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item @click="gotolink('/main/mine')" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    // 如果不用van-tabbar-item 时，可以用以下方法，或者可以直接用<router-link to="/foo"></router-link>
    gotolink(path) {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)
      //指定跳转地址
      this.$router.replace(path);
    }
  }
};
</script>
