<template>
  <div class="toolbar">
    <div class="darrow">
      <el-icon :size="30">
        <Fold v-show="!is_collapse" @click="is_visiable('100px')" />
        <Expand v-show="is_collapse" @click="is_visiable('200px')" />
      </el-icon>
    </div>
    <div class="text"><span>欢迎来到仓库管理软件</span></div>
    <div>
      <span style="margin-right: 5px">王五</span>
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <ArrowDownBold />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toUser">个人资料</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ is_collapse: boolean }>();
const emit = defineEmits<{ (event: "is_visiable", width: string): void }>();
const is_visiable = (width: string) => {
  emit("is_visiable", width);
};
const toUser = () => { };
const logout = () => { };
</script>

<style scoped lang="less">
// .darrow {}

// .text {
//   flex: 1;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
