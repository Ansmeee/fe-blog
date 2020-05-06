<template>
  <div id="editor">
    <mavon-editor
      @save="save"
      :ishljs = "true"
      style="height: 100%"
      v-model="content"></mavon-editor>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "Edit",
    data() {
      return {
        content: ''
      }
    },
    methods: {
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