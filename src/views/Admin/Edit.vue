<template>
  <div id="editor">
    <el-form>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.class" style="width: 100%">
          <el-option
            v-for="type, index in types"
            :key="index"
            :label="type"
            :value="type">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item>
        <mavon-editor
          @save="save"
          :ishljs="true"
          :scrollStyle="false"
          style="height: 100%"
          v-model="form.content">
        </mavon-editor>
      </el-form-item>

      <el-form-item>
        <el-button size="mini" @click="submit">保 存</el-button>
        <el-button type="primary" size="mini" @click="publish">提 交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  import blogApi from '../../api/blog'

  export default {
    name: "Edit",
    data() {
      return {
        types: ['学习笔记', '日志分享', '摄影日记'],
        form: {
          title: '',
          summary: '',
          class: '',
          content: ''
        }
      }
    },
    methods: {

      postData(params) {
        blogApi.submit(params).then(res => {
          if (res.code == 200) {
            this.$message.success('保存成功')
          } else {
            console.log(res)
            this.$message.error(res.msg || '保存失败')
          }
        })
      },

      submit() {
        let params = this.form
        params.publish = 0
        this.postData(params)
      },

      publish() {
        let params = this.form
        params.publish = 1
        this.postData(params)
      },

      save(value, render) {
        console.log(value, render)
      }
    },
    components: {
      mavonEditor
    }
  }
</script>

<style scoped>

</style>
