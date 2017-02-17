<template>
  <div class="footer">
    <div class="btn-box">
      <router-link to="about-us" class="about">关于我们</router-link>
      <a href="#wechat" class="wechat">
        微信
        <div class="float-box">
          <!--下面的 alt 换成微信号-->
          <img src="a0.jpg" alt="gambition" class="wechat-qr">
        </div>
      </a>
      <a href="" class="weibo">微博</a>
    </div>
    <a class="beian" href="">沪 备准字 DP1241231</a>

  </div>
</template>

<script>
  export default {
      name: "g-footer",
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "g-footer"
</style>
