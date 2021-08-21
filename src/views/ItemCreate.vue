<template>
  <el-form ref="form" :model="itemForm" label-width="80px">
    <el-form-item label="Barcode">
      <el-input v-model="itemForm.barcode"></el-input>
    </el-form-item>
    <el-form-item label="Name">
      <el-input v-model="itemForm.name"></el-input>
    </el-form-item>
    <el-form-item
      label="Price"
      prop="age"
      :rules="[
      { required: true, message: '价格不能为空'},
      { type: 'number', message: '价格必须为数字值'}
    ]">
      <el-input v-model="itemForm.price"></el-input>
    </el-form-item>
    <el-form-item label="Type">
      <el-input v-model="itemForm.type"></el-input>
    </el-form-item>
    <el-form-item label="Unit">
      <el-input v-model="itemForm.unit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import itemService from "../global/service/itemService";

export default {
  data() {
    return {
      itemForm: {
        barcode: '',
        name: '',
        price: '',
        type: '',
        unit: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const param = {
        barcode: this.itemForm.barcode,
        name: this.itemForm.name,
        price: this.itemForm.price,
        type: this.itemForm.type,
        unit: this.itemForm.unit
      }
      itemService.create(param)
        .then(() => {
          this.$message.success('added successfully')
          this.$router.push({
            name: 'ItemList'
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
