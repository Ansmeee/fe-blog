<template>
  <el-card class="admin-blog-content">
    <div class="admin-blog-content-title">
      <div class="admin-blog-content-submit">
        <span class="admin-blog-content-label-submit">新建日志</span>
        <el-button class="admin-blog-content-submit-btn" type="primary" size="mini">保存</el-button>
      </div>
      <span class="admin-blog-content-label">标题</span>
      <el-input placeholder="请输入标题"></el-input>
    </div >
    <div class="admin-blog-content-keyword">
      <span class="admin-blog-content-label">关键字</span>
      <el-tag 
        class="admin-blog-content-keyword-tag" 
        type="info" 
        closable
        v-for="(keyword, index) in keywords" 
        :key="keyword"
        @close="removeKeyword(index)">
        {{ keyword }}
        
      </el-tag>
      <el-input
        class="input-new-keyword"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm">
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"> + 关键字 </el-button>
    </div>
    <div class="admin-blog-content-keyword">
      <span class="admin-blog-content-label">内容</span>
      <mavon-editor 
        class="admin-blog-content-editor" 
        :ishljs="true"
        :boxShadow="false"
        :tabSize="4"
        @imgAdd="imgAddOpt"
        @save="saveOpt">
      </mavon-editor>
    </div>
  </el-card>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import { Http } from '../../api/http.js'

import { Card, Button, Input, Tag, Message } from 'element-ui'
export default {
    name: 'AdminBlog',
    data () {
      return {
        keywords: [],
        inputVisible: false,
        inputValue: '',
        editorContent: '',
        editorRender: '',
        editorImgs: []
      }
    },
    components: {
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
          this.keywords.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }, 

      removeKeyword(index) {
        this.keywords.splice(index, 1);
      },

      imgAddOpt(filename, file) {
        this.editorImgs.push(file);
      },

      saveOpt(value, render) {
        this.editorContent = value;
        this.editorRender  = render;
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
