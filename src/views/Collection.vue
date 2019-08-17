<template>
  <div id="collection">
    <div class="top">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        right-text="编辑"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="over">
      <div class="main" v-for="(k, index) in cartlist " :key="index">
        <van-checkbox v-model="k.danxuan" class="check" @change="singleChecked(k.danxuan,index)"></van-checkbox>
        <van-card :num="k.num" :price="k.jiage" :title="k.name" :thumb="k.pic" class="item">
          <div slot="tags">
            <van-tag plain type="danger">{{k.quanJine}}</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini" @click="add(k)">+</van-button>
            <van-button size="mini" @click="red(k)">-</van-button>
          </div>
        </van-card>
      </div>
    </div>
    <!-- 下面的 结算 定位在底部 -->
    <div class="Settlement">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox
          :class="checkAll?'icon-checkboxround1':'icon-checkboxround0' "
          :v-model="checkAll"
          @click="choiceAll"
        >全选</van-checkbox>
      </van-submit-bar>
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
      checked: true,
      cartlist: [],
      checkAll: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    onClickRight() {},
    onSubmit() {},
    // 数量的加减
    add(k) {
      k.num++;
    },
    red(k) {
      if (k.num == 1) {
        k.num = 1;
      } else {
        k.num--;
      }
    },
    singleChecked(checked, index) {
      console.log(checked, index);
    },
    choiceAll(checkAll) {
      this.checkAll = !this.checkAll;
      // if (this.checkAll) {
      //   for (let val of this.cart) {
      //     val["danxuan"] = true;
      //   }
      // } else {
      //   for (let val of this.cart) {
      //     val["danxuan"] = false;
      //   }
      // }
    }
  },
  async created() {
    // 获取购物车 数据
    let datalist = await this.$axios("http://localhost:3000/cartlist");
    // console.log(datalist);
    this.cartlist = datalist.data; //列表数据
    console.log(this.cartlist);

    // console.log("http://localhost:3000/details/" + id);
  }
};
</script>

<style lang="scss">
#collection {
  .van-submit-bar {
    position: fixed;
    bottom: 50px;
  }
  .over {
    margin-bottom: 50px;
    overflow: auto;
    .main {
      width: 100%;
      display: flex;
      .check {
        width: 10%;
      }
      .item {
        flex: 1;
        .van-card__footer {
          text-align: right;
          div {
            display: inline-block !important;
            // display: !important;
            // display: !important;
          }
        }
      }
    }
  }
  .Settlement {
    position: fixed;
    bottom: 49px;
    width: 100%;
    height: 50px;
    background-color: #fff;
    .van-submit-bar {
      opacity: 1;
    }
  }
}
</style>


<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
// mian 撑起底部的高度
.bf_footer {
  height: 50px;
}
// 底部
#footer {
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
