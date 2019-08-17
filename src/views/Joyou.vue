<template>
  <div class="joyou">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="weapp-nav" slot="right" @click="onClickRight" />
    </van-nav-bar>
    <div>
      <div class></div>
      <div></div>
    </div>

    <h1>9.9 包邮</h1>
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
      ok: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(1); //后退上一步
    },
    onClickRight() {
      this.ok = !this.ok;
      // console.log(this.ok)
    }
  }
};
</script>
<style lang="scss">
</style>
