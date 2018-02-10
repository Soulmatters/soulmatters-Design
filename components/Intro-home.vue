<template>
  <div>
      <span>
      <h1>SM-DESIGN</h1>
      <h2>Your web application is now accessible to over 5 billion devices</h2>
          <nuxt-link to="/"><v-btn round outline large class="btn" flat>Discover</v-btn></nuxt-link>
      </span>
        <img :src="image" alt="">
  </div>
</template>
<script>
export default {
  data(){return{
      image: "/home/space.jpg"
  }}
}
</script>



<style scoped>
div{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto minmax(300, 1fr);
    grid-template-areas: 
    "title image";
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    width: 100%;
}
@media (min-width:1000px){
    div{
    height: 100vh;

    }
}
@media (max-width:1000px){
   div{ grid-template-areas: 
    "title"
    "image";
    grid-gap: 0;
}
.btn{
    margin:20px auto;
    display: block;
}
h1,h2{
    text-align: center;
}
img{
    margin:20px auto;
}
}
span{
    grid-area: title;
}
h1{
    padding:20px;
    font-family: 'Khula', sans-serif;
    font-weight: 900;
    color: #fff;
    margin-bottom: 20px;
    font-size: 80px;
    text-shadow: 2px 3px 8px #212121;
}
h2{
    padding:20px;
    font-family: 'Roboto', sans-serif;
    color:#fff;
    font-weight: 300;
    width: 100%;
    max-width: 603px;
    font-size: 30px;
    text-shadow: 2px 3px 8px #212121;
}
img{
    border-radius: 50%;
    width:100%;
    max-width: 400px;
    grid-area: image
}
.btn{
    color:#fff;
    text-decoration: none;
    font-size: 21px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background: rgba(0, 0, 0, .7);
    line-height: 2;
    margin-top: 40px;
}
*{
    text-decoration: none;
}
</style>
