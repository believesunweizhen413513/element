<template>
  <div>
    <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
      <span
        role="button"
        aria-label="购物车"
        attr-quantity="0"
        class="bottomNav-carticon_E1nII_0 bottomNav-empty_3zwfj_0"
      >
        <van-icon name="shopping-cart" size="26px" />
        <!---->
      </span>
      <div role="button" aria-label="购物车有商品0件，共0元，另需配送费5元。" class="bottomNav-cartInfo_3l5zP_0">
        <p class="bottomNav-carttotal_1DJt5_0">
          <span class="bottomNav-carttotalOriginal_2tu8R_0">未选购商品</span>
          <!---->
        </p>
        <p class="bottomNav-cartdelivery_1TjrT_0">另需配送费5元</p>
      </div>
      <a
        role="button"
        href="javascript:;"
        class="submit-btn-submitbutton_3t114_0 submit-btn-disabled_1DLSl_0"
      >
        <span>¥20起送</span>
      </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
import { Icon } from "vant";

Vue.use(Icon);
export default {
  created() {
    this.getmun(), this.gocar();
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    getmun() {
      this.userId = this.$route.query.userId; //接收参数
      // var _this=this;
      //  window.console.log(_this.userId)
    },
    onClickButton() {
      //   Toast("点击按钮");
    },
    gocar() {
      var _this = this.userId;
      this.$axios
        .get("http://localhost:3000/detail", {
          params: {
            num: _this
          }
        })
        .then(({ data }) => {
          this.restaurants = data;
          window.console.log(data);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.bottomNav-cartfooter_1Xb8t_0 {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  padding-left: 2.106667rem;
  padding-left: 21.066667vw;
  background-color: rgba(61, 61, 63, 0.9);
  -webkit-backdrop-filter: blur(0.266667rem);
  -webkit-backdrop-filter: blur(2.666667vw);
  height: 1.28rem;
  height: 12.8vw;
  .cartview-cartview_m8q55 {
    font-size: 0.426667rem;
  }
}
.bottomNav-carticon_E1nII_0.bottomNav-empty_3zwfj_0 {
  background-image: radial-gradient(circle, #363636 0.626667rem, #444 0);
  background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
}
.bottomNav-carticon_E1nII_0 {
  position: absolute;
  left: 0.32rem;
  left: 3.2vw;
  bottom: 0.2rem;
  bottom: 2vw;
  width: 1.333333rem;
  width: 13.333333vw;
  height: 1.333333rem;
  height: 13.333333vw;
  box-sizing: border-box;
  border-radius: 100%;
  background-color: #3190e8;
  border: 0.133333rem solid #444;
  border: 1.333333vw solid #444;
  box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
  will-change: transform;
}

.bottomNav-cartInfo_3l5zP_0 {
  -webkit-flex: 1;
  flex: 1;
  .bottomNav-carttotal_1DJt5_0 {
    font-size: 0.48rem;
    line-height: normal;
    color: #999;
  }
  .bottomNav-cartdelivery_1TjrT_0 {
    color: #999;
    font-size: .266667rem;
}
}
.submit-btn-submitbutton_3t114_0.submit-btn-disabled_1DLSl_0 {
    background-color: #535356;
    color: #fff;
}

.submit-btn-submitbutton_3t114_0 {
    height: 100%;
    width: 2.8rem;
    width: 28vw;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    -webkit-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
    word-break: keep-all;
}
.van-icon {
  position: relative;
  left: 0.4125rem;
  top: 0.3875rem;
  color: #999;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-weight: 400;
}
</style>