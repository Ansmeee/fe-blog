<template>
  <vue-markdown
    :source="html"
    class="html-con">
  </vue-markdown>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: "MarkDown",
    props: {
      html: {
        type: String,
        default: ''
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>

<style scoped>
.html-con {
  text-align: left;
}
</style>