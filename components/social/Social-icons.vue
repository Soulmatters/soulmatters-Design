<template>
  <div>
     <a target="_blank" :href="facebook.link"> <facebook :color="facebook.color" :height="facebook.height" :width="facebook.width"/></a>
    <a target="_blank" :href="twitter.link">  <twitter :color="twitter.color" :height="twitter.height" :width="twitter.width"/></a>
     <a target="_blank" :href="google.link">  <google :color="google.color" :height="google.height" :width="google.width"/></a>
     <a target="_blank" :href="youtube.link">  <youtube :color="youtube.color" :height="youtube.height" :width="youtube.width"/></a>
  </div>
</template>
<script>
import facebook from "./facebook"
import twitter from "./twitter"
import google from "./google"
import youtube from "./youtube"
export default {
  components:{
      facebook,
      twitter,
      google,
      youtube
  },
  data(){
      return{
        facebook: {
        color: '#4267b2',
        height: 50,
        width: 50,
        link: "https://www.facebook.com/WebdesignSoulMatters/"
        },
        twitter: {
        color: '#1da1f2',
        height: 50,
        width: 50,
        link: "https://twitter.com/SMDesignRo"
        
        },
        google: {
        color: '#db4437',
        height: 50,
        width: 50,
        link: "https://plus.google.com/u/0/b/113546949216655460006/+Sm-designRo"
        
        },
        youtube: {
        color: '#fe0108',
        height: 50,
        width: 50,
        link: "https://www.youtube.com/c/Sm-designRo"
        
        }
      }
  }
}
</script>
<style scoped>
div{
    display: flex;
    flex-flow: wrap row;
}
div > * {
    margin:10px;
}
</style>
