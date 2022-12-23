<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="less">
html,
body,
#app,
.el-container,
.el-aside,
.el-scrollbar__view {
  margin: 0;
  padding: 0;
  height: 100%;
}

//@import url("./assets/base.css");

// #app {
//   font-family: Arial, Helvetica, sans-serif;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//   }
// }

// nav a.router-link-exact-active {
//   color: #42b983;
// }

// .flex-float {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .flex {
//   display: flex;
//   align-items: center;
// }
</style>
