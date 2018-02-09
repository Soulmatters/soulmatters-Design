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
  },
   head () {
    return {
      title: `Our portfolio | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look at what we did and then just contact us for a quotation for your business next level.' },
        { hid: 'og:image', property: 'og:image', content: '/uploads/home-electric-mockup.jpg' },
      ]
    }
  },
}
</script>
