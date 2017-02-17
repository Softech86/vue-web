<template>
  <div class="corp">
    <!--下面的 alt 全部换成真实的公司名-->
    <div class="corp-img" v-for="(c, i) in corp">
      <img :src="c.src" :alt="c.name">
    </div>
  </div>
</template>

<script>
    export default {
        name: "corp",
        data() {
            return {
                corp: [
                    {
                        src: "corp1.png",
                        name: "同济创业谷"
                    },
                    {
                        src: "corp2.png",
                        name: "INNOSPACE"
                    },
                    {
                        src: "corp3.png",
                        name: "上海复旦资产经营有限公司"
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "corp"
</style>
