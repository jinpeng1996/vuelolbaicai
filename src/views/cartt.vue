<template>
  <div class="sort-page">
    <div class="home">
      <!-- top ; -->
      <header-vue></header-vue>
      <div class="home-content wrapper" ref="wrapper">
        <!-- 滚动 -->
        <div class="content">
          <ul style="min-height:900px; border:1px solid red;" class="checkBox-con">
            
            <li :v-for="(item,index) in cart">
              <!-- <van-checkbox-group v-model="result"> -->

              <!-- Card  -->
              <van-checkbox
                v-model="item.danxuan"
                class="checkedBox"
                @change="singleChecked(item.danxuan,index)"
              ></van-checkbox>
              <van-card
                :title="item.pro_title"
                desc="描述"
                :num="item.buyNum"
                :price="item.pro_price"
                :thumb="imageURL"
              >
                <div slot="footer">
                  <!-- <van-button size="mini">按钮</van-button> -->

                  <span
                    class="xiaoji"
                  >小计:{{(parseFloat(item.pro_price)*parseFloat(item.buyNum)).toFixed(2)}}</span>
                  <span>
                    <van-stepper v-model="item.buyNum" />
                  </span>
                </div>
              </van-card>

              <!-- <div class="change-number">容器</div> -->
              <!-- </van-checkbox-group> -->
            </li>
          </ul>
        </div>
      </div>

      <div class="tijiao">
        <p class="checkAll">
          <i
            class="iconfont checkAllBtn"
            :class="checkAll?'icon-checkboxround1':'icon-checkboxround0' "
            :v-model="checkAll"
            @click="choiceAll"
          >全选</i>
        </p>
        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
      </div>
    </div>
    <!-- ; -->
    <!-- <bottom-nav></bottom-nav> -->
    <router-view />
  </div>
</template>
<script>
// import BScroll from "better-scroll";
// import HeaderVue from "../../components/common/header/Header.vue";

// import { Card, Checkbox, CheckboxGroup, SubmitBar, Stepper } from "vant";
export default {
  // name: "HelloWorld",
  // components: {
  //   HeaderVue,
  //   [Card.name]: Card,
  //   [Checkbox.name]: Checkbox,
  //   [CheckboxGroup.name]: CheckboxGroup,
  //   [SubmitBar.name]: SubmitBar,
  //   [Stepper.name]: Stepper
  // },
  data() {
    return {
      msg: "Welcome to Home.vue App sss",
      imageURL: "ss",
      result: [1, 1],
      checked: null,
      checkAll: true,
      cart: "",
      total: 0
    };
  },
  mounted() {
    // 初始化
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true //
    });
    this.getDetail();
  },
  methods: {
    getDetail: function() {
      let sum = 0;

      let cart = JSON.parse(window.localStorage.getItem("cartLocal"));

      // 价格:
      for (let value of cart) {
        console.log(value);
        value["danxuan"] = true;
        sum += value.pro_price * value.buyNum;
      }
      this.total = sum * 100;

      this.cart = cart;
      // 让checked 等于购物车里的商品种类
      this.checked = cart.length;
    },

    singleChecked: function(checked, index) {
      let p =
        parseFloat(this.cart[index]["pro_price"]) *
        parseFloat(this.cart[index]["buyNum"]);

      if (!checked) {
        this.checked -= 1;
        this.cart[index].danxuan = false;
        this.total -= p * 100;
      } else {
        this.checked += 1;
        this.cart[index].danxuan = true;
        this.total += p * 100;
      }
      console.log("this.checked = " + this.checked);
      // 判断checked的值是否还等于商品种类数目，
      if (this.checked == this.cart.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    choiceAll: function(checkAll) {
      this.checkAll = !this.checkAll;
      if (this.checkAll) {
        for (let val of this.cart) {
          val["danxuan"] = true;
        }
      } else {
        for (let val of this.cart) {
          val["danxuan"] = false;
        }
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  width: 100%;
  height: 92vh;
}
.header {
  width: 100%;
  height: 6vh;
  border-bottom: 1px solid #ddd;
}
.home-content {
  height: 86vh;
  border: 1px solid #000;
  overflow: hidden;
}
/* checkBox-con */
.checkBox-con {
  padding: 0.6rem;
}
.checkBox-con li {
  /*position: relative;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*vant框架修改样式*/

.van-card {
  width: 85%;
  /*background-color: #fff;*/
}
.van-card__footer > div {
  display: flex !important;
  align-items: center;
  justify-content: space-around;
}

/* end of vant框架修改样式============over========*/
/* tijiao 提交订单按钮组*/
.tijiao {
  display: flex;
  align-items: center;
  position: relative;
}
.xiaoji {
  padding: 0 0.6rem;
  font-size: 0.8rem;
}
.checkAll {
  display: block;
  height: 50px;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  z-index: 2555;
}
.checkAllBtn {
  /*line-height: */
  font-size: 1.1rem;
}
.icon-checkboxround1 {
  /*line-height: */
  font-size: 1.1rem;
  color: #06bf04;
}

/*.van-submit-bar*/
.van-submit-bar {
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: 0.3;
}
</style>
