<template>
  <div style="background:#f5f5f5">
    <div class="mine-header-top">
      <div class="header-profile">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div class="header-login">
        <p class="login" v-text="user" @click="goto('/loging')"></p>
        <!-- <p class="login" v-else>登录/注册</p> -->

        <p class="login-prerogative" v-if="name" @click="clear()">点击退出</p>
        <p class="login-prerogative" v-else>登录后享受更多特权</p>
      </div>
      <van-icon name="arrow" />
    </div>
    <div class="maininfo">
      <div class="red-packet">
        <p>
          <van-icon name="completed" />
        </p>
        <p class="icon-pink">红包</p>
      </div>
      <div class="gold-coin">
        <p>
          <van-icon name="points" />
        </p>
        <p class="icon-pink">金币</p>
      </div>
    </div>
    <div class="profile-1reTe">
      <van-icon name="location" color="blue" />
      <div class="action" @click="goto('/location')">我的地址</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="profile-1reTe" style="margin-bottom:0">
      <van-icon name="bag" color="green" />
      <div class="action">金币商城</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="profile-1reTe">
      <van-icon name="gift" color="red" />
      <div class="action">分享拿20元现金</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="profile-1reTe" style="margin-bottom:0">
      <van-icon name="service" color="blue" />
      <div class="action">我的客服</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="profile-1reTe" style="margin-bottom:0">
      <!-- <van-icon name="description" color="blue" /> -->
      <div
        class="img"
        style="width:16px;hight:16px; display: inline-block;padding-left: 6.666667vw; "
      >
        <img
          style="width:16px;hight:16px; display: inline-block;"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div class="action">下载饿了么APP</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="profile-1reTe" style="margin-bottom:0">
      <van-icon name="description" color="blue" />
      <div class="action">规则中心</div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div class="Secrecy-policy">
      <p>隐私政策</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  created() {
    (this.user = this.getcookie("username")), (this.name = true);
    // window.console.log(this)
  },
  data() {
    return {
      user: "登录/注册",
      name: false
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    clear() {
      // 清除localStorage内容
      // localStorage.removeItem('username'),
      // localStorage.removeItem('password')
      // 清除Cookie内容
      this.removeCookie("username"),
        this.removeCookie("password"),
        (this.name = false),
        (this.user = "登录/注册");
    },
    setcookie(key, val, iday) {
      let now = new Date();
      now.setDate(now.getDate() + iday);
      document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
    },
    getcookie(key) {
      let str = document.cookie; //username=admin; age=18
      let arr = str.split("; ");
      for (let item of arr) {
        let arr2 = item.split("=");
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    },
    removeCookie(key) {
      this.setcookie(key, "", -1);
    }
  },

  computed: {
    // user() {
    //   // 用localStorage获取内容
    //   // return localStorage.username;
    //   // 用cookie获取内容
    //   return this.getcookie("username")
    // },
  }
};
</script>
<style lang="scss" scoped>
.mine-header-top {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 6.666667vw 4vw;
  display: flex;
  align-items: center;
  .header-profile {
    display: inline-block;
    img {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
    }
  }
  .header-login {
    margin-left: 0.625rem;
    display: inline-block;
    .login {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0.625rem;
      line-height: 1rem;
    }
    .login-prerogative {
      font-size: 0.75rem /* 12/16 */;
      color: #fff;
    }
  }
  .van-icon {
    position: absolute;
    right: 0.625rem /* 10/16 */;
    color: #fff;
  }
}
.maininfo {
  display: flex;
  text-align: center;
  background: #fff;
  margin-bottom: 1.25rem;
  .red-packet {
    flex: 1;
    border-right: 0.0625rem solid #ddd;
    .van-icon {
      width: 1.875rem /* 30/16 */;
      height: 1.875rem;
      line-height: 1.875rem;
      background: red;
      border-radius: 50%;
      color: #fff;
    }
  }
  .gold-coin {
    flex: 1;
    .van-icon {
      width: 1.875rem;
      height: 1.875rem;
      line-height: 1.875rem;
      background: green;
      border-radius: 50%;
      color: #fff;
    }
  }
  .icon-pink {
    font-size: 0.75rem;
    line-height: 0.3125rem;
  }
}
.profile-1reTe {
  padding: 0.625rem 0.625rem 0.625rem 0.625rem;
  background: #fff;
  position: relative;
  margin-bottom: 1.25rem /* 20/16 */;
  .van-icon {
    padding-left: 6.666667vw;
  }
  .action {
    display: inline-block;
    // line-height: 4.533333vw;
    padding-left: 0.625rem /* 10/16 */;
  }
  .arrow {
    position: absolute;
    right: 0.625rem;
  }
}
.Secrecy-policy {
  text-align: center;
  color: #0085ff;
}
</style>