<template>
  <div class="page">
    <navbar></navbar>
    <slide></slide>
  </div>
</template>

<script>
  import Counter from 'components/Counter'

  export default {
      components: {
        Counter
      }
  }
</script>

<style lang="scss">
  p {
    color: red;
  }
</style>
