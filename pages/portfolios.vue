<template>
  <div>
      <Portfolio-list :items="portfolio"></Portfolio-list>

  </div>
</template>
<script>
import PortfolioList from '~/components/portfolio/Portfolio-list.vue'

export default {
   async asyncData ({ app, route }) {
    return {
      portfolio: await app.$content('/portfolio').getAll()
    }
  },
   components:{
    PortfolioList
  }
}
</script>
