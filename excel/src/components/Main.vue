<template>
  <el-scrollbar>
    <div>
      <el-input v-model="input" placeholder="请输入名字" style="width: 200px; margin: 5px 0; border: 1px solid white"
        @keyup.enter="onFindByName(input)" />
      <el-button type="primary" style="margin-left: 5px" @click="onFindByName(input)">查询</el-button>
      <el-button type="danger" @click="reset_params">重置</el-button>
      <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
    </div>
    <!-- v-loading="tableData.length ? false : true" element-loading-text="加载中..." -->
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="no" label="号码" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="phone" label="电话" />
      <el-table-column prop="role_id" label="角色" />
      <el-table-column prop="is_valid" label="有效" />
      <el-table-column width="300">
        <el-button type="success">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
    <el-dialog v-model="dialogFormVisible" title="Shipping address" :before-close="close">
      <el-form :model="form">
        <el-row>
          <el-form-item label="姓名">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" style="margin-left: 50px">
            <el-col :span="20">
              <el-input v-model="form.password" autocomplete="off" />
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item label="号码">
          <el-input v-model="form.no" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色">
          <el-input v-model="form.role_id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="有效">
          <el-input v-model="form.is_valid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1" />
            <el-option label="女" value="0" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="save"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { save as save_form } from "@/utils/request";
const emit = defineEmits<{
  (event: "onFindByName", name: string): void;
}>();
let input = ref("");

let dialogFormVisible = ref(false);
let form: { password?: string } & typeof props.tableData[number] = reactive({});
const props = defineProps<{
  tableData: {
    name?: string;
    no?: string;
    sex?: string;
    phone?: string;
    role_id?: string;
    is_valid?: string;
  }[];
}>();
let total = ref(50);
let currentPage = ref(1);
let pageSize = ref(2);
const handleSizeChange = (val: number) => { };
const handleCurrentChange = (val: number) => { };
const onFindByName = (name: string) => {
  emit("onFindByName", name);
};
const reset_params = () => (input.value = "");
const my_update = inject<Function>("my_update");
const save = async () => {
  dialogFormVisible.value = false;

  await save_form(form);
  form.is_valid = form.name = form.no = form.password = form.phone = form.role_id = form.sex =
    "";
  my_update!();
};
const close = () => {
  dialogFormVisible.value = false;
  form.is_valid = form.name = form.no = form.password = form.phone = form.role_id = form.sex =
    "";
};
</script>

<style scoped lang="less">

</style>
