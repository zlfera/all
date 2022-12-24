<script setup lang="ts"></script>
<template>
  <div class="header"></div>
  <div class="wrapper">
    <RouterView />
  </div>
</template>
<style scoped lang="less">
.header {
  height: 50px;
  background-color: pink;
}

.wrapper {
  margin: 20px;
}
</style>
