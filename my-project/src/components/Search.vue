
<template>
  <div class="searchTabbar">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onSearch() {
      this.$store.dispatch('setSearchText', {
        searchText: this.value,
      });
    },
  },
};
</script>
<style scoped>
.searchTabbar {
  /* background: blue; */
  background-image: linear-gradient(90deg,#0af,#0085ff);
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  margin-bottom: 1.875rem;
}
</style>