<script setup lang="ts">
import MyMenu from "./MyMenu.vue";
import Content from "./Content.vue";
const isCollapse = ref(false);
provide("layoutIsCollapse", isCollapse);
const changeCollapse = () => (isCollapse.value = !isCollapse.value);
provide("layoutChangeCollapse", changeCollapse);
const width = computed(() => {
  if (isCollapse.value == false) {
    return "200px";
  }
  if (isCollapse.value == true) {
    return "65px";
  }
});
</script>
<template>
  <div class="menu">
    <MyMenu />
  </div>
  <!-- <div class="content" :style="{ '--width': width }"> -->
  <div class="content" :class="{ active: isCollapse }" :style="{ '--width': width }">
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
  padding-left: var(--width);
}

.active {
  padding-left: 65px;
}
</style>
