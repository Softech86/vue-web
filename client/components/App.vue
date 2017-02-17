<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "config.scss";

  html, body {
    font-family: $gbtFont;
    margin: 0;
    width: 100%;

  @include respond-to(sm) {
    min-width: 1200px;
  }
  }

  li {
    list-style: none;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    outline: none;

  &:hover {
     text-decoration: none;
     padding-top: 2px;
     color: #6DA2D7 !important;
   }

  transition: all .2s;
  }

  .divide {
    position: relative;
    display: block;
    margin: 80px auto 0 auto;
    @include respond-to(sm) {
      margin: 110px auto 0 auto;
    }
    font-size: 25px;
    width: 86%;
    overflow: hidden;
    text-align: center;
    &:before {
      content: "";
      background-color: $gbtGray;
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: -1;
    }

    .text {
      display: inline-block;
      text-align: center;
      background-color: white;
      padding: 0 15px;
      @include respond-to(xs) {
        padding: 0 40px;
      }
      @include respond-to(sm) {
        padding: 0 164px;
      }
    }
  }

  @include respond-to(xs) {
    .title {
      font-size: 30px !important;
    }
  }
</style>
