<template>
  <div>
    <div class="container">
      <vHeader></vHeader>
      <div class="row">
        <vLeftBar></vLeftBar>
        <vBlogList></vBlogList>
      </div>
    </div>
    <vFooter></vFooter>
  </div>

</template>

<script>
  import vHeader from './header.vue'
  import vFooter from './footer.vue'
  import vLeftBar from './leftBar.vue'
  import vBlogList from './blogList.vue'

  export default {
    name: 'index',
    components: {vHeader, vFooter, vLeftBar, vBlogList}
  }
</script>


<style scoped>
.container{
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #f5f6f7;
}
.row{
  width: 1180px;
  margin: auto;
}
</style>
