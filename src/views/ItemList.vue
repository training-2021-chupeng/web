<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="barcode"
        label="Barcode"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        width="80">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="100">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="Unit"
        width="80">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </div>
</template>

<script>
import itemService from "../global/service/itemService";

export default {
  data() {
    return {
      tableData: [{}]
    }
  },
  created() {
    this.refreshList()
  },
  methods: {
    handleEdit(id) {
      this.$router.push({
        name: 'ItemUpdate',
        params: {id}
      })
    },
    handleDelete(id) {
      itemService.delete(id).then(() => {
        this.refreshList()
      })
    },
    onSubmit() {
      this.$router.push({
        name: 'ItemCreate'
      })
    },
    refreshList() {
      itemService.getList()
        .then((itemList) => {
          this.tableData = itemList
        })
    }
  }
}
</script>

<style scoped>

</style>
