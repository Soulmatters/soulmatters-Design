
<template>

  <div>
   
<Intro-home />
<Fast/>
<Portfolio-list :items="portfolio.slice(0,4)"></Portfolio-list>
<div class="blog-card primary-bg">
    <h2 class="display-3 primary-font">Latest blog posts</h2>

      <Card :data="posts.slice(0,3)" ></Card>
      
    </div>
  </div>
</template>
<script>
import Fast from '~/components/home/Fast.vue'
import Card from '~/components/Card.vue'
import PortfolioList from '~/components/portfolio/Portfolio-list.vue'
import IntroHome from '~/components/Intro-home.vue'
export default {
  async asyncData ({ app, route }) {
    return {
      page: await app.$content('/pages').get('/home'),
      portfolio: await app.$content('/portfolio').getAll(),
      posts: await app.$content('/posts').getAll(),    

    }
  },
   
  components:{
    IntroHome,
    Fast,
    PortfolioList,
    Card
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
