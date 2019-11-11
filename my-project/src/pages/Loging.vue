<template>
  <div>
    <div class="LoginHeader">
      <img
        src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
        class="LoginHeader-85WpV"
      />
    </div>
    <div class="login-wrap" v-show="showLogin">
      <p v-show="showTishi">{{tishi}}</p>
      <label for>账号:</label>
      <input type="text" placeholder="请输入用户名或手机号" v-model="username" />
      <label for>密码:</label>
      <input type="password" placeholder="请输入密码" v-model="password" />

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

      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister" style=" text-align: center;">
      <p v-show="showTishi">{{tishi}}</p>
      <label for>用户名:</label>
      <input type="text" placeholder="请输入用户名" v-model="newUsername" />
      <label for>手机号:</label>
      <input type="text" placeholder="请输入手机号" v-model="newtel" />
      <label for>密码:</label>
      <input type="password" placeholder="请输入密码" v-model="newPassword" />
      <label for>确认密码:</label>
      <input type="password" placeholder="请确认密码" v-model="renewPassword" />
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      renewPassword: "",
      newtel: ""
    };
  },
  methods: {
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
    },
    login() {
      if (this.username === "" || this.password === "") {
        this.tishi = "请输入用户名或密码";
      } else {
        // 用localStorage设置缓存
        // localStorage.setItem("password", this.password);
        // localStorage.setItem("username", this.username); // JSON.stringify 将JSON转为字符串存到变量里
        // 用cookie设置缓存
        this.setcookie("password", this.password, 7);
        this.setcookie("username", this.username, 7);

        const loginUrl = "http://localhost:3000/Login";
        var params = new URLSearchParams();
        params.append("username", this.username);
        params.append("password", this.password);

        this.$axios({
          method: "post",
          url: loginUrl,
          data: params
        })
          .then(res => {
            window.console.log(res);
            if (res.status === 200) {
              if (res.data == 2) {
                this.tishi = "用户名或密码错误";
                this.showTishi = true;
                this.username = "";
                this.password = "";
                setTimeout(
                  function() {
                    this.tishi = "";
                  }.bind(this),
                  1000
                );
              } else {
                this.tishi = "登录成功";
                this.showTishi = true;
                this.username = "";
                this.password = "";
                setTimeout(
                  function() {
                    this.$router.push({ path: "/main/home", query: { id: 1 } });
                    this.tishi = "";
                  }.bind(this),
                  500
                ); // 这是1秒延迟跳转
              }
            }
          })
          .catch(function(error) {
            window.console.log(error);
          });
      }
    },
    register() {
      if (
        this.newUsername === "" ||
        this.newPassword === "" ||
        this.newtel === ""
      ) {
        this.tishi = "请输入用户名、手机号或密码";
        this.showTishi = true;
      } else {
        const registerUrl = "http://localhost:3000/register";
        var params = new URLSearchParams();
        params.append("username", this.newUsername);
        params.append("password", this.newPassword);
        params.append("repassword", this.renewPassword);
        params.append("tel", this.newtel);
        this.$axios({
          method: "post",
          url: registerUrl,
          data: params
        })
          .then(res => {
            window.console.log(res);
            if (res.status === 200) {
              // 注册成功,1s后跳转到登录
              if (res.data === 1) {
                this.tishi = "用户名、手机号或密码不能为空";
                this.showTishi = true;
              } else if (res.data === 2) {
                this.tishi = "用户名、手机号或密码验证不通过";
                this.showTishi = true;
              } else if (res.data === 3) {
                this.tishi = "两次输入密码不一致";
                this.showTishi = true;
              } else if (res.data === 4) {
                this.tishi = "该用户已被注册";
                this.showTishi = false;
                this.username = "";
                this.password = "";
                this.tel = "";
                setTimeout(
                  function() {
                    this.showRegister = true;
                    this.showLogin = false;
                    this.showTishi = true;
                    this.username = "";
                    this.password = "";
                    this.tel = "";
                  }.bind(this),
                  1000
                ); // 这是1秒延迟跳转
              } else {
                this.tishi = "注册成功";
                this.showTishi = true;
                this.username = "";
                this.password = "";
                this.tel = "";
                // 在登录成功的时候存到token里面
                // this.userToken = "Bearer " + res.data.data.body.token;
                // // 将用户token保存到vuex中
                // this.changeLogin({ Authorization: this.userToken });

                setTimeout(
                  function() {
                    this.showRegister = false;
                    this.showLogin = true;
                    this.showTishi = false;
                  }.bind(this),
                  1000
                ); // 这是1秒延迟跳转
              }
            }
          })
          .catch(function(error) {
            // window.console.log(error);
            return error;
          });
      }
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    }
  }
};
</script>
<style lang="scss" scoped>
label {
  width: 68px;
  display: inline-block;
}
.LoginHeader {
  width: 100%;
  text-align: center;
  margin-bottom: 1.25rem;
  img {
    height: 56px;
    padding-top: 3.125rem;
  }
}
.MessageLogin {
  margin-left: 1.25rem;
  //  width: 21.875rem;
  margin-top: 1.25rem;
  text-align: left;
  color: #999;
  margin-bottom: 1.875rem /* 30/16 */;
  a {
    color: #2395ff;
  }
}
.login-wrap {
  text-align: center;
}
input {
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 17.5rem;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background: #4cd96f;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 2.5rem;
}
span {
  cursor: pointer;
}
span:hover {
  color: #41b883;
}
</style>
