<template>
  <div class="ImagesName">
      <h3>品质套餐</h3>
      <p class="eatp1">搭配齐全吃得好</p>
      <p class="eatp2">立即抢购></p>
    <van-image class="imgs" round width="8rem" height="6rem" src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" />
  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";

Vue.use(Image);
export default {};
</script>
<style  scoped>
.ImagesName{
    position: relative;
    padding-left: 1rem ;
    height: 7.1875rem /* 115/16 */;
    background: rgba(164, 175, 145, 0.3);
}
.imgs{
    position:absolute;
    top: .3125rem;
    right: .625rem;
}
h3{
  font-size: 1.25rem;
  margin-bottom: -0.6875rem;
    font-weight: bold;
    color: #333;
}
.eatp1{
      margin-bottom: -0.6875rem;
      color: #999;
}
.eatp2{
    color:#af8260;
}
</style>