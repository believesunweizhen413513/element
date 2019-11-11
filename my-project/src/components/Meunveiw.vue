<template>
  <div>
    <div style="margin-bottom: 60px;  position: relative;">
      <van-icon name="fire" />
      <van-tree-select height="55vw" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <div v-if="activeIndex === 0">
            <van-card
              price="16.00"
              desc="牛肉主要原料：牛肉"
              title="干炒牛河粉"
              thumb="https://cube.elemecdn.com/b/30/39c696dfd9005002d9276f1091bb0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            >
              <div slot="footer" @click="showmenuw()">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
            <van-card
              price="2.50"
              desc=" 旦主要原料：鸡蛋"
              title="煎蛋"
              thumb="https://cube.elemecdn.com/0/97/a2bb068895dc744ccc288e441a6a3jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
            <van-card
              num="2"
              price="2.50"
              desc=" 旦主要原料：鸡蛋"
              title="加鸡蛋"
              thumb="https://cube.elemecdn.com/3/1f/432d177ce9dbbd4e0c80dfc9e9e3ejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              origin-price="10.00"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
            <van-card
              price="8.00"
              desc=" 肉片主要原料：猪肉"
              title="肉片肠"
              thumb="https://cube.elemecdn.com/5/16/3e5fef02668f64dcc9b6d0510a0b0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              origin-price="10.00"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
          </div>
          <div v-if="activeIndex === 1">
            <van-card
              price="12.00"
              desc="牛心、牛腰、牛肝主要原料：牛心"
              title="驰名牛三星汤"
              thumb="https://cube.elemecdn.com/9/89/e8402255c73fd0c483a1f353c8e3ejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
            <van-card
              price="27.00"
              desc=" 鸡肉主要原料：鸡肉"
              title="白切鸡腿饭"
              thumb="https://cube.elemecdn.com/b/5f/657a69265660d16ca445014854569jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
            <van-card
              price="22.00"
              desc="月售7份"
              title="烧鸭腿饭"
              thumb="https://cube.elemecdn.com/2/26/9ff546c512dea2edffb9cd09ba83ajpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              origin-price="30.00"
            >
              <div slot="footer">
                <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%">+</van-tag>
              </div>
            </van-card>
          </div>
        </template>
      </van-tree-select>
    </div>
    <van-action-sheet v-model="show" title="干炒牛河粉">
      <div class="menuwordering">
        <img
          src="https://cube.elemecdn.com/b/30/39c696dfd9005002d9276f1091bb0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
          alt
        />
      </div>
      <div class="menuwtitle">
        <h3>干炒牛河粉</h3>
        <p>已选：桂林米粉+微辣+中份</p>
        <p style="color: #ff5339;">
          <b>￥</b>16.00
        </p>
      </div>
      <div class="menuwlist1">
        <h3>粉面</h3>
        <span
         v-for='(a,index) in arr1' @click="tab(index)" :class="{'active':a.show===true}"
          :key="index"
        >{{a.sort}}</span>
        <!-- <span>河粉</span>
        <span>细粉</span>
        <span>面</span>-->
      </div>
      <div class="menuwlist2" style="margin-bottom:50px">
        <h3>辣度</h3>
        <span  v-for='(a,index) in arr2' @click="selectSort(index)" :class="{'active':a.show===true}"
          :key="index">{{a.sort}}</span>
        <!-- <span>中辣</span>
        <span>特辣</span>-->
      </div>
      <button class="specpanel-doneBtn_WnF6t">选好了</button>
    </van-action-sheet>
    <Detailfooter />
  </div>
</template>
<script>
import Detailfooter from "../components/Detailfooter.vue";
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
import { Card } from "vant";

Vue.use(Card);
import { Icon } from "vant";

Vue.use(Icon);
import { ActionSheet } from "vant";

Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      activeIndex: 0,
      items: [
        { text: "热销" },
        { text: "炖品" },
        { text: "碟头饭" },
        { text: "炒粉炒饭" },
        { text: "汤粉面类" },
        { text: "粥类" },
        { text: "开心加料" },
        { text: "煲仔粉" },
        { text: "拉肠类" }
      ],
      arr1: [
        { sort: "桂林米粉", show: true },
        { sort: "河粉", show: false },
        { sort: "细粉", show: false },
        { sort: "面", show: false }
      ],
      arr2: [
        { sort: "微辣", show: true },
        { sort: "中辣", show: false },
        { sort: "特辣", show: false }
      ]
    };
  },
  components: {
    Detailfooter
  },
  methods: {
    showmenuw() {
      this.show = true;
    },
    tab: function(index) {
      for (var i = 0; i < this.arr1.length; i++) {
        this.arr1[i].show = false;
      }
      this.arr1[index].show = true;
    },
    selectSort : function(index) {
      for (var i = 0; i < this.arr2.length; i++) {
        this.arr2[i].show = false;
      }
      this.arr2[index].show = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.van-sidebar-item--select {
  border-color: #fff;
}
.van-sidebar {
  margin-left: 1rem;
}
.van-icon {
  position: absolute;
  top: 0.4875rem;
  color: orangered;
  // left: .3125rem;
}
.van-tree-select__nav {
  flex: 0.6;
}
.van-tree-select__nav-item {
  padding: 6px 6px 6px 6px;
  font-size: 0.75rem;
}
.menuwordering {
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
  img {
    width: 5rem;
    height: 5rem;
  }
}
.menuwtitle {
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
.menuwlist1,
.menuwlist2 {
  margin-left: 10px;
  span {
    padding: 0.1875rem 0.5rem;
    border: 0.0625rem solid #f5f5f5;
    margin-left: 0.1875rem;
    background: #f5f5f5;
  }
  .active {
    background-color: rgba(185, 0, 135, 0.2);
    color: blue;
  }
}

button {
  border: 0;
  background-color: transparent;
  outline: none;
}
.specpanel-doneBtn_WnF6t {
  width: 100%;
  height: 1.066667rem;
  height: 10.666667vw;
  color: #fff;
  font-size: 0.426667rem;
  font-weight: 700;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-color: #2396ff;
}
</style>