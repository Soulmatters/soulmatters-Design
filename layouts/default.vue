<template>
<div id="body">
  <Toolbar>
  <nuxt/>
   <v-footer class="pa-3 dark-bg">
    <v-spacer></v-spacer>
     <Social-icons/>
    <div>© {{ new Date().getFullYear() }}</div>
  </v-footer>
  </Toolbar>

</div>
</template>
<script>
import Toolbar from '~/components/Toolbar.vue'
import SocialIcons from '~/components/social/Social-icons.vue'
export default {
  components: {
    Toolbar,
    SocialIcons
  }
}
</script>
<style >
body{
  background:url(/home/bg.jpg) ;
}
</style>
