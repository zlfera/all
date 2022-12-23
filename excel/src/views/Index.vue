<template>
  <el-container class="layout-container-demo">
    <el-aside :width="width">
      <Aside :is_collapse="is_collapse" />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header @is_visiable="is_visiable" :is_collapse="is_collapse" />
      </el-header>

      <el-main>
        <Main :tableData="item.item!" @onFindByName="onFindByName" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from "../components/Aside.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import { ref } from "vue";
import { findByName, getList } from "@/utils/request";

let is_collapse = ref(false);
let width = ref("200px");
const is_visiable = (wid: string): void => {
  width.value = wid;
  is_collapse.value = !is_collapse.value;
};

const item = reactive<{
  item: {
    name?: string;
    no?: string;
    sex?: string;
    phone?: string;
    role_id?: string;
    is_valid?: string;
  }[];
}>({ item: [] });

getList(item);
const onFindByName = (name: string) => {
  // if (name.trim().length >= 6)
  findByName(name, item);
};
const update = () => getList(item);
provide("my_update", update);
</script>

<style scoped lang="less">
.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .el-header {
  padding: 0;
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  //background: var(--el-color-primary-light-8);
}
</style>
