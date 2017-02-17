<template>
  <div>
    <g-header></g-header>


    <div class="banner">
      <img src="banner.png" alt="甘比学堂" name="company">
    </div>

    <div class="main">
      <div class="desc">
        <p>上海免力教育科技有限公司是一家致力于英文教育软件开发和运营的企业，公司为了教育的公平而不断奋斗，利用技术降低教育成本，让教育和知识像流水一样贯穿在人们的生活中。</p>
        <p>免力教育科技公司非常注重产品的知识性，公司学习氛围浓厚，无论是设计、编程、文学、外刊都是我们的日常读物和讨论对象，我们是一群非常有个性和兴趣爱好的年轻人，希望可以打造一家有趣的公司、一家觉得上班很快乐的公司。</p>
        <p>世界很大，我们很小，但是我们在这里睁眼看世界，用我们自己独特的方式，Come on，gamble for your ambition。</p>
      </div>
      <div class="cooperation">
        <div class="title">联系我们</div>
        <ul>
          <li v-for="c in coop">{{c.name}}：{{c.data}}</li>
        </ul>
      </div>


      <div class="divide">
        <div class="text">媒体报道</div>
      </div>

      <corp></corp>
    </div>

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
              coop: [
                  {
                      name: "联系电话",
                      data: "021-21029974"
                  },
                  {
                      name: "电子邮件",
                      data: "yiliangg@foxmail.com"
                  },
                  {
                      name: "市场合作",
                      data: "idogogo@163.com"
                  },
                  {
                      name: "媒体联络",
                      data: "idogogo@163.com"
                  },
              ]
          }
      }
  }
</script>

<style lang="scss">
  @import "aboutus.scss";
</style>
