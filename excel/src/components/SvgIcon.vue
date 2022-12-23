<template>
  <svg aria-hidden="false">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ prefix: string; name: string }>(), {
  prefix: "icon",
  name: "",
});
const symbolId = computed(() => {
  `#${props.prefix}-${props.name}`;
});
</script>

<style lang="less" scoped></style>
