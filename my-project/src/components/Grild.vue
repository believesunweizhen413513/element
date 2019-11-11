<template>
  <van-swipe @change="onChange">
    <van-swipe-item>
      <van-grid :column-num="5">
        <van-grid-item
          v-for="value in entries.slice(0,10)"
          :key="value.value"
          :icon="value.url"
          :text="value.name"
        />
      </van-grid>
    </van-swipe-item>
    <van-swipe-item>
      <van-grid :column-num="5">
        <van-grid-item
          v-for="value in entries.slice(0,5)"
          :key="value.value"
         :icon="value.url"
          :text="value.name"
        />
      </van-grid>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, Swipe, SwipeItem } from "vant";
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      current: 0,
      entries:[]
    };
  },
  created() {
    this.onUpdata()
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onUpdata() {
      this.$axios.get("http://localhost:3000/entries").then(({ data }) => {
        this.entries = data;
        // window.console.log(data)
      });
    }
  }
};
</script>
<style scoped>
div {
  margin-bottom: 5px;
}
</style>