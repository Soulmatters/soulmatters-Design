<template>
  <div>
    <div v-for="item in social" :key="item.name">
           <v-btn   fab  target="_blank" class="white primary-font" color="dark"  :href="item.link"> <v-icon class="icons"  :style="`color:${item.color}`">fa-{{item.name}}</v-icon></v-btn>
   </div>
  </div>
</template>
<script>

export default {

  data(){
      return{
      social:[
         {
        name: 'facebook',
        color: '#4267b2',
        height: 50,
        width: 50,
        link: "https://www.facebook.com/WebdesignSoulMatters/"
        },
         {
        name: 'twitter',
        color: '#1da1f2',
        height: 50,
        width: 50,
        link: "https://twitter.com/SMDesignRo"
        
        },
         {
        name: 'google',
        color: '#db4437',
        height: 50,
        width: 50,
        link: "https://plus.google.com/u/0/b/113546949216655460006/+Sm-designRo"
        
        },
         {
        name: 'youtube',
        color: '#fe0108',
        height: 50,
        width: 50,
        link: "https://www.youtube.com/c/Sm-designRo"
        
        }
          ]
      }
          
  }
}
</script>
<style scoped>
div{
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
}

</style>
