<template>
  <div class="header">
    <a href="/" class="logo">
      <img src="/logo.svg" alt="甘比学堂">
    </a>

    <div class="btn-box">
      <a href="/" class="btn">首页</a>
      <a href="/course/list" class="btn">课程</a>
      <a href="/account/login" class="btn">登录</a>

      <a href="/accdount/register" class="btn border">注册</a>
    </div>

  </div>
</template>

<script>
  export default {
      name: "g-header",
    components: {
    },
    computed: {
      login () {
        // return this.$store.state.session.token !== null
          return true;
      },
      links() {
        let
          links = [
            ['全部课程', '/course/list'],
            ['课堂论坛', '/forum'],
          ];
        if (this.login) {
          links.push(['我的课程', '/profile/courses']);
        }
        return links
      }
    },
    methods: {
      logout() {
        // this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "g-header"
</style>
