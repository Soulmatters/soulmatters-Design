<template>
<div id="body">
  <Toolbar>
  <nuxt/>
<Footer-wrapper/>
  </Toolbar>

</div>
</template>
<script>
import Toolbar from '~/components/Toolbar.vue'
import SocialIcons from '~/components/social/Social-icons.vue'
import FooterWrapper from '~/components/Footer-wrapper.vue'
export default {
  components: {
    Toolbar,
    SocialIcons,
    FooterWrapper
  }
}
</script>
<style >
body{
  background:url(/home/bg.jpg) ;
}
</style>
