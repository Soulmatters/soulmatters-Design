<template>
<div id="body">
  <Toolbar>
  <nuxt/>
  </Toolbar>

</div>
</template>
<script>
import Toolbar from '~/components/Toolbar.vue'
import SocialIcons from '~/components/social/Social-icons.vue'
export default {
  components: {
    Toolbar,
    SocialIcons,
  }
}
</script>
<style >
body{
  background:url(/home/bg.jpg) ;
}
</style>
