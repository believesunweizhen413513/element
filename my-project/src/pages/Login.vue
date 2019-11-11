<template>
  <div class="login-press">
    <div class="LoginHeader">
      <img
        src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
        class="LoginHeader-85WpV"
      />
    </div>
    <div class="denglu">
      <!-- <van-cell-group>
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" maxlength="11" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button
            slot="button"
            size="small"
            type="primary"
            @click.prevent="getCode"
          >{{computeTime>0 ? `(${computeTime}s)后重试` : '获取验证码'}}</van-button>
        </van-field>
      </van-cell-group>-->
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <section class="MessageLogin">
      新用户登录即自动注册，并表示已同意
      <a
        href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
      >《用户服务协议》</a>
      和
      <a
        href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
      >《隐私权政策》</a>
    </section>
    <button class="SubmitButton-2wG4T">登录</button>
    <div class="aboutme">
      <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
    </div>
  </div>
</template>
<script>
import { setCookie, getCookie } from "../assets/cooke.js";
import Vue from "vue";
import { Field, CellGroup } from "vant";
Vue.use(Field).use(CellGroup);
export default {
  data() {
    return {
      username: "",
      password: "",
      computeTime: 0
    };
  },
  methods: {
    // 设置倒计时
    // async getCode() {
    //   // 如果当前没有计时
    //   if (!this.computeTime) {
    //     this.computeTime = 60;
    //     this.intervalId = setInterval(() => {
    //       this.computeTime--;
    //       if (this.computeTime <= 0) {
    //         // 停止计时
    //         clearInterval(this.intervalId);
    //       }
    //     }, 1000);
    //   }
    // },
    mounted() {
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie("username")) {
        this.$router.push("/main/home");
      }
    },
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        this.$axios.post("http://localhost:3000/Login", data).then(res => {
          // console.log(res)
          /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
          if (res.data == -1) {
            this.tishi = "该用户不存在";
            this.showTishi = true;
          } else if (res.data == 0) {
            this.tishi = "密码输入错误";
            this.showTishi = true;
          } else if (res.data == "admin") {
            /*路由跳转this.$router.push*/
            this.$router.push("/main");
          } else {
            this.tishi = "登录成功";
            this.showTishi = true;
            setCookie("username", this.username, 1000 * 60);
            setTimeout(
              function() {
                this.$router.push("/main/home");
              }.bind(this),
              1000
            );
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent; //自定义边框
  outline: none;
}
.login-press {
  width: 21.875rem;
  margin-left: 0.875rem;
}
.LoginHeader {
  text-align: center;
  margin-bottom: 1.25rem;
  img {
    height: 56px;
    padding-top: 3.125rem;
  }
}
.denglu {
  text-align: center;
  .van-field {
    margin-bottom: 1rem /* 16/16 */;
    border: 1px solid #ddd;
    border-radius: 0.3125rem /* 5/16 */;
  }
}
.MessageLogin {
  color: #999;
  font-size: 0.875rem /* 14/16 */;
  margin-bottom: 1.875rem /* 30/16 */;
  a {
    color: #2395ff;
  }
}
.SubmitButton-2wG4T {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  margin-bottom: 1.25rem /* 20/16 */;
}
.aboutme {
  text-align: center;
  a {
    font-size: 0.75rem /* 12/16 */;
    color: #999;
  }
}
</style>