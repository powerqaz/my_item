<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/general')" :class="{on: isCurrent('/general')}">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/shop')" :class="{on: isCurrent('/shop')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-geren1"></i>
      </span>
      <span>个人</span>
    </div>

  </footer>
</template>


<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      justify-content space-around
      margin 10px
      color #999999
      &.on
        color #02a774
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
