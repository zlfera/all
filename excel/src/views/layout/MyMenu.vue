<script setup lang="ts">
import { useRoute } from "vue-router";
import useWebComponentStore from "@/stores/webComponent";
const store = useWebComponentStore();

const handleOpen = () => {};
const handleClose = () => {};
const route = useRoute();
//const isCollapse = inject("layoutIsCollapse");
</script>
<template>
  <el-menu
    :router="true"
    :default-active="route.path"
    class="el-menu-vertical-demo"
    background-color="#112f50"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="store.isCollapse.data"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon>
        <location />
      </el-icon>
      <template #title> 系统首页 </template>
    </el-menu-item>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>订单管理</span>
      </template>

      <el-menu-item index="/order/manual">销售出库单</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/goods">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>基础资料</span>
      </template>
      <el-menu-item index="/goods/config"> 商品管理 </el-menu-item>
      <el-menu-item index="/goods/category"> 分类管理 </el-menu-item>
      <el-menu-item index="/goods/tag"> 标签管理 </el-menu-item>
      <el-menu-item index="/goods/stockList"> 仓库管理 </el-menu-item>
      <el-menu-item index="/goods/supplier"> 供应商 </el-menu-item>
      <el-menu-item index="/goods/dealers"> 客户管理 </el-menu-item>
      <el-menu-item index="/goods/stockShelve"> 货架管理 </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/stock">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>库存管理</span>
      </template>
      <el-menu-item index="/stock/inventory"> 库存清单 </el-menu-item>
      <el-menu-item index="/stock/otherStock"> 其他入库 </el-menu-item>
      <el-menu-item index="/stock/outStock"> 商品出库 </el-menu-item>
      <el-menu-item index="/stock/transfer"> 商品调拨 </el-menu-item>
      <el-menu-item index="/stock/loss"> 库存损耗 </el-menu-item>
      <el-menu-item index="/stock/stockTaking"> 库存盘点 </el-menu-item>
      <el-menu-item index="/stock/inventoryStatistics"> 库存统计 </el-menu-item>
      <el-menu-item index="/stock/goodsDetail"> 商品明细 </el-menu-item>
      <el-menu-item index="/stock/salesReturn"> 销售退货 </el-menu-item>
      <el-menu-item index="/stock/lendRevert"> 借出归还 </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
