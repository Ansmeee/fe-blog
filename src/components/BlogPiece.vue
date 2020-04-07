<template>
  <div>
    <p>{{ blog.title }}</p>
    <p>{{ blog.summary }}</p>
  </div>
</template>

<script>
  export default {
    name: "BlogPiece",
    props: {
      item: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        blog: {
          id: '',
          title: '',
          summary: '',
          ctime: '',
          class: ''
        }
      }
    },
    created() {
      console.log(this.item)
      this.blog = this.item
    }
  }
</script>

<style scoped>
</style>