<template>
  <div id="detaails">
    <div class="header_pr header_goods">
      <header class="icon_header">
        <a class="iconfont icon_zuojiantou" @click="onClickLeft">
          <van-icon name="arrow-left" />
        </a>
        <div class="title">
          <div class="row-s">
            <a class="col-12-4 text-center active">商品</a>
            <a class="col-12-4 text-center">详情</a>
            <a class="col-12-4 text-center">推荐</a>
          </div>
        </div>
        <a class="iconfont icon-gengduo">
          <van-icon name="ellipsis" />
        </a>
        <div class="h_newlit">
          <!-- <div>
            <a href="#">
              <i class="iconfont icon-detail_home"></i>首页
            </a>
            <a href="##">
              <i class="iconfont icon-detail_search"></i>搜索
            </a>
            <a href="##">
              <i class="iconfont icon-detail_servicer"></i>客服
            </a>
            <a href="##">
              <i class="iconfont icon-datail_feedback"></i>反馈
            </a>
            <a href="##">
              <i class="iconfont icon-gerenzhongxin"></i>我的
            </a>
          </div>-->
        </div>
      </header>
    </div>

    <!-- 中间 -->
    <div class="mian">
      <div v-for="(j, index) in goodsList " :key="index">
        <div class="img">
          <img :src="j.pic" alt />
        </div>
        <!-- 全民疯抢 -->
        <div class="goods_activity" style="background: #ffffff">
          <img
            src="https://img.alicdn.com/imgextra/i1/2053469401/TB2umeoFb1YBuNjSszhXXcUsFXa-2053469401.png"
            alt
          />
          <p class="text" style="font-size:12px; color:#999999;">近24小时，{{j.quanNum/10000}}万人已抢</p>
        </div>
        <!-- 价格 销量 点券 -->
        <h1 class="col_mar">
          <span>天猫</span>
          {{j.dtitle}}
        </h1>
        <div class="info row-s col-mar">
          <div class="col-12-6 text-left col-money">
            券后价
            <span class>
              <i>¥</i>
              {{j.jiage}}
            </span>
          </div>
          <div class="col-12-6 text-right">
            已售
            <span class="col-red">{{j.xiaoliang/10000}}万</span>件
          </div>
          <div class="col-12-6 text-left col-888">天猫价 ¥{{j.yuanjia}}</div>

          <div class="col-12-6 text-right auth">
            <span>
              <van-icon name="passed" />包邮
            </span>
            <span>
              <i class="iconfont icon-detail_icon col-money"></i>运费险
            </span>
          </div>
        </div>
      </div>
      <!-- 优惠卷 -->

      <a
        href="https://uland.taobao.com/coupon/edetail?e=kBpR7JgfGmcGQASttHIRqeKlVc98hw7ythekuInOhby5nCOgwqTSP0628SAEbxSLP5zJ%2FsNjGOkgSw5q%2FZNo%2BTEhJpUUrcnYK95Rc8uqBd5wO9XRdFenWHY9x3IctcCWLspxGy3zBjY8IeN8lvhRA2lzrR4%2Bfrcb2XhfVVaMpqEAlYgvENBjONCUdoNemaWf&traceId=0b17697f15653521984701214e&union_lens=lensId:0b01e6c4_0b6e_16c76430171_858b&xId=ap5afXrJgGC9wQqLHKU9rvIDYBpkSpIXpoWO5GeAjn03ybu28htzKfwrutxQxwKtk9Ja9EDcenOXGUuSRAD2a6&activityId=39dbbffcebc14a989d9ccdf680e7fb38"
        class="imgsss"
      >
        <img src="../assets/123.png" alt />
      </a>
      <!-- 高评 -->
      <div
        class="goods_desc col-mar col-888"
      >【4.9超高评分！】采用电镀防指纹涂层，拒绝“油腻”，冷雕工艺精心打造，就好像没贴膜一样，一体成型，耐刮更防爆，更好保护您的爱机！</div>

      <div class="goods_reco">
        <h3>相似推荐</h3>
        <ul>
          <li class="swiper-cent" v-for="(k, index) in swiper_cent " :key="index">
            <a href="/index.php?r=p/d&amp;id=21535855" class="img" rel="nofollow">
              <img :src="k.pic" alt />
            </a>
            <p class="name">{{k.dtitle}}</p>
            <p class="quan">
              <span>{{k.quanJine}}元券</span>
            </p>
            <p class="money col-money">
              券后价
              <span>¥{{k.yuanjia}}</span>
            </p>
          </li>
        </ul>
      </div>

      <!--  -->
    </div>
    <!-- 底部 -->
    <footer>
      <div class="but">
        <p>
          <van-icon name="share" />
        </p>分享
      </div>
      <div class="but">
        <p>
          <van-icon name="star-o" />
        </p>收藏
      </div>
      <div class="but text_center1">口令购买</div>
      <div class="but text_center" @click="tocart">领券购买</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: [],
      goodsList: [],
      swiper_cent: []
    };
  },
  methods: {
    onClickLeft() {
      // console.log(2333);

      this.$router.back(1);
    },
    async tocart() {
      //   //加入购物车
      // console.log(this.goodsList);
      // pic, dtitle, id, jiage, quanJine;
      await this.$axios.post("http://localhost:3000/addcart", {
        name: this.goodsList[0].dtitle,
        pic: this.goodsList[0].pic,
        id: this.goodsList[0].id,
        jiage: this.goodsList[0].jiage,
        quanJine: this.goodsList[0].quanJine,
        num: "1"
      });
    }
  },
  async created() {
    let id = await this.$route.params.id;
    // console.log(id);
    this.$axios("http://localhost:3000/details/finds", {
      params: {
        id
      }
    }).then(res => {
      // console.log(res);
      this.goodsList = res.data;
    });

    // 获取相似推荐 数据
    let datalist = await this.$axios("http://localhost:3000/detailsss");
    // console.log(datalist);
    this.swiper_cent = datalist.data; //列表数据
    // console.log(this.swiper_cent);

    // console.log("http://localhost:3000/details/" + id);
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
  font-size: 14px;
}
#detaails {
  width: 100%;
  .header_pr {
    background: 0 0;
    border-bottom: 0;
    position: fixed;
    z-index: 160;
    left: 0;
    width: 100%;
    top: 0;
    zoom: 1;
    .icon_header {
      width: 100%;
      height: 45px;
      line-height: 45px;
      position: relative;
      z-index: 5;
      zoom: 1;
      .icon_zuojiantou {
        position: absolute;
        z-index: 5;
        zoom: 1;
        text-align: center;
        display: inline-block;
        height: 30px;
        width: 30px;
        line-height: 30px;
        border-radius: 100px;
        top: 7px;
        left: 7px;
        background: rgba(0, 0, 0, 0.3);
        color: rgb(255, 255, 255);
      }
      .title {
        text-align: center;
        font-size: 16px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: inherit;
        padding: 0 60px;
        position: relative;
        z-index: 1;
        zoom: 1;
        top: 0;
        background: #fff;
        .row-s:before {
          content: "";
          overflow: hidden;
          height: 0;
          clear: both;
          display: block;
        }
        .text-center {
          font-size: 1rem;
          color: #666;
          position: relative;
          z-index: 1;
          zoom: 1;
          display: inline-block;
          width: 33.33333333%;
        }
        .active {
          color: #333;
          font-size: 1.1rem;
        }
      }
      .icon-gengduo {
        position: absolute;
        z-index: 5;
        zoom: 1;
        text-align: center;
        display: inline-block;
        height: 30px;
        width: 30px;
        line-height: 30px;
        border-radius: 100px;
        top: 7px;
        right: 7px;
        left: auto;
        background: rgba(0, 0, 0, 0);
        color: rgb(0, 0, 0);
      }
    }
  }
  // 中间
  .mian {
    max-width: 750px;
    text-align: left;
    margin: auto;
    overflow: hidden;
    padding-bottom: 56px;
    .img {
      img {
        width: 375px;
        height: 375px;
      }
    }
    .goods_activity {
      height: 49px;
      border-bottom: solid 1px #f5f5f5;
      position: relative;
      z-index: 1;
      zoom: 1;
      background: #ffffff;
      img {
        float: left;
        margin-left: 12px;
        height: 50px;
        margin-right: 12px;
      }
      .text {
        font-size: 12px;
        color: #999999;
        line-height: 56px;
        height: 49px;
      }
    }
    .col_mar {
      font-size: 15px;
      font-weight: 400;
      padding: 14px 0 8px;
      margin: 0 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        border: 1px solid #fc3f78;
        color: #fc3f78;
        padding: 0 5px;
        margin-right: 5px;
        font-size: 0.785rem;
        top: -1px;
        border-radius: 2px;
      }
    }
    .info {
      margin: 0 14px;
      text-align: left;
      .col-12-6 {
        width: 50%;
        font-size: 0.785rem;
        height: 2rem;
        line-height: 2rem;
        float: left;
      }
      .col-money {
        color: #fc4d52;
      }
      .text-left {
        text-align: left;
        span {
          font-size: 21px;
          line-height: 28px;
          i {
            font-style: normal;
            font-size: 1rem;
            margin-right: 0.3rem;
          }
        }
      }
      .text-right {
        text-align: right;
        span {
          color: #f72239;
        }
      }
      .auth {
        span {
          color: #888;
        }
      }
    }
    .imgsss {
      width: 100%;
      height: 90px;
      img {
        width: 100%;
        height: 90px;
      }
    }
    .goods_desc {
      font-size: 12px;
      line-height: 19px;
      padding: 7px 0 19px;
      color: #888;
      margin: 0 14px;
    }
    .goods_reco {
      width: 100%;
      height: 240px;
      margin-bottom: 10px;
      h3 {
        height: 49px;
        font-size: 15.4px;
        font-weight: 400;
        line-height: 49px;
        text-align: center;
      }
      ul {
        margin: 0 auto;
        position: relative;
        overflow: auto;
        display: flex;
        z-index: 1;
        padding-left: 10px;
        li {
          display: block;
          flex-shrink: 0;
          width: 30%;
          height: 190px;
          position: relative;
          margin-right: 10px;
          height: 100%;
          a {
            display: block;
            position: relative;
            z-index: 1;
            img {
              display: block;
              width: 100px;
              height: 100px;
              border-radius: 4px;
            }
          }
          .name {
            font-size: 1rem;
            padding: 5px 0 0;
            margin-bottom: 8px;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            color: #666;
          }
          .quan {
            font-size: 0.785rem;
            color: #fc4d52;
            border: 1px solid #fc4d52;
            padding: 0 0.4rem;
            display: inline-block;
            height: 1rem;
            line-height: 1.15rem;
            overflow: hidden;
            span {
              font-size: 0.785rem;
              color: #fc4d52;
              line-height: 1.15rem;
            }
          }
          .money {
            line-height: 1.8rem;
            padding-bottom: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.785rem;
            color: #fc4d52;
            span {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  footer {
    position: fixed;
    zoom: 1;
    bottom: 0;
    z-index: 500;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.1);
    height: 4rem;
    height: 56px;
    display: flex;
    .but {
      padding-top: 4.9px;
      text-align: center;
      width: 16.66666667%;
      font-size: 12px;
      color: #333;
      p {
        position: relative;
        z-index: 1;
        zoom: 1;
        top: -3px;
        padding-top: 3px;
        height: 22px;
        font-size: 25px;
      }
    }
    .text_center1 {
      border: 1px solid #fe9f69;
      width: 101px;
      text-align: center;
      height: 41px;
      line-height: 41px;
      margin-top: 2px;
      background: #fff;
      color: #fe9f69;
      zoom: 1;
      top: 1px;
      left: 1px;
      z-index: 5;
      position: relative;
      border-radius: 3px 0 0 3px;
    }
    .text_center {
      width: 147px;
      color: #fff;
      text-align: center;
      margin-top: 3px;
      margin-right: 4px;
      background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
      height: 43px;
      line-height: 44px;
      overflow: hidden;
    }
  }
}
</style>

