<template>
  <div class="itme-list">
    <van-list
      :offset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="item"
        v-for="(r,index) in restaurantsCard"
        :key="index"
        @click="gotodetail(r.distance)"
      >
        <div class="imglist">
          <img :src="r.url" alt />
        </div>
        <div class="goodlist">
          <h3 v-text="r.name"></h3>
          <van-rate v-model="value" size="14px" readonly />
          <span class="Rate" v-text="r.rating"></span>
          <span class="sales-volume">{{r.mouthsave}}</span>
          <section class="peisong">
            <div class="peifree">
              <span class="Send-out">{{r.Sendout}}</span>
              <span class="Send-free">{{r.Sendfree}}</span>
            </div>
            <div class="peitime">
              <span class="peistrant">
                {{((r.distance)/1000)}}
                <i>km</i>
              </span>
              <span class="Send-time">{{r.Sendtime}}</span>
            </div>
          </section>
          <div class="discounts-item">
            <div class="shou">
              <span class="first-head">首</span>
              <span class="index-desc">{{r.first}}</span>
            </div>
            <div class="cut-price">
              <span class="cut-free">减</span>
              <span class="index-desc">{{r.discounts}}</span>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List, Rate } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
Vue.use(Rate);

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      restaurants: [],
      value: 3
    };
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        // this.restaurants = [...this.restaurants, ...data];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.restaurants.length >= 10) {
          window.console.log("到底部了");
          this.finished = true;
        }
      });
    },
    // goto(path) {
    //   this.$router.push(path);
    // },
    /* this.$router.replace(path)这种方式也可以跳转到指定页面与this.$router.push的区别就是不会向history传递记录，简单来说就是这种方式不能前进后退页面
    如果用这种方式，上面的点击事件@click="gotolink(path)"这样写，例如：@click="gotolink(/detail)
    */

    // gotolink(path) {
    //   //点击跳转至上次浏览页面
    //   // this.$router.go(-1)
    //   //指定跳转地址
    //   this.$router.replace(path);
    // },

    /*
    // 在浏览器记录中前进一步，等同于 history.forward()
        router.go(1)
        // 后退一步记录，等同于 history.back()
        router.go(-1)

        // 前进 3 步记录
        router.go(3)
    */
    gotodetail(index) {
      const userId = index;
      window.console.log(userId);
      this.$router.push({ name: "detail", query: { userId } }); // -> /user/123
    }
  },
  computed: {
    search() {
      return this.$store.getters.getSearchText;
    },
    restaurantsCard() {
      if (this.search.searchText) {
        return this.restaurants.filter(item => {
          if (item.name.indexOf(this.search.searchText) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.itme-list {
  margin-bottom: 6.5625rem /* 105/16 */;
  .item {
    display: flex;
    margin-bottom: 1.25rem /* 20/16 */;
    padding: 0.4rem 0;
    .imglist {
      // float: left;
      width: 17.333333vw;
      height: 17.333333vw;
      margin-right: 0.1875rem /* 3/16 */;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goodlist {
      h3 {
        display: flex;
        margin: 0;
        padding: 0;
        color: #333;
        font-weight: 800;
        font-size: 1.125rem /* 18/16 */;
        overflow: hidden;
        line-height: 2.25rem;
      }

      .Rate {
        margin-left: 0.5rem;
        font-size: 0.875rem;
        color: #666;
      }
      .sales-volume {
        margin-left: 0.5rem;
        font-size: 0.875rem;
        color: #666;
      }
      .peisong {
        margin-top: 0.5rem;
        color: #666;
        font-size: 0.875rem;
        display: flex;
        .peifree {
          .Send-out {
            padding-right: 0.3125rem;
            border-right: 0.0625rem solid #ccc;
          }
          .Send-free {
            padding-left: 0.3125rem;
          }
        }
      }
      .peitime {
        position: absolute;
        right: 0.625rem;
        .peistrant {
          padding-right: 0.3125rem;
          border-right: 0.0625rem solid #ccc;
        }
        .Send-time {
          padding-left: 0.3125rem;
        }
      }
      .discounts-item {
        margin-top: 1rem;
        width: 16.25rem;
        padding-right: 0.625rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .first-head {
          background: rgb(112, 188, 70);
          width: 7.466667rem;
          height: 7.466667rem;
          font-size: 0.875rem /* 14/16 */;
          color: #fff;
        }
        .index-desc {
          padding-left: 0.3125rem /* 5/16 */;
          font-size: 0.875rem /* 14/16 */;
          color: #666;
        }
        .cut-free {
          background: rgb(240, 115, 115);
          width: 7.466667rem;
          height: 7.466667rem;
          font-size: 0.875rem /* 14/16 */;
          color: #fff;
        }
        .index-desc {
          padding-left: 0.3125rem /* 5/16 */;
          font-size: 0.875rem /* 14/16 */;
          color: #666;
        }
      }
    }
  }
}
</style>