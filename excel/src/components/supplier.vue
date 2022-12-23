<template>
  <h1>供应商列表</h1>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="supplierId" label="供应商编号" width="180" />
    <el-table-column prop="suppliers_name" label="供方名称" width="180" />
    <el-table-column prop="address" label="供方地址" />
    <el-table-column prop="telephone" label="供方电话" />
    <el-table-column prop="description" label="备注" />
    <el-table-column prop="quality_assurance_capability" label="质量保证能力" />
    <el-table-column prop="telephone" label="供方电话" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    supplierId: "2016-05-03",
    suppliers_name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    supplierId: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped lang="less">

</style>
