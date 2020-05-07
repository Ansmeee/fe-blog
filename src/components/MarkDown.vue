<template>
  <mavon-editor
    class="html-con"
    :subfield="false"
    :defaultOpen="'preview'"
    :toolbarsFlag="false"
    :editable="false"
    :scrollStyle="true"
    :ishljs="true"
    :previewBackground="'#fff'"
    style="height: 100%; width: 100%; box-shadow: none; font-size: 15px"
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

<style scoped>
  .html-con {
    text-align: left;
  }
</style>