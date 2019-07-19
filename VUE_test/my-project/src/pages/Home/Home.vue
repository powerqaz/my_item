<template>
  <section id="home">
    <Header class="header">
      <span class="header-left">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        />
      </span>
      <span class="header-input">
        <input class="header-text" type="text" placeholder="搜索~~~~~~~" />
      </span>
      <span class="header-right">
        <span class="header-login">登录</span>
      </span>
    </Header>
    <div id="navTop">
      <span>我的</span>
      <span>我的</span>
      <span>我的</span>
      <span>我的</span>
      <span>我的</span>
    </div>
    <!-- 轮播 -->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div id="homeDetail">
      <span>网易自营品盘</span>
      <span>30天自行退货</span>
      <span>90天无忧退款</span>
    </div>
    <ul id="shopList">
      <li>
        <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt />
        <span>居家</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" alt />
        <span>鞋包配饰</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt />
        <span>服装</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt />
        <span>电器</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" alt />
        <span>婴童</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" alt />
        <span>饮食</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" alt />
        <span>洗护</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" alt />
        <span>餐厨</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" alt />
        <span>文体</span>
      </li>
      <li>
        <img src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" alt />
        <span>特色区</span>
      </li>
    </ul>
    <!-- 广告图片 -->
    <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt />
    <!-- 四个图 -->
    <ul id="forthDiv">
      <li>
        <span>事实好评帮</span>
        <br />
        <span>精选优质好物</span>
        <div id="images">
          <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt />
          <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt />
        </div>
      </li>
      <li>
        <span>新品热销榜</span>
        <br />
        <span>毫无抢先榜</span>
        <div id="images">
          <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt />
          <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt />
        </div>
      </li>
      <li>
        <span>严选线下店守家</span>
        <br />
        <span>体验选式美学</span>
        <div id="images">
          <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt />
          <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt />
        </div>
      </li>
      <li>
        <span>12月必买好物</span>
        <br />
        <span>冬日小确幸指南</span>
        <div id="images">
          <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" />
          <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" />
        </div>
      </li>
    </ul>
    <!-- 私人定制轮播 -->
    <span>私人定制</span>
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div></div>
        </div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 灰色条 -->
    <div id="garyTiao"></div>
    <!-- 新品首发 -->
    <div id="shouFa"><span>新品首发</span>
    <span>更多></span>
    </div>
    <ul id="sixTu">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  </section>
  <!-- 头部下的列表 -->
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#home {
  padding-bottom: 105px;

  .header {

    background-color white
    position fixed
    z-index 2

    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .header-left {
      img {
        height: 40px;
      }
    }

    .header-input {
      .iconfont {
        position: absolute;
        margin: 14px 28px;
      }

      .header-text {
        height: 56px;
        width: 442px;
        border-radius: 16px;
        color: #666;
        background-color: #ededed;
        border: 2px solid #eee;
        text-align: center;
      }
    }

    .header-login {
      color: #f40;
      width: 70px;
      height: 28px;
      border: 2px solid;
      padding: 10px;
      border-radius: 10px;
      font-size: 28px;
    }
  }

  #navTop {
    background-color white
    position fixed
    top 88px
    z-index 6
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 30px;
    width: 100%;
    height: 50px;
  }

  .swiper-wrapper {
    width: 100%;
    height: 370px;
    margin-top 146px

    img {
      width: 100%;
    }
  }

  #navMindeo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 25px;
    width: 100%;
    height: 40px;
    margin: 10px 0;
  }

  #homeDetail {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }

  /* ------------------------------- */
  #shopList {
    overflow: hidden;
    width: 100%;
    height: 350px;
    padding-bottom: 20px;

    li {
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 20px;
      width: 110px;
      height: 156px;

      img {
        margin-bottom: 10px;
      }
    }
  }

  /* ---------------------------------- */
  img {
    margin: 40px 0;
  }

  /* 四个图 */
  #forthDiv {
    margin-top: 40px;
    width: 750px;
    height: 527.97px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 343px;
      height: 260px;
      padding: 20px 0 0 20px;
      margin: 4px 0 0 4px;
      background-color: #f5f5f5;
      float: left;

      img {
        width: 150px;
      }
    }
  }

  /* 私人定制 */
  .swiper-wrapper {
    width: 100%;
    height: 370px;

    img {
      width: 100%;
    }
  }
  #garyTiao{
    width 100%
    height 20px
    background-color red
  }
  #shouFa{
    width 100%
    height 100px
    font-size 35px
    display flex
    justify-content space-between
  }
  #sixTu{
    width: 750px;
    height: 527.97px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li{
      width: 220px;
      height: 260px;
      margin: 8px 0 0 8px;
      background-color: #f5f5f5;
      float: left;
    }
  }
}
</style>
