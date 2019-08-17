<template>
  <div id="homeNav">
    <div class="header_pr">
      <!-- 头部 -->
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <van-image
          width="136"
          height="30"
          src="https://cmsstatic.dataoke.com//wap_new/ranking/images/title.svg?v=201908021647"
          slot="title"
        />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
    </div>
    <!-- 导航条 -->
    <div class="ranking_nav_tab">
      <ul class="ui-swiper">
        <li class="li_swiper" v-for="(k, index) in kingkongList " :key="index">
          <a href>{{k.dataa}}</a>
        </li>
      </ul>
    </div>
    <!-- 列表 -->
    <div class="overflow_auto">
      <ul class="ranking_ullit">
        <li v-for="k in goodsList " :key="k.id" @click="toDetails(k.id)">
          <a class="img">
            <img class="lazy" :src="k.pic" alt />
          </a>
          <div class="text">
            <a>
              <h3>{{k.dtitle}}</h3>
            </a>
            <a>
              <p class="nr">
                近2小时疯抢
                <span>{{k.salesNum}}</span>件
                <br />
                <font>天猫价: ¥{{k.yuanjia}}</font>
              </p>
            </a>
            <div class="button">
              <span class="money">
                <i>券后价 ¥</i>
                {{k.jiage}}
              </span>
              <a href="/index.php?r=p/d&amp;id=21510846">立即抢</a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      // 宫格
      kingkongList: [
        {
          dataa: "实时榜"
        },
        {
          dataa: "全天榜"
        },
        {
          dataa: "居家日用"
        },
        {
          dataa: "美食"
        },
        {
          dataa: "母婴"
        },
        {
          dataa: "美妆"
        },
        {
          dataa: "女装"
        },
        {
          dataa: "数码家电"
        },
        {
          dataa: "文娱车品"
        },
        {
          dataa: "内衣"
        },
        {
          dataa: "家装家纺"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    toDetails(id) {
      this.$router.push({ name: "details", params: { id } });

      // this.$router.push({ path: "./details", query: { id } });

      // console.log(id);
    }
  },
  async created() {
    // 获取列表页数据
    let goodsList = await this.$axios("http://localhost:3000/list/data");
    // console.log(goodsList);
    this.goodsList = goodsList.data; //列表数据
  }
};
</script>


<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#homeNav {
  overflow: hidden;
  .header_pr {
    background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
    position: fixed;
    z-index: 160;

    height: 46px;
    width: 100%;
    .van-nav-bar {
      background: none;
      .van-nav-bar__left {
        .van-icon {
          color: #fff;
          font-size: 22px;
        }
      }
      .van-nav-bar__right {
        .van-icon {
          color: #fff;
          font-size: 30px;
        }
      }
      .van-nav-bar__title {
        .van-image {
          margin-top: 9px;
        }
      }
    }
    .van-hairline--bottom::after {
      border-bottom-width: 0;
    }
  }
  .ranking_nav_tab {
    height: 44px;
    z-index: 80;
    zoom: 1;
    background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
    position: fixed;
    top: 46px;
    width: 100%;
    text-align: center;
    transform-origin: center;
    padding-right: 0;
    overflow: auto;
    // position: relative;
    z-index: 13;
    &::-webkit-scrollbar {
      display: none;
    }
    .ui-swiper {
      transform: translate3d(0px, 0px, 0px);
      transition-duration: 0ms;
      height: 44px;
      text-align: center;
      position: relative;
      z-index: 50;
      zoom: 1;
      display: flex;
      .li_swiper {
        display: block;
        width: auto;
        line-height: 44px;
        margin: auto;
        // overflow: hidden;
        flex-shrink: 0;
        height: auto;
        a {
          color: #fff;
          font-size: 16px;
          position: relative;
          z-index: 0;
          display: block;
          zoom: 1;
          padding: 0 2px;
          margin: 0 8px;
          text-align: center;
          height: 33px;
          line-height: 33px;
        }
      }
    }
  }

  .overflow_auto {
    overflow: auto;
    margin: auto;
    max-width: 750px;
    position: relative;
    z-index: 5;
    margin-top: 90px;
    &::-webkit-scrollbar {
      display: none;
    }
    .ranking_ullit {
      padding-top: 10px;
      background: #f5f5f5;
      li {
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        margin: 0 10px 10px;
        background: #fff;
        list-style-type: none;
        margin-left: 0;
        margin-right: 0;
        border-radius: 0;
        box-shadow: 1px 1px 1px #eee;
        padding-left: 0;
        margin-bottom: 5px;
        padding: 10px;
        height: 140px;
        .img {
          width: 120px;
          height: 120px;
          position: relative;
          z-index: 0;
          float: left;
          background: #f5f5f5;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
          }
        }
        .text {
          padding: 0 0 0 110px;
          padding-left: 130px;
          height: 120px;
          text-align: left;
          h3 {
            color: #333;
            line-height: 30px;
            margin: 0;
            overflow: hidden;
            font-size: 14px;
            height: 25px;
            position: relative;
            z-index: 1;
            top: -3px;
          }
          .nr {
            font-size: 14px;
            color: #888;
            line-height: 26px;
            margin-bottom: 0;
            padding-top: 5px;
            span {
              color: #ff7800;
              padding: 0 3px;
            }
          }
          .button {
            padding-top: 5px;
            height: 25px;
            line-height: 25px;
            .money {
              color: #ff2b22;
              font-size: 20px;
              margin: 0;
              i {
                font-style: normal;
                font-size: 12px;
              }
            }
            a {
              background: linear-gradient(
                -90deg,
                rgba(252, 77, 81, 1),
                rgba(252, 63, 120, 1)
              );
              border-radius: 100px;
              color: #fff;
              font-size: 14px;
              padding: 3px 15px;
              float: right;
              line-height: 23px;
            }
          }
        }
      }
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