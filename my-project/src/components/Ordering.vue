<template>
  <div>
    <div class="index-2vPo3">
      <img
        alt
        class="index-1Ff0i"
        src="https://cube.elemecdn.com/f/8e/309a15de8975a87b4f9a143c79944png.png?x-oss-process=image/format,webp/resize,w_686"
      />
    </div>
    <div class="recommend-1M-lc">
      <div class="aaaa">
        <p class="recommend">饿了么推荐指数🌟🌟🌟🌟🌟</p>
        <div class="hot-item">
          <ul class="hot-ul">
            <li v-for="(r,index) in ordeing" :key="index">
              <a href="###">
                <div class="hot-img">
                  <img
                    :src="r.img"
                    alt
                  />
                </div>
                <p class="tit-h" v-text="r.title"></p>
                <p class="tit-c" v-text="r.content">
                  
                </p>
                <span class="down">
                  <small>¥</small>{{r.price}}
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>
            <!-- <li>
              <a href="###">
                <div class="hot-img">
                  <img
                    src="https://cube.elemecdn.com/b/5f/657a69265660d16ca445014854569jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                    alt
                  />
                </div>
                <p class="tit-h">白切鸡腿饭</p>
                <p class="tit-c">
                  月售26
                  好评率100%
                </p>
                <span class="down">
                  <small>¥</small>27
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a href="###" style=" position: relative;">
                <div class="hot-img">
                  <img
                    src="https://cube.elemecdn.com/7/c2/f72b357f5d61cdd5dfd4819426374jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                    alt
                  />
                </div>
                <p class="tit-h">滑旦牛肉饭</p>
                <p class="tit-c">
                  月售10
                  好评率0%
                </p>
                <span class="down">
                  <small>¥</small>20
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="hot-img">
                  <img
                    src="https://cube.elemecdn.com/9/7d/6db251b21cba94cb77450943746fcjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                    alt
                  />
                </div>
                <p class="tit-h">叉烧滑蛋饭</p>
                <p class="tit-c">
                  月售3
                  好评率0%
                </p>
                <span class="down">
                  <small>¥</small>19
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="hot-img">
                  <img
                    src="https://cube.elemecdn.com/a/76/38ff7b103f56c58a7d8ebef978659jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                    alt
                  />
                </div>
                <p class="tit-h">三丝炒面</p>
                <p class="tit-c">
                  月售21
                  好评率100%
                </p>
                <span class="down">
                  <small>¥</small>18
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="hot-img">
                  <img
                    src="https://cube.elemecdn.com/5/16/3e5fef02668f64dcc9b6d0510a0b0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                    alt
                  />
                </div>
                <p class="tit-h">肉片肠</p>
                <p class="tit-c">
                  月售13
                  好评率100%
                </p>
                <span class="down">
                  <small>¥</small>8
                  <div slot="footer" style="display:inline-block">
                    <van-tag size="mini" color="rgb(35, 149, 255)" style="border-radius: 50%;">+</van-tag>
                  </div>
                </span>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ordeing: []
    };
  },
  created() {
    this.datasum()
  },
  methods: {
    datasum() {
      this.$axios.get("http://localhost:3000/ordeing").then(({ data }) => {
        this.ordeing = data;
        window.console.log(data)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.index-2vPo3 {
  height: 4.3466667rem;
  padding: 0.186667rem 0 0;
  text-align: center;

  img {
    width: 21.146667rem;
    height: 100%;
  }
}
.recommend-1M-lc {
  .recommend {
    width: 22.146667rem;
    padding-left: 1.25rem;
  }
}
.aaaa {
  .hot-item {
    padding-bottom: 0.625rem;
    width: 22.146667rem;
    .hot-ul {
      display: flex;
      width: 21.446667rem;
      overflow-x: auto;
      flex-shrink: 0;
      white-space: nowrap;
      margin-left: 1rem;
      li {
        flex: 1;
        justify-content: center;
        align-items: center;
        a {
          width: 7.075rem;
          display: block;
          padding: 0 0.2125rem 0;
          font-size: 0;
          color: #333;

          .hot-img {
            width: 7.075rem; //55
            height: 7.075rem;
            //   margin: auto;

            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            margin: 0;
          }
          .tit-c {
            color: #aab2bd;
            font-size: 0.4rem;
          }
        }
      }
    }
  }

  .tit {
    font-weight: 700;
    font-size: 1rem;
    position: relative;

    .van-icon {
      position: absolute;
      right: 0.625rem;
    }
  }

  .tit-h {
    font-size: 1rem;
    color: #333;
    padding: 0.1875rem 0;
  }

  .down {
    text-align: left;
    color: rgb(255, 83, 57);
    font-size: 1rem;
  }
}
</style>