<script setup lang="ts">
import useWebComponentStore from "@/stores/webComponent";
const store = useWebComponentStore();
//const isCollapse = store.isCollapse;
//const isCollapse = inject<boolean>("layoutIsCollapse");
//const changeCollapse = inject<Function>("layoutChangeCollapse");
</script>
<template>
  <div class="header">
    <div class="icon">
      <el-icon :size="30">
        <!-- <Fold v-show="!isCollapse" @click="changeCollapse" />
        <Expand v-show="isCollapse" @click="changeCollapse" /> -->
        <Fold v-show="!store.isCollapse" @click="store.changeCollapse" />
        <Expand v-show="store.isCollapse" @click="store.changeCollapse" />
      </el-icon>
    </div>
    <div class="right">
      <div class="time">2022/12/25</div>
    </div>
  </div>
  <div class="wrapper">
    <RouterView />
  </div>
</template>
<style scoped lang="less">
.header {
  height: 50px;
  background-color: pink;
  display: flex;

  .icon {
    cursor: pointer;
    flex: 1;
  }

  .right {
    margin-right: 10px;
  }
}

.wrapper {
  margin: 20px;
}
</style>
