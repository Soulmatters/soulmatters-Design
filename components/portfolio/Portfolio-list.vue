<template id="portfolio">
<div id="main">
  <h2 class="display-3 primary-font">Portfolio</h2>
<div id="grid">

<nuxt-link :class="'items secondary-font'+ ' ' + 'grid-' + item.meta.index" :to="item.permalink" v-for="item in items" :key="item.title">
  <img :src="item.image.replace(/static\//gi, '')" alt="">
  <h3>{{item.title}}</h3>
  <div class="border"></div>
  <div class="servicii">
    <div  v-for="item in item.servicii" :key="item.title">
    <v-icon>adjust</v-icon> <span>{{item.serviciu}}</span>
  </div>
    </div>
</nuxt-link>
</div>
</div>
</template>
<script>
export default {
  props:["items"]
}
</script>

<style scoped>
 img{
     max-width: 500px;
     width:100%;
     z-index: 70;
     position: relative;
     
 }
 h2{
   grid-area: title;
   text-align: center;
   color:#fff;
   
 }
#grid{
  display: flex;
  margin:0 auto;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
}
#main{
  background: var(--dark);  

}
@media(max-width:1000px){

}
.items{
  max-width: 500px;
  margin:20px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 250px 50px;
  grid-template-areas:
   "card"
   "bottom";
  overflow: hidden;
}
.servicii{
  grid-area: bottom;
  color:#fff;
  z-index: 99;
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  background: var(--dark)
}
.servicii span{
  margin-right:10px;
}
.items img{
  grid-area: card;
  transition: all .3s ease-in-out;
  height: 250px;
  width: 100%;
  object-fit: cover;

}
.items h3{
  grid-area: card;
  align-self: flex-end;
  font-size: 25px;
  color:#fff;
  text-decoration: none;
  background: var(--dark);
  font-weight: bold;
  z-index: 99;
  width:60%;
  padding: 10px;
  text-align: center;
  position: relative;
}
*{
  text-decoration: none;
}
.border{
  border-bottom: solid 10px var(--light);
  width:20%;
  z-index: 99;
  transition: all .3s ease-in-out;
  grid-area: card;
  position: relative;
  
}
.items:hover > img{
  transform: scale(1.2)
  
}
.items:hover > .border{
transform: scaleX(4);
}
.portfolio{
}
.grid-0{
  grid-area: grid-0;
}
.grid-1{
  grid-area: grid-1;
}
.grid-3{
  grid-area: grid-3;
}
.grid-2{
  grid-area: grid-2;
}
</style>
