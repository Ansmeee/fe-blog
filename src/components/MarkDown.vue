<template>
  <mavon-editor
    class="html-con"
    :subfield="false"
    :defaultOpen="'preview'"
    :toolbarsFlag="false"
    :editable="false"
    :ishljs="true"
    fontSize="16px"
    codeStyle="atom-one-light"
    :previewBackground="'#fff'"
    style="height: 100%; width: 100%; box-shadow: none;"
    v-model="html">
  </mavon-editor>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "MarkDown",
    props: {
      html: {
        type: String,
        default: ''
      }
    },
    methods: {},
    components: {
      mavonEditor
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  .html-con {
    text-align: left;

    code {
      white-space: pre-wrap;
    }
  }
</style>
