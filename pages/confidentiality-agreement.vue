
<template>

  <div class="grid">
   
<h1>{{page.title}}</h1>
<div class="article" v-html="page.body" />
 
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
.grid{
  display: grid;
  background: #fff;
  max-width: 900px;
  margin:20px auto;
  padding: 40px;
  width: 100%;
}
h2{
  color:#fff;
  text-align: center;
  padding-top: 50px;
}
.article{
  font-size: 19px;
}
 .article a{
        color:#fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        transition: all .3s ease-in;
        line-height: 1.5;
    }
   .article a:hover{
        color:var(--secondary)
    }
</style>
