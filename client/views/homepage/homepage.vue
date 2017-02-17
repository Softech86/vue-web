<template>
  <div>
    <g-header></g-header>

    <div class="jumbotron">
      <img src="/scr1.png" alt="甘比学堂">
      <div class="desc">
        <div class="title">最燃的英语线上训练平台</div>
        <a href="/course/list" class="btn">立即进入</a>
      </div>
      <img src="/scr1.png" alt="甘比学堂">
    </div>

    <div class="what-is-gambition">
      <div class="title">Gambition 是什么？</div>
      <div class="content">
        <img src="/scr2.png" alt="这就是 Gambition">
        <div class="desc">
          <div class="row">一段使你持续行动的稳步节奏</div>
          <div class="row">一个帮你告别拖延症的小怪兽</div>
          <div class="row">一组让你学得停不下来的理由</div>
        </div>
      </div>
    </div>

    <div class="title divide">
      <div class="text">用户这么评价我们</div>
    </div>


    <div class="user-comment">
      <div class="comment">{{user[userSelect].comment}}</div>
      <div class="user">
        <!--下面的 alt 全部换成真实的用户名-->
        <div class="head-img" v-for="(u, index) in user" :class="{select: userSelect == index}" @click="onUserClicked(index)">
          <img :src="u.src" :alt="u.name">
        </div>
      </div>
    </div>

    <div class="title divide">
      <div class="text">相关机构</div>
    </div>

    <corp></corp>

    <g-footer></g-footer>
  </div>
</template>

<script>
    import GHeader from '../../components/g-header/g-header.vue'
    import Corp from '../../components/corp/corp.vue'

    import GFooter from '../../components/g-footer/g-footer.vue'

  export default {
      components: {
          GHeader,
          Corp,
          GFooter,
      },
      data() {
          return {
              userSelect: 2,
              user: [
                  {
                      name: '红',
                      src: 'a0.jpg',
                      comment: 'I am the first user of gambition.'
                  },
                  {
                      name: '鲤',
                      src: 'corp1.png',
                      comment: 'Hail GAMBITION!'
                  },
                  {
                      name: '鱼',
                      src: 'banner.png',
                      comment: 'Time flies fast. How many books have you get this month?'
                  },

              ],


              timeoutFunc: null,
          }
      },
      methods: {
          startSlide() {
              if (this.timeoutFunc)
                  clearTimeout(this.timeoutFunc);

              this.userSelect = (this.userSelect + 1) % this.user.length;
              let s = this.startSlide;
              this.timeoutFunc = setTimeout(function () {
                      s();
                  },
                  5000
              )
          },
          onUserClicked: function (i) {
              if (this.timeoutFunc)
                  clearTimeout(this.timeoutFunc);
              this.userSelect = i;
          },
      },
      mounted() {
          this.startSlide();
      }
  }
</script>

<style lang="scss">
  @import "homepage.scss";
</style>
