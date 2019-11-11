<template>
  <div>
    <div class="detail-header" v-for="(r,index) in restaurants" :key="index">
      <div class="nav-hreader"> 
          <a href=""><van-icon name="arrow-left" color='#fff' size='24px' /></a>
          <div class="shop-img">
              <img :src="r.url" alt="">
          </div>
      </div>
      <div class="Nav-Shop-name">
          <div class="shop-name">
              <h2>
                  <span>{{r.name}}</span>
                  <van-icon name="play" size='16px'/>
              </h2>
          </div>
          <div class="grade-num">
              <span class="grade">评价{{r.rating}}</span>
              <span class="mouth-num">{{r.mouthsave}}</span>
              <span>蜂鸟快送
                  <span>约{{r.Sendtime}}</span>
              </span>
          </div>
          <div class="discount-coupon">
              <div class="discount-left">
                  <span>25减2</span>
                  <span>35减3</span>
                  <span>50减5</span>
              </div>
              <van-action-sheet v-model="show" title="标题">
                <p style="font-size: .32rem;text-align: center;"><span style="padding:2px 6px;border:1px solid rgb(255, 201, 193) ;color: rgb(255, 75, 51); border-radius: 5px">满减</span> 满25元减2元，满35元减3元，满50元减5元</p>
              </van-action-sheet>
              <div class="discount-right"  @click="onSelect">
                  1个优惠
                  <van-icon name="arrow-down" />
                </div>
              
              
          </div>
          <p class="index-TmrYy">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      restaurants:[]
    };
  },
created() {
  this.getmun(),
  this. onLoad()
  
},
  methods: {
    onSelect() {
      this.show = true;
    },
    getmun(){
      this.userId=this.$route.query.userId; //接收参数
    },
    onLoad() {
    var _this=this.userId
      this.$axios.get("http://localhost:3000/detail",{params:{
         num:_this
      }}).then(({ data }) => {
        this.restaurants =data;
        // window.console.log(data)
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-header {
  padding-top: 2.666667rem;
  position: relative;
  .nav-hreader {
    height: 5.666667rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 1.066667vw 2.666667vw 0;
    background: url(https://cube.elemecdn.com/e/b4/86f7ba58d89f041cbb7b6eaef285fjpeg.jpeg?x-oss-process=image/format,webp/resize,w_750) no-repeat;
    background-position: 35%;
    background-size: cover;
    // position: relative;
    .shop-img{
        
        position: absolute;
        left: 37%;
        bottom: -.25rem ;
        img{
            height: 5rem ;
        width: 5rem ;
        }
    }
  }
  .Nav-Shop-name{
      padding: 3rem  0 0 ;
      margin-bottom: 1.25rem /* 20/16 */;
      .shop-name{
          text-align: center;
          span{
              vertical-align: middle;
              font-size: 1.25rem;
          }
          .van-icon{
               vertical-align: middle;
          }
      }
      .grade-num{
          text-align: center;
          font-size:.75rem /* 12/16 */;
          color: #666;
          span{
              margin-right: .3125rem /* 5/16 */;
            }
      }
      .discount-coupon{
        padding-top: 1.25rem ;
          .discount-left{
              display: inline-block;
              text-align: left;
              margin-left: 1.25rem /* 20/16 */;
              font-size: .75rem /* 14/16 */;
              span{
                  padding: .0625rem  .1875rem ;
                  background: #fff;
                 color: rgb(255, 75, 51);
                 border: 1px solid rgb(255, 201, 193);
                  border-radius: .3125rem;
                  margin-right: .3125rem /* 5/16 */;
              }
          }
          .discount-right{
            float: right;
             font-size: .75rem /* 12/16 */;
             margin-right: 1.25rem /* 20/16 */;
             color: #666;
          }
      }
      .index-TmrYy{
        font-size: .75rem;
        text-align: left;
        margin-left: 1.25rem;
        color: #999;
      }
  }
  .van-action-sheet__header{
    line-height: 4.0625rem;
  }

.van-action-sheet{
  padding: 2.5rem 0  2.5rem 0;
}
}
</style>