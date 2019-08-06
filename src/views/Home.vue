<template>
  <div class="home">
    <div id="searchh">
      <!-- 搜索 -->
      <van-search
        v-model="value"
        placeholder="输入商品名或粘贴宝贝标题搜索"
        show-action
        shape="round"
        @search="onSearch"
        background
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <!-- 宫格  -->
    <van-grid :border="false" class="nav">
      <van-grid-item v-for="(k,index) in kingkongList" :key="index" :text="k.mame" />
    </van-grid>

    <!-- 滚动条div -->
    <div class="overflow_min">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(k,index) in img" :key="index">
          <img :src="k.imges" alt class="lbtimg" />
        </van-swipe-item>
      </van-swipe>
      <!-- 动态gif -->
      <div class="row-s">
        <a href="###">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01KsbS052JJhxnQEOzc_!!2053469401.gif"
            alt
          />
        </a>
      </div>

      <!-- 宫格 每日疯抢 -->
      <van-grid :border="false" :column-num="5" class="home_nav">
        <van-grid-item
          v-for="(k,index) in homeNav"
          :key="index"
          :text="k.name"
          :icon="k.imgess"
          @click="navTo('homeNav')"
        />
      </van-grid>

      <!--  优惠头条-->
      <div class="home_ant_express">
        <div class="express_left">
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN012JJhrsTXsatcg9H-2053469401.gif"
            alt
          />
        </div>

        <!-- 轮播 -->
        <div class="express_lbt">
          <van-swipe
            style="height: 60px; width: 310px;"
            vertical
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item>
              <div class="express_center">
                <p class="name">
                  <span class="name_span1">好货限秒</span>
                  <span class="name_span2">小迷糊旅行装三件套+面膜1片</span>
                </p>
                <p class="tab">
                  <span>9.9秒杀</span>
                  <span>玻尿酸5D补水</span>
                  <span>10点开抢</span>
                </p>
              </div>
              <div class="express_right">
                <img
                  src="https://img.alicdn.com/imgextra/i2/752144829/O1CN01UUEBCq1lXj9NCbGdo_!!752144829.jpg_310x310.jpg"
                  alt
                />
              </div>
            </van-swipe-item>

            <van-swipe-item>
              <div class="express_center">
                <p class="name">
                  <span class="name_span1">精选单品</span>
                  <span class="name_span2">蒸尚美黄家蒸笼蒸屉加深</span>
                </p>
                <p class="tab">
                  <span>深柳杉木</span>
                  <span>前一千名</span>
                  <span>半价优惠</span>
                </p>
              </div>
              <div class="express_right">
                <img
                  src="https://img.alicdn.com/imgextra/i2/2228461886/TB2Y7tGwMmTBuNjy1XbXXaMrVXa_!!2228461886-0-item_pic.jpg"
                  alt
                />
              </div>
            </van-swipe-item>

            <van-swipe-item>
              <div class="express_center">
                <p class="name">
                  <span class="name_span1">精选单品</span>
                  <span class="name_span2">福临门压榨玉米油5.436L</span>
                </p>
                <p class="tab">
                  <span>限量第2件半价</span>
                  <span>淘抢购</span>
                </p>
              </div>
              <div class="express_right">
                <img
                  src="https://gju1.alicdn.com/tps/i2/O1CN015djnXP1E5tlVkKIuA_!!2-juitemmedia.png_310x310.jpg"
                  alt
                />
              </div>
            </van-swipe-item>

            <van-swipe-item>
              <div class="express_center">
                <p class="name">
                  <span class="name_span1">5.9元区</span>
                  <span class="name_span2">富菓乐冰淇淋粉酸奶圣代雪糕粉</span>
                </p>
                <p class="tab">
                  <span>送封口夹</span>
                  <span>送布丁瓶</span>
                  <span>券后5.5元</span>
                </p>
              </div>
              <div class="express_right">
                <img
                  src="https://img.alicdn.com/imgextra/i4/3107943472/O1CN01JbZte31bWDgZNkheh_!!3107943472.jpg"
                  alt
                />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <!-- 9.9 包邮 -->
      <div class="home_ant_list">
        <div class="li1">
          <a href="/index.php?r=nine/wap">
            <h3 style="undefined">9.9包邮</h3>
            <div class="text">近一小时疯抢</div>

            <div class="imglist ant_home_banner" data-type="2" load="true">
              <van-swipe
                :autoplay="3000"
                indicator-color="white"
                style="height: 200px; width: 160px;"
              >
                <van-swipe-item>
                  <img
                    src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01PiU7oZ2JJhxrZppIo_!!2053469401.png"
                    alt
                  />
                </van-swipe-item>

                <van-swipe-item>
                  <img
                    src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN016nIln92JJhxoO8KoY_!!2053469401.png"
                    alt
                  />
                </van-swipe-item>

                <van-swipe-item>
                  <img
                    src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01QWjK2Y2JJhxthI1aj_!!2053469401.png"
                    alt
                  />
                </van-swipe-item>
              </van-swipe>
              <!-- <img
                src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01csHutj2JJhxtlwthC_!!2053469401.png"
                alt
              />-->
            </div>
          </a>
        </div>
        <div class="li2">
          <div class="li2_1">
            <a href="/index.php?r=ddq">
              <h3>咚咚抢</h3>
              <div class="time ant_home_time active">
                <span>10点场</span>
                <i class="iconfont">00:00:00</i>
              </div>

              <div class="imglist ant_home_banner" data-type="3" load="true">
                <p class="active">
                  <img
                    src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01wjiQmv2JJhxqx0z6a_!!2053469401.png"
                    alt
                  />
                </p>
              </div>
            </a>
          </div>

          <div class="li2_2">
            <li class="li3" data-dtk-satc="{desc:'2_短裤特卖',name:'CmsWapWindowEvent'}">
              <a href="/index.php?r=a/t&amp;i=9d04d8314182ccfe">
                <h3>短裤特卖</h3>
                <div class="text">男士短裤19.9元起</div>
                <div class="imglist ant_home_banner">
                  <p class="active">
                    <img
                      src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01YiaXBd2JJhxnoiNAA_!!2053469401.jpg"
                      alt
                    />
                  </p>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
      <!-- 大家都在领 -->
      <div class="home_ant_voucher">
        <h3 class="home_h3 row-s">
          <div class="col-mar">
            <div class="col-12-4 text-left">大家都在领</div>
            <div class="col-12-8 text-right" style>
              <span ui-home-number data-time="2" isload="true">2,926,678</span> 次实时领券
            </div>
          </div>
        </h3>
        <!-- 下面的滑动 -->
        <div id="cms_wap_coupon">
          <ul>
            <li v-for="(k, index) in coupon_cent " :key="index">
              <div class="coupon_cent">
                <div class="cent">
                  <a href="?r=p/d&amp;id=21420868&amp;coupon_site=0" class="img">
                    <img :src="k.imgurl" alt />
                    <p class="text">
                      x
                      {{k.num}}
                      <span>人已领</span>
                      <i>|</i>
                      {{k.coupon}}
                    </p>
                  </a>
                  <p class="name">{{k.name}}</p>
                  <p class="money">
                    <i>¥</i>
                    {{k.price}}
                    <del>{{k.prices}}</del>
                  </p>
                  <p class="progress" data-progress="66">
                    <i :style="{width:k.width}"></i>
                  </p>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <!-- 韩风快时尚-韩都衣舍 -->
      <div class="home_ant_brand">
        <div class="tab">
          <a class="img">
            <img
              src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Y3loxV2JJhvJsPrnm-2053469401.jpg"
            />
          </a>
          <div class="nr">
            <h3 class="bt">韩风快时尚-韩都衣舍</h3>
            <p class="text">夏季清仓 低至2件5折</p>
          </div>
        </div>
        <div class="ant_brand_imgs">
          <div class="befor">
            <div class="cent">
              <a href="?r=p/d&amp;id=21472139&amp;source=mp&amp;brand_site=0" class="img">
                <img
                  src="https://gd3.alicdn.com/imgextra/i3/263817957/O1CN01vWmgDJ28eLzaiO4Qx_!!263817957.jpg_310x310.jpg_.webp"
                  alt
                />
              </a>
              <p class="name">【专区任拍2件】撞色拼接字母印花长袖T恤</p>
              <p class="money">
                <i>¥</i>59
                <del>¥10</del>
              </p>
            </div>
          </div>
          <div class="befor"></div>
          <div class="befor"></div>
        </div>
      </div>

      <!-- gd -->
      <!-- 把底部占的高度 撑起来 -->
      <div class="bf_footer"></div>
    </div>

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
        <span>收藏</span>
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
  </div>
</template>
<script>
export default {
  // name: "home",
  // components: {},
  data() {
    return {
      value: "",
      // 宫格
      kingkongList: [
        {
          mame: "精选"
        },
        {
          mame: "女装"
        },
        {
          mame: "美食"
        },
        {
          mame: "男装"
        }
      ],
      img: [
        {
          imges:
            "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01ADKgQf2JJhxneevRT_!!2053469401.jpg"
        },
        {
          imges:
            "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01GrZZGu2JJhxkJo8Xq_!!2053469401.jpg"
        },
        {
          imges:
            "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01weogbU2JJhxmv0b3s_!!2053469401.jpg"
        },
        {
          imges:
            "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01LL445N2JJhxpsD0p6_!!2053469401.jpg"
        },
        {
          imges:
            "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01CRQpCV2JJhxqwLeUC_!!2053469401.jpg"
        }
      ],
      // 每日疯抢
      homeNav: [
        {
          name: "咚咚抢",
          imgess:
            "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01QYAXDi2JJhxkvlI6C_!!2053469401.png"
        },
        {
          name: "每日半价",
          imgess:
            "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01CVq5x42JJhxmuTiRS_!!2053469401.png"
        },
        {
          name: "疯抢排行",
          imgess:
            "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01SBI3bd2JJhxmuSJ7z_!!2053469401.png"
        },
        {
          name: "折上折",
          imgess:
            "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01900XSG2JJhxkvm60D_!!2053469401.png"
        },
        {
          name: "编辑精选",
          imgess:
            "https://img.alicdn.com/imgextra/i1/2053469401/O1CN017EvpIQ2JJhxinIeeq_!!2053469401.png"
        }
      ],
      //   下拉菜单
      value1: 0,
      menu: [],
      // 大家都在领
      coupon_cent: [
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i1/1672011379/O1CN01CT26B31M3cfSUbINT_!!1672011379.jpg_310x310.jpg_.webp",
          num: "1.3万",
          coupon: "5元券",
          name: "e洁手提自动收口加厚垃圾袋72只",
          price: "14.8",
          prices: "￥19.8",
          width: "66%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i2/2200631204497/O1CN01eDsnAl1j5fcQje8TU_!!2200631204497.jpg_310x310.jpg_.webp",
          num: "4.2万",
          coupon: "1元券",
          name: "发财树富贵竹办公室绿植",
          price: "6.8",
          prices: "￥7.8",
          width: "42%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i2/2069236072/O1CN016hN10s1uj1Sht6IZN_!!2069236072.jpg_310x310.jpg_.webp",
          num: "2.9万",
          coupon: "50元券",
          name: "自发热护膝保暖老人老寒腿",
          price: "5.8",
          prices: "¥55.8",
          width: "29%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i1/1862328308/O1CN01vRYyHu2BF73Y0Rfcv_!!1862328308.jpg_310x310.jpg_.webp",
          num: "5.9万",
          coupon: " 60元券",
          name: "【歌莉娅】潮女双肩包百搭耐看背包书包",
          price: "29",
          prices: "¥89",
          width: "59%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i2/899530677/O1CN01Klphai1Gs6gO8WvHg_!!899530677.jpg_310x310.jpg_.webp",
          num: "1.9万",
          coupon: "15元券",
          name: "半亩花田旗舰店 苦参沐浴露400ml",
          price: "44",
          prices: "¥59",
          width: "19%"
        },
        {
          imgurl:
            "https://img.alicdn.com/bao/uploaded/i4/O1CN011bfNWjHfzBaM2zK_!!0-item_pic.jpg_310x310.jpg_.webp",
          num: "5.2万",
          coupon: "10元券",
          name: "大牌【唇动】营养早餐纯蛋糕整箱680g",
          price: "19.8",
          prices: "¥29.8",
          width: "52%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i2/2819663066/O1CN01RjfMZ81YWGrmnjoC2_!!2819663066.jpg_310x310.jpg_.webp",
          num: "1.8万",
          coupon: " 20元券",
          name: "【72包】爆售3万件洁柔手帕纸",
          price: "27.9 ",
          prices: "¥47.9",
          width: "18%"
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i4/4028248869/O1CN01sjOyMg2FO3FF2MIKQ_!!4028248869.jpg_310x310.jpg_.webp",
          num: "3.3万",
          coupon: "  40元券",
          name: "拖地阔腿破洞牛仔长裤复古坠感",
          price: "39 ",
          prices: "¥79",
          width: "33%"
        }
      ]
    };
  },
  methods: {
    onSearch() {},
    // 编程式导航
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
// scoped
</script>
<style lang="scss" scoped>
#searchh {
  width: 100%;
  height: 45px;
  line-height: 45px;
  position: relative;
  z-index: 5;
  zoom: 1;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  border-bottom-color: transparent;
}
.van-search {
  padding-top: 6px;
  margin: 0 10px 0 10px !important;
  text-align: center;
  font-size: 16px;
  position: relative;
  z-index: 2;
  zoom: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.van-search__content {
  background: #fff;
}

.lbtimg {
  height: 172px;
  width: 100%;
}
</style>


<style lang="scss">
body {
  width: 100%;
  height: 100%;
}
.home {
  // /deep/ .van-grid-item__text {
  //   color: red;
  // }
  background-color: #f5f5f5;
  .nav .van-grid-item {
    height: 40px;
  }
  // main 出现滚动
  .overflow_min {
    overflow: auto;
    // &::webkit-scrollbar {
    //   display: none;
    // }
    // 动态gif
    .row-s {
      a {
        display: block;
        border: 0;
        img {
          width: 100%;
          display: block;
          margin: 0;
          float: left;
        }
      }
    }
    // 每日半价
    .home_nav {
      background-color: #fff;
      padding: 14px 0 0;
      width: 100%;
      .van-grid-item {
        flex-basis: 20%;
        .van-grid-item__content {
          padding: 0;
          .van-image {
            width: 60px;
            height: 60px;
            img {
              width: 60px;
              height: 60px;
            }
          }
        }
        .van-grid-item__text {
          margin-top: 0px;
          font-size: 14px;
          color: #333;
        }
      }
    }
    // 每日疯抢
    .home_ant_express {
      width: 100%;
      height: 75px;
      background-color: #fff;
      background-size: 100% 100%;
      margin-bottom: 5px;
      // position: absolute;
      div {
        float: left;
      }
      .express_left {
        img {
          height: 60px;
          left: 5px;
          position: relative;
          zoom: 1;
          top: 8px;
          z-index: 5;
          width: 60px;
          // padding: 8px 5px;
        }
      }
      .express_lbt {
        width: 310px;
        height: 55px;

        .van-swipe__track {
          width: 100%;

          .express_center {
            width: 230px;
            height: 60px;
            position: relative;
            zoom: 1;
            z-index: 5;
            top: 15px;
            .name {
              .name_span1 {
                display: inline-block;
                width: 50px;
                height: 18px;
                color: #fff;
                background-image: -webkit-linear-gradient(
                  left,
                  rgb(254, 189, 23),
                  rgb(255, 130, 67)
                );
                margin-right: 6px;
                position: relative;
                z-index: 1;
                zoom: 1;
                top: -1px;
                font-size: 12.6px;
                vertical-align: text-bottom;
              }
              .name_span2 {
                display: inline-block;
                width: 163px;
                font-size: 14.7px;
                /* height: 19px; */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666;
                vertical-align: text-bottom;
              }
            }
            .tab {
              height: 20px;
              span {
                border-radius: 2px;
                border: 1px solid rgba(252, 77, 82, 0.9);
                display: inline-block;
                color: rgb(252, 77, 82);
                font-size: 12px;
                padding: 0 4px;
                margin-right: 10px;
                margin-bottom: 5px;
              }
            }
          }
          .express_right {
            height: 68px;
            width: 75px;
            img {
              zoom: 1;
              right: 0;
              height: 68px;
              display: block;
              z-index: 0;
              top: 0;
            }
          }
        }
      }
      // &  万能清除浮动
    }

    // 9.9包邮
    .home_ant_list {
      height: 200px;
      margin-bottom: 5px;
      border: 5px solid #fff;
      .li1 {
        box-sizing: border-box;
        width: 40%;
        height: 200px;
        position: relative;
        z-index: 1;
        zoom: 1;
        float: left;
        overflow: hidden;
        background: #f9f9f9;
        border-right: solid 2px #fff;
        h3 {
          font-size: 1.1rem;
          font-weight: 400;
          color: #ff566f;
          margin-bottom: 4px;
        }
        .text {
          font-size: 12px;
          color: #ff566f;
        }
        .imglist {
          position: absolute;
          bottom: 0;
          z-index: -1;
          .van-swipe {
            .van-swipe-item {
              text-align: center;
              img {
                width: 100%;
                height: 200px;
                position: absolute;
                z-index: -1;
                zoom: 1;
                right: 0;
                bottom: 0;
              }
            }
          }
        }
      }
      .li2 {
        float: left;
        width: 60%;
        .li2_1 {
          width: 100%;
          box-sizing: border-box;
          height: 100px;
          border-bottom: solid 2px #fff;
          position: relative;
          z-index: 1;
          zoom: 1;
          float: left;
          overflow: hidden;
          background: #f9f9f9;
          text-align: left;
          a {
            display: block;
            padding: 7px 0 0 9.8px;
            z-index: 50;
            h3 {
              font-size: 15.4px;
              font-weight: 400;
              color: #ff566f;
              margin-bottom: 4px;
            }
            .time {
              height: 20px;
              position: relative;
              z-index: 1;
              zoom: 1;
              top: 2px;
              border: 1px solid #fc4d52;
              border-radius: 30px;
              text-align: center;
              display: inline-block;
              span {
                background: #fc4d52;
                color: #fff;
                padding: 0 9.8px;
                border-radius: 8px;
                height: 20.18px;
                line-height: 20.18px;
                font-size: 12px;
                float: left;
              }
              i {
                padding: 0 7px;
                color: #fc4d52;
                height: 20.18px;
                line-height: 20.18px;
                font-size: 12px;
                float: left;
              }
            }
            .ant_home_banner {
              right: 0;
              z-index: -1;
              height: 100%;
              width: 100%;
              position: absolute;
              zoom: 1;
              bottom: 0;
              p {
                img {
                  max-width: 100%;
                  max-height: 100px;
                  position: absolute;
                  z-index: 1;
                  zoom: 1;
                  right: 0;
                  bottom: 0;
                }
              }
            }
          }
        }
        .li2_2 {
          height: 100px;
          width: 100%;
          list-style-type: none;
          box-sizing: border-box;
          height: 100px;
          border-bottom: solid 2px #fff;
          position: relative;
          z-index: 1;
          zoom: 1;
          float: left;
          overflow: hidden;
          background: #f9f9f9;
          text-align: left;
          a {
            display: block;
            padding: 7px 0 0 9.8px;
            z-index: 50;

            h3 {
              font-size: 15.4px;
              font-weight: 400;
              color: #ff566f;
              margin-bottom: 4px;
            }
            .text {
              /* height: 20px; */
              position: relative;
              z-index: 1;
              zoom: 1;
              top: 2px;
              color: rgb(212, 0, 255);
              display: inline-block;
              height: 20.18px;
              line-height: 20.18px;
              font-size: 12px;
            }
            .ant_home_banner {
              right: 0;
              z-index: -1;
              height: 100%;
              width: 100%;
              position: absolute;
              zoom: 1;
              bottom: 0;
              p {
                img {
                  max-width: 100%;
                  max-height: 100px;
                  position: absolute;
                  z-index: 1;
                  zoom: 1;
                  right: 0;
                  bottom: 0;
                }
              }
            }
          }
        }
      }
    }

    //大家都在领
    .home_ant_voucher {
      margin-bottom: 5px;
      background-color: #fff;
      background-size: 100% 100%;
      overflow: hidden;
      position: relative;
      z-index: 0;
      .home_h3 {
        padding-bottom: 0;
        padding: 14px 0;
        font-size: 14px;
        font-weight: 400;
        clear: both;
        .col-mar {
          margin: 0 14px;

          .text-left {
            width: 33.33333333%;
            font-size: 15.4px;
            line-height: 22.4px;
            float: left;
            &:before {
              content: "";
              float: left;
              top: 0.35rem;
              position: relative;
              z-index: 1;
              zoom: 1;
              width: 3px;
              height: 12px;
              background: linear-gradient(to top, #ff5d06 0, #fc3f78 100%);
              margin-right: 7px;
            }
          }
          .text-right {
            position: relative;
            z-index: 1;
            zoom: 1;
            top: -2.8px;
            color: #aaa;
            font-size: 12px;
            line-height: 22.4px;
            float: right;
            span {
              font-size: 15.4px;
              color: #fc4d52;
              position: relative;
              z-index: 1;
              zoom: 1;
            }
          }
        }
      }

      #cms_wap_coupon {
        margin: 0 auto;
        margin-bottom: 5px;
        padding: 7px 5px 10px 10px;
        position: relative;
        overflow: auto;
        z-index: 1;
        height: 220px;
        width: 400px;
        &::-webkit-scrollbar {
          display: none;
        }
        ul {
          width: 400px;
          height: 100%;
          display: flex;
          margin-right: 30px;
          li {
            float: left;
            display: block;
            flex-shrink: 0;
            width: 40%;
            height: 100%;
            position: relative;
            margin-right: 5px;
            height: 100%;
            border-radius: 8px;
            // background: #000;
            .coupon_cent {
              margin-right: 5px;
              height: 100%;
              display: block;
              .cent {
                padding: 10px 10px 0;
                border-radius: 8px 8px 0 0;
                box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
                position: relative;
                z-index: 1;
                zoom: 1;
                .img {
                  display: block;
                  position: relative;
                  zoom: 1;
                  z-index: 1;
                  img {
                    width: 100%;
                    display: block;
                  }
                  .text {
                    position: absolute;
                    zoom: 1;
                    z-index: 10;
                    bottom: 0;
                    left: -4px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    border-radius: 5px;
                    background: rgba(254, 92, 158, 0.98);
                    color: #fff;
                    padding: 3px 4px;
                    font-size: 12px;
                    text-align: center;
                    span {
                      font-size: 12px;
                      color: #fff;
                    }
                  }
                }
                .name {
                  line-height: 28px;
                  font-size: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding: 0;
                  margin: 0;
                }
                .money {
                  color: #fc4d52;
                  font-size: 16.8px;
                  padding-bottom: 10px;
                  i {
                    font-style: normal;
                    font-size: 12px;
                    margin-right: 3px;
                  }
                  del {
                    color: #bbb;
                    font-size: 14px;
                  }
                }
                .progress {
                  position: absolute;
                  z-index: 1;
                  zoom: 1;
                  left: 0;
                  bottom: 0;
                  overflow: hidden;
                  height: 3px;
                  background-color: #ffd6ec;
                  width: 100%;
                  i {
                    display: block;
                    height: 3px;
                    overflow: hidden;
                    background-color: #ff66b7;
                    transition: all 1s ease 0s;
                    transform-origin: center;
                  }
                }
              }
            }
          }
        }
      }
    }

    //韩风快时尚-韩都衣舍
    .home_ant_brand {
      margin-bottom: 10px;
      background-image: url(https://img.alicdn.com/imgextra/i3/2053469401/O1CN01lbsiIH2JJhvJUuiGV-2053469401.jpg);
      background-size: 100% auto;
      background-color: #fff;
      overflow: hidden;
      position: relative;
      z-index: 0;
      height: 260px;
      .tab {
        height: 90px;
        a {
          float: left;
          position: relative;
          z-index: 1;
          zoom: 1;
          top: 10.3px;
          left: 10px;
          background-color: #fff;
          border-radius: 5px;
          width: 70px;
          height: 70px;
          img {
            width: 70px;
            height: 70px;
          }
        }
        .nr {
          margin-left: 101px;
          color: #fff;
          line-height: 35px;
          padding-top: 10px;
          text-align: left;
          .bt {
            color: rgb(51, 51, 51);
            font-size: 17px;
          }
          .text {
            color: rgb(51, 51, 51);
            font-size: 14px;
          }
        }
      }
      .ant_brand_imgs {
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        padding: 0.5rem 5px 10px 10px;
        padding-top: 10px;
        border-radius: 12px;
        padding-bottom: 0;
        margin-bottom: 0;
        background-color: #fff;
        height: 170px;
        width: 101%;
        div {
          width: 125px;
          height: 160px;
          float: left;
          position: relative;
          .cent {
            box-shadow: none;
            padding: 0;
            margin-right: 10%;
            border-radius: 8px 8px 0 0;
            position: relative;
            z-index: 1;
            zoom: 1;
            width: 108px;
            height: 160px;
            a {
              display: block;
              position: relative;
              zoom: 1;
              z-index: 1;
              border-radius: 5px;
              img {
                width: 100%;
                display: block;
                border-radius: 5px;
              }
            }
            .name {
              line-height: 28px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .money {
              padding-bottom: 5px;
            }
          }
        }
        .befor::before {
          content: "";
          height: 95%;
          width: 1px;
          overflow: hidden;
          background: #eee;
          position: absolute;
          z-index: 1;
          zoom: 1;
          right: 6%;
          top: 0;
        }
      }
    }

    // mian 撑起底部的高度
    .bf_footer {
      height: 50px;
    }
  }

  // 底部
  #footer {
    position: fixed;
    zoom: 1;
    z-index: 110;
    left: 0;
    bottom: 0;
    width: 100%;
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
}
</style>

