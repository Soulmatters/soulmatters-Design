<template>
<div id="body">
  <Toolbar>
  <nuxt/>
<Footer/>
  </Toolbar>

</div>
</template>
<script>
import Toolbar from '~/components/Toolbar.vue'
import SocialIcons from '~/components/social/Social-icons.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Toolbar,
    SocialIcons,
    Footer
  }
}
</script>
<style >
body{
  background:url(/home/bg.jpg) ;
}
</style>
