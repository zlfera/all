<script setup lang="ts">
const isCollapse = inject("layoutIsCollapse");
const changeCollapse = inject("layoutChangeCollapse");
</script>
<template>
  <div class="header">
    <el-icon :size="30">
      <Fold v-show="!isCollapse" @click="changeCollapse" />
      <Expand v-show="isCollapse" @click="changeCollapse" />
    </el-icon>
  </div>
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
