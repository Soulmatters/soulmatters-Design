<template>
<vue-app app>

  <v-toolbar  
     
      dark  
      height="80"
      class="primary-bg"
      >
    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon> 
    
    <logo size="60"/>
    
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down center "  v-for="item in items" :key="item.title">
    <v-btn color="primary"  class="btn" :to="item.link" nuxt flat>{{item.title}}</v-btn>
    </v-toolbar-items>
   
  </v-toolbar>
    <v-navigation-drawer dark absolute temporary mobile-break-point="1200" height="100vh" floating id="drawer"  class="primary-bg" app v-model="drawer">
        <v-toolbar    
      class="dark-bg"    
      height="80">
    <logo size="60" class="drawer-logo"/>
      
      </v-toolbar>
        <v-list v-for="item in items" :key="item.title" >
          <v-list-tile right active-class="active-drawer"  class="btn-drawer" nuxt :to="item.link" flat>

             <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
            
            
        </v-list>
  </v-navigation-drawer>

   <v-content id="scrolling-techniques">
      <slot />
  </v-content>
</vue-app>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {

  components:{
    Logo
  },
  data () {
      return {
        drawer: false,
         items: [
          { title: 'Home', icon: 'home', link:'/#' },
          { title: 'SMD Team', icon: 'group', link:'/team' },
          { title: 'Portfolio', icon: 'photo_library', link:'/portfolios' },
          { title: 'How do we work', icon: 'work', link:'/how-do-we-work' },
          { title: 'Contact', icon: 'contact_phone', link:'/contact' },
          { title: 'Blog', icon: 'library_books', link:'/blog' }
        ]
      }
  },
  methods:{
     getUnits: function(){
       this.$vuetify.theme.primary = '#4caf50'
       console.log('pff')
     }
 },
 beforeMount(){
    this.getUnits()
 },
}

</script>

<style scoped>
   #drawer{
     z-index: 100;
   }
   *{
    text-decoration: none;   
    }
    .btn{
    font-family: 'Roboto', sans-serif; 
    height: 60px;
      
    }
    .center{
      display: flex;
    flex-flow: wrap row;
    align-items: center;
    }
    .btn-drawer{
      font-family: 'Roboto', sans-serif; 
      color:#fff;
    width: 100%;
    }
    .active-drawer{
      color:var(--secondary) !important;
    }
  
    .item-title{
      text-align: left;
    }
    
</style>
