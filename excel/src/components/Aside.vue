<template>
  <el-scrollbar>
    <el-menu :default-openeds="['1', '3']" :collapse="is_collapse">
      <el-menu-item index="1">
        <el-icon>
          <message />
        </el-icon>首页
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>导航2
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <setting />
        </el-icon>导航3
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";

defineProps<{ is_collapse: boolean }>();
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
</style>
