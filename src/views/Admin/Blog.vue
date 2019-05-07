<template>
  <el-card class="admin-blog-content">
    <el-form :model="blogForm" :rules="rules" ref="blogForm">
      <el-form-item class="admin-blog-content-submit">
        <span class="admin-blog-content-label-submit">新建日志</span>
        <el-button class="admin-blog-content-submit-btn" type="primary" size="mini" @click="submitBlog">保存</el-button>
      </el-form-item>
      <el-form-item prop="title" class="admin-blog-content-title">
        <span class="admin-blog-content-label">标题</span>
        <el-input 
          v-model="blogForm.title" 
          placeholder="请输入标题">
        </el-input>
      </el-form-item>
      <el-form-item class="admin-blog-content-keyword">
        <span class="admin-blog-content-label">关键字</span>
        <el-tag 
          class="admin-blog-content-keyword-tag" 
          type="info" 
          closable
          v-for="(keyword, index) in blogForm.keywords" 
          :key="keyword"
          @close="removeKeyword(index)">
          {{ keyword }}
        </el-tag>
        <el-input
          class="input-new-keyword"
          v-if="blogForm.inputVisible"
          v-model="blogForm.inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"> + 关键字 </el-button>
      </el-form-item>
      <el-form-item class="admin-blog-content-keyword">
        <span class="admin-blog-content-label">内容</span>
        <mavon-editor 
          class="admin-blog-content-editor" 
          :ishljs="true"
          :boxShadow="false"
          :tabSize="4"
          @imgAdd="imgAddOpt"
          @save="saveOpt"
          @change="saveOpt">
        </mavon-editor>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import { Http } from '../../api/http.js'

import { Form, FormItem, Card, Button, Input, Tag, Message } from 'element-ui'
export default {
    name: 'AdminBlog',
    data () {
      return {
        blogForm: {
          title: '',
          keywords: [],
          inputVisible: false,
          inputValue: '',
          editorContent: '',
          editorRender: '',
          editorImgs: []
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { max: 100, message: '长度在 100 个字符内', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
        [Form.name]: Form,
        [FormItem.name]: FormItem,
        [Card.name]: Card,
        [Button.name]: Button,
        [Input.name]: Input,
        [Tag.name]: Tag,
        [Message.name]: Message,
        'mavon-editor': mavonEditor
    },
    methods: {
      handleClose(tag) {
        this.keywords.splice(this.keywords.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.blogForm.keywords.push(inputValue);
        }
        this.blogForm.inputVisible = false;
        this.blogForm.inputValue = '';
      }, 

      removeKeyword(index) {
        this.blogForm.keywords.splice(index, 1);
      },

      imgAddOpt(filename, file) {
        this.blogForm.editorImgs.push(file);
      },

      saveOpt(value, render) {
        this.blogForm.editorContent = value;
        this.blogForm.editorRender  = render;
      },
      
      submitBlog() {
        let params = {}
        let data = {
          'title': this.blogForm.title,
          'keywords': this.blogForm.keywords,
          'content': this.blogForm.editorContent,
          'html': this.blogForm.editorRender
        }

        Http('POST', 'editBlog', params, data).then( res => {
        })
      }
    }
}
</script>

<style>
  .admin-blog-content {
    text-align: left;
  }
  
  .admin-blog-content-label {
    display: block;
    margin-bottom: 5px;
  }

  .admin-blog-content-label-submit {
    font-size: 20px;
    display: inline-block;
    float: left;
  }

  .admin-blog-content-title {
    margin-bottom: 15px;
  }

  .admin-blog-content-keyword {
    margin-bottom: 15px;
  }

  .input-new-keyword {
    width: 150px;
  }

  .admin-blog-content-keyword-tag {
    margin-right: 5px;
  }

  .admin-blog-content-submit {
    text-align: right;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .admin-blog-content-editor {

  }

  .add-image-link-wrapper {
    background-color: rgb(89, 93, 95);
  }
</style>
