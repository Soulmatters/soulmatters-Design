<template>
<div id="blog">
    <Intro :title="pages.title" :image="pages.image" :subtitle="pages.subtitle" />
  <div class="blog-card light-bg">
      <Card :data="posts" ></Card>
      
    </div>
</div>
</template>

<script>
import Card from '~/components/Card.vue';
import Intro from '~/components/blog/Intro.vue';

export default {
    async asyncData ({ app, route }) {
    return {
      posts: await app.$content('/posts').getAll(),    
      pages: await app.$content('/pages').get('/blog')
    }
    },
     data () {
    return {
      title: 'Blog | SM-Design.ro'
    }
  },
     head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
   components: {
    Card,
    Intro
  },
 
}
</script>
<style>
.blog-card{
  
}
#blog{
}
</style>
