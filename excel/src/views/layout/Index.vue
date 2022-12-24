<script setup lang="ts">
import MyMenu from "./MyMenu.vue";
import Content from "./Content.vue";
</script>
<template>
  <div class="menu">
    <MyMenu />
  </div>
  <div class="content">
    <Content />
  </div>
</template>
<style scoped lang="less">
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #112f50;
}

.content {
  padding-left: 200px;
}
</style>
