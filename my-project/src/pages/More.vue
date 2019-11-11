<template>
  <div style="background: rgb(249, 249, 249)">
    <div class="credits-nologin-wrapper">
      <p>兑换前请先登录</p>
      <a href="javascript:;" class="db-credits-nologin-btn" @click="goto('login')">立即登录</a>
    </div>
    <div class="db-three-image">
      <div class="db-three-image_left">
        <a href>
          <img src="http://yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt />
        </a>
      </div>
      <div class="db-three-image_right">
        <a href>
          <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt />
        </a>
        <a href>
          <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt />
        </a>
      </div>
    </div>
    <div class="db-goods">
      <ul class="db-goods-wrapper" style="display:flex; flex-wrap: wrap;width: 100%;">
        <li class="db-goods-common_item" v-for="(r,index) in more" :key="index">
          <div class="db-goods-item_image">
            <img :src="r.imgurl" alt />
          </div>
          <div class="db-goods-item_detail" style="background-color:#fff">
            <a href="###">
              <div class="db-goods-item_title-container">
                <div class="db-goods-item_tag-custom" v-text="r.content"></div>"
                3元品质联盟专享红包
                "
              </div>
            </a>
            <a href="###">
              <div class="goodslist">
                <div>
                  <p class="db-goods-item-price">
                    <span data-v-dc035318>{{r.jinbi}}</span>
                  </p>
                </div>
                <div class="goods-flex flex-right">
                  <button>{{r.duihuan}}</button>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li class="db-goods-common_item">
          <div class="db-goods-item_image">
            <img src="//yun.duiba.com.cn/images/201908/lkdtydvryz.jpg" alt />
          </div>
          <div class="db-goods-item_detail">
            <a href="###">
              <div class="db-goods-item_title-container">
                <div class="db-goods-item_tag-custom custom">+44元</div>"
                机械手感手机支架游戏键盘
                "
              </div>
            </a>
            <a href="###">
              <div class="goodslist">
                <div>
                  <p class="db-goods-item-price">
                    <span data-v-dc035318>9金币</span>
                  </p>
                </div>
                <div class="goods-flex flex-right">
                  <button>兑换</button>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li class="db-goods-common_item">
          <div class="db-goods-item_image">
            <img src="//yun.duiba.com.cn/images/201612/2amqjblx28.jpg" alt />
          </div>
          <div class="db-goods-item_detail">
            <a href="###">
              <div class="db-goods-item_title-container">
                <div class="db-goods-item_tag-custom custom">+29元</div>"
                喵星萌物充电宝
                "
              </div>
            </a>
            <a href="###">
              <div class="goodslist">
                <div>
                  <p class="db-goods-item-price">
                    <span data-v-dc035318>9金币</span>
                  </p>
                </div>
                <div class="goods-flex flex-right">
                  <button>兑换</button>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
   return{
     more:[],
   }
  },
  created() {
    this.onLoad()
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    onLoad() {
      this.$axios.get("http://localhost:3000/more").then(({ data }) => {
        this.more =[...data];
        // window.console.log(data)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.credits-nologin-wrapper {
  padding: 0.625rem /* 10/16 */;
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1.25rem /* 20/16 */;
  p {
    font-size: 0.875rem /* 14/16 */;
    color: #333;
    // display: inline-block;
  }
  a {
    position: absolute;
    right: 1rem;
    position: absolute;
    right: 0.625rem;
    font-size: 0.34666667rem;
    width: 4.293333rem;
    color: #fff;
    background: #fd5746;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    border-radius: 1.4rem;
  }
}
.db-three-image {
  display: flex;
  margin-bottom: 1.875rem /* 30/16 */;
  .db-three-image_left {
    width: 50%;
    margin-right: 0.125rem /* 2/16 */;
    img {
      width: 100%;
    }
  }
  .db-three-image_right {
    width: 50%;
    img {
      width: 100%;
      height: 50%;
      display: block;
    }
    img:first-child {
      margin-bottom: 0.0266667rem;
    }
  }
}
.db-goods-common_item {
  width: 50%;
  margin-right: 0.0625rem solid;
  position: relative;
  margin-bottom: 1.875rem /* 30/16 */;
  padding-left: 0.625rem /* 10/16 */;
  box-sizing: border-box;
  clear: left;

  .db-goods-item_detail {
    background: #fff;
    padding-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .goodslist {
    .db-goods-item-price {
      color: rgb(253, 87, 70);
      font-size: 0.875rem;
    }
    .goods-flex button {
      position: absolute;
      right: 0.625rem;
      bottom: 0.625rem;
      width: 3.4375rem;
      font-size: 0.875rem;
      color: rgb(253, 87, 70);
      border: 1px solid rgb(253, 87, 70);
      background: #fff;
      border-radius: 1.25rem;
    }
  }
}
.db-goods-item_title-container {
  margin-top: 0.37333333rem;
  font-size: 0.37333333rem;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  //   min-height: 0.53333333rem;
  .db-goods-item_tag-custom {
    background-color: rgb(240, 217, 141);
    display: inline-block;
    font-size: 0.32rem;
    line-height: 1.4rem !important;
    height: 1.45333333rem;
    padding: 0.05333333rem 0.10666667rem;
    color: #fff;
    border-radius: 0.625rem /* 10/16 */;
    vertical-align: text-bottom;
    position: relative;
    margin-top: 0 !important;
  }
  .custom {
    background: blue;
  }
}
</style>