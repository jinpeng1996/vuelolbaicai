<template>
  <div class="my">
    <div class="user_center_info">
      <div class="info">
        <div class="info_img">
          <img
            src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/user.png?v=201908021647"
            alt
          />
        </div>

        <div class="user_type">
          <span id="user_login" class="user_login" v-show="ok">
            <a @click="onClickLeft">登录</a>/
            <a @click="onClickRight">注册</a>
          </span>
          <span id="user_login" class="user_login" v-show="!ok">
            <a v-text="username"></a>
          </span>
        </div>
        <div class="else">
          <a class="set" href="/index.php?r=user/setuser">
            <img
              src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/user_icon_set.svg?v=201908021647"
              alt
            />
          </a>
        </div>
      </div>
      <div class="user_me_1">
        <van-grid :border="false" :column-num="3">
          <van-grid-item
            v-for="(k,index) in kingkongList"
            :key="index"
            :icon="k.icon"
            :text="k.mame"
          />
        </van-grid>
      </div>

      <div class="common_tools">
        <p class="title">常用工具</p>
        <div class="tools">
          <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="(k,index) in tools" :key="index" :icon="k.icon" :text="k.mame" />
          </van-grid>
        </div>
      </div>
    </div>

    <!-- 把底部占的高度 撑起来 -->
    <div class="bf_footer"></div>

    <!-- 底部 -->
    <div id="footer">
      <router-link to="/">
        <i class="iconfont">
          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png"
          />
        </i>
        <span>首页</span>
      </router-link>
      <router-link to="/joyou">
        <i class="iconfont">
          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/TB23GLTn77mBKNjSZFyXXbydFXa-2053469401.png"
          />
        </i>
        <span>9.9包邮</span>
      </router-link>
      <router-link to="/about">
        <i class="iconfont">
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/TB2nLTXn7omBKNjSZFqXXXtqVXa-2053469401.png"
          />
        </i>
        <span>分类</span>
      </router-link>
      <router-link to="/collection">
        <i class="iconfont">
          <img
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB26bEfnQZmBKNjSZPiXXXFNVXa-2053469401.png"
          />
        </i>
        <span>订单</span>
      </router-link>
      <router-link to="/my">
        <i class="iconfont">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.pnghttps://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.png"
          />
        </i>
        <span>我的</span>
      </router-link>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      ok: true,
      username: "",
      // 宫格
      kingkongList: [
        {
          mame: "我的订单",
          icon: "todo-list-o"
        },
        {
          mame: "我的收藏",
          icon: "like-o"
        },
        {
          mame: "我的足迹",
          icon: "flag-o"
        }
      ],
      tools: [
        {
          mame: "领券帮助",
          icon:
            "https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools1.png?v=201908021647"
        },
        {
          mame: "意见反馈",
          icon:
            "https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools4.png?v=201908021647"
        },
        {
          mame: "下载APP",
          icon:
            "https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools7.png?v=201908021647"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("dl");
    },
    onClickRight() {
      this.$router.push("zc");
    }
  },
  created() {
    // 从仓库 拿去东西
    let username = this.$store.state.username;
    this.username = username;
    console.log(username);
    if (username == "") {
      this.ok = true;
    } else {
      this.ok = false;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
.my {
  background: #f5f5f5;
  height: 100%;
}

.my .user_center_info {
  width: 100%;
  height: 366px;
  background: url(https://cmsstatic.dataoke.com//wap_new/user/images/user_bg.png?v=2019-08-02)
    no-repeat;
  background-size: 100% 195px;
  overflow: hidden;
  .info {
    width: 100%;
    height: 66px;
    box-sizing: border-box;
    padding-left: 15px;
    position: relative;
    z-index: 1;
    zoom: 1;
    margin-top: 16px;
    .info_img {
      height: 65px;
      width: 65px;
      border-radius: 50%;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
      zoom: 1;
      float: left;
      img {
        height: 65px;
        width: 65px;
        border-radius: 50%;
        display: block;
        position: absolute;
        z-index: 1;
        zoom: 1;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        margin: auto;
      }
    }
    .user_type {
      float: left;
      width: 60%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: 4.7rem;
      line-height: 4.7rem;
      margin-left: 0.7rem;
      text-align: left;
      span {
        color: #fff;

        a {
          color: #fff;
          font-weight: 500;
          font-size: 20px;
          font-family: PingFangSC-Medium;
        }
      }
    }
    .else {
      position: absolute;
      zoom: 1;
      right: 0;
      top: 0;
      z-index: 10;
      color: #fff;
    }
  }
}

.my .user_me_1 {
  height: 93px;
  width: 355px;
  margin: auto;
  margin-top: 23px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  .van-grid {
    height: 93px;
    border-radius: 10px;
    .van-grid-item__content {
      background: none;
    }
  }
}
.common_tools {
  background: #fff;
  box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.09);
  border-radius: 6px;
  height: 128px;
  width: 355px;
  margin: auto;
  margin-top: 15px;
  .title {
    height: 35px;
    border-bottom: 1px solid #eee;
    line-height: 35px;
    padding-left: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333;
    text-align: left;
  }
}
// mian 撑起底部的高度
.my .bf_footer {
  height: 50px;
}
// 底部
.my #footer {
  position: fixed;
  zoom: 1;
  z-index: 110;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  a {
    display: inline-block;
    width: 20%;
    color: #666;
    text-align: center;
    font-size: 12px;
    padding: 3px 0 2px;
    position: relative;
    z-index: 1;
    zoom: 1;
    line-height: 20px;
    i {
      display: block;
      color: #666;
      font-size: 24px;
      img {
        width: auto;
        height: 24px;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
