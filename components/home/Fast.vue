<template>
  <div class="primary-bg space">
    <span>
      <h2>We build fast and reliable applications</h2>
      <p>We focus on website's loading speed, especially on mobile devices, which are already over 50% of your future customers.</p>
      <nuxt-link to="/"><v-btn round outline large class="btn" flat>Discover</v-btn></nuxt-link>
    </span>
    <img v-lazy="image" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{
            image: "/home/home-electric.png"
        }
    }
}

</script>
<style scoped>
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
.space{
    padding-top: 100px;
    padding-bottom: 100px;
}
div{
    display: grid;
    grid-template-columns: 500px auto;
    grid-template-rows: auto;
    grid-template-areas:
    "message image";
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    box-shadow: border-box;
    width: 100%;
    

}

span{
    grid-area: message;
    color:#fff;

}
img{
    grid-area: image;
    max-width: 410px;
    width: 100%;
}
h2{
    font-size: 64px;
    font-weight: 900;
    margin: 20px 0;
    line-height: 1.2;
    font-family: 'Khula';
    padding:20px;
}
p{
    font-family: Roboto,sans-serif;
    font-weight: 300;
    width: 100%;
    max-width: 603px;
    font-size: 30px;
    display: block;
    padding: 20px;
}
@media (max-width:1000px){
   div{ grid-template-areas: 
    "message"
    "image";
    grid-template-columns:  auto;
    
}
h2{
    font-size: 40px;
}
}
</style>
