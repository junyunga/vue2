<template>
  <div id="app">
    <div class="loading">
      <div class="piece-1">1</div>
      <div class="piece-2">1</div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  
  export default class App extends Vue {}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    .loading {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      .piece-1 {
        position: absolute;
        left: 10%;
        animation-name: piece-1;
        animation-duration: 4s;
      }
    }
  }

  // @include keyframes(piece-1) {


  // }

  // @mixin piece-1($i) {
  //   @include animation(piece-1 0.3s ease-in-out);
  //   @keyframes piece-1 {
  //     #{percentage($i)} {
  //         left: percentage($i);
  //     }
  //   }

  // }
  
  // @for $i from 0 through 10 {
  //   @include piece-1($i)
  // }
  
</style>
