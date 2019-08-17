<template>
  <div id="dl">
    <van-nav-bar title="登陆" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box">
      <van-cell-group>
        <van-field
          v-model="username"
          @input="datavalue"
          clearable
          left-icon="phone-circle-o"
          right-icon="question-o"
          placeholder="请输入手机号"
          :error-message="errorMessage"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
          right-icon="closed-eye"
          left-icon="goods-collect-o"
        />
      </van-cell-group>
      <div class="button">
        <van-button type="primary" size="large" @click="ondl">登陆</van-button>
      </div>
      <div class="col_mar">
        还没有账号？立即
        <a class="col-link" @click="onClickRight">注册</a>
      </div>
    </div>

    <footer class="login_footer text-center">
      <a href="/index.php?r=login/login&amp;type=code" class="col-aaa">验证码登录</a>
      <span class="col-hr">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a href="/index.php?r=login/findpw" class="col-aaa">找回密码</a>
    </footer>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      username: "",
      password: "",
      errorMessage: "",
      ok: ""
    };
  },
  methods: {
    async ondl() {
      if (this.ok) {
        const res = await this.$axios.post("http://localhost:3000/dlname", {
          name: this.username,
          pws: this.password
        });
        let data = res.data;
        if (data == 0) {
          // 账号密码错误
          console.log(22);
        } else {
          // 账号密码成功

          let row = {
            username: this.username
          };
          this.$store.commit("setData", row);
          this.$router.push({
            name: "my"
          });
        }
      } else {
        this.errorMessage = "手机号码错误";
      }
      this.username = "";
      this.password = "";
    },
    onClickLeft() {
      this.$router.back(1);
    },
    onClickRight() {
      this.$router.push("./zc");
    },
    datavalue() {
      // console.log(this.username);
      let data = this.username;

      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(data)) {
        this.errorMessage = "手机号码错误";
        this.ok = false;
      } else {
        this.errorMessage = "";
        this.ok = true;
      }
    }
  }
};
</script>


<style lang="scss">
#dl {
  .box {
    margin-top: 75px;
    .button {
      background-color: #eee;
      width: 319px;
      margin-left: 16px;
      margin-top: 21px;
      border-radius: 12px;
      .van-button {
        background-color: #eee;
        border: 1px solid #eee;
        color: #000;
        border-radius: 12px;
      }
    }
    .col_mar {
      text-align: left;
      font-size: 14px;
      margin-left: 16px;
      margin-top: 14px;
      a {
        color: #1991eb;
      }
    }
  }
  .login_footer {
    position: absolute;
    zoom: 1;
    top: 85vh;
    left: 0;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    line-height: 5rem;
    color: #aaa;
    z-index: 150;
    a {
      color: #aaa;
    }
    span {
      color: #eee;
    }
  }
}
</style>
