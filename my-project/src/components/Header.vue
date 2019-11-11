<template >
  <header class="elementCity" style="color:#fff">
    <van-icon name="location" class="iconCity" />
    <div class="cityNow">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" active-color='#fff' />
      </van-dropdown-menu>
    </div>
  </header>
</template>
<script>
import Vue from "vue";

import { Icon } from "vant";

Vue.use(Icon);
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem)

export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "广州", value: 0 },
        { text: "深圳", value: 1 },
        { text: "杭州", value: 2 },
        { text: "南宁", value: 3},
        { text: "北京", value: 4 }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.elementCity {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.cityNow {
  display: inline-block;
  margin-left: 0.1875rem;
  color: #fff;
  font-size: 1.125rem;
}
.iconCity {
  margin-left: 1rem;
  font-weight: bold;
  color: #fff;
}
.van-dropdown-menu {
  display: inline-block;
  height: 0;
  padding: 0 .3125rem;
  
}

</style>