
<template>

  <div>
   
<h1>{{page.title}}</h1>
      
  </div>
</template>
<script>
export default {
  async asyncData ({ app, route }) {
    return {
      page: await app.$content('/pages').get(route.path),

    }
  },
   

  
}
</script>
<style scoped>
h2{
  color:#fff;
  text-align: center;
  padding-top: 50px;
}
</style>
