<template>
  <div id="zc">
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box">
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          @input="datavalue"
          left-icon="phone-circle-o"
          right-icon="question-o"
          placeholder="请输入手机号"
          :error-message="errorMessage"
          @click-right-icon="$toast('question')"
        />
        <van-cell-group>
          <van-field v-model="sms" center clearable placeholder="请输入短信验证码" left-icon="passed">
            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
          </van-field>
        </van-cell-group>

        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
          right-icon="closed-eye"
          left-icon="goods-collect-o"
        />
      </van-cell-group>
      <div class="button">
        <van-button type="primary" size="large" @click="onzc">注册</van-button>
      </div>
      <div class="col_mar">
        点击“注册”表示您已同意
        <a href="/index.php?r=user/agreement" class="col-link">《LOL白菜用户协议》</a>
      </div>
    </div>
    <footer class="login_footer text-center">
      已有账号？点击
      <a @click="onClickRight" class="col-link">登录</a>
    </footer>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      sms: "",
      errorMessage: "",
      ok: ""
    };
  },
  methods: {
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
    },

    async onzc() {
      // console.log(zc);

      if (this.ok) {
        console.log(233);

        const res = await this.$axios.post("http://localhost:3000/zcname", {
          name: this.username,
          pws: this.password
        });
        let data = res.data;
        if (data == 1) {
          // 该账号以存在
          console.log("该账号以存在");
        } else {
          // 注册成功
          // console.log("注册成功");
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
      this.$router.push("./dl");
    }
  }
};
</script>


<style lang="scss">
#zc {
  .box {
    margin-top: 75px;
    .van-button--primary {
      color: #fff;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 20px;
      .van-button__text {
        color: #666;
        font-size: 12px;
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
      .van-button--large {
        width: 100%;
        height: 43px;
        line-height: 43px;
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
    font-size: 14px;
    a {
      color: #1991eb;
    }
  }
}
</style>
