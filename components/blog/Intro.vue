<template>
  <div>
      <img :src="image" >
     <span> 
       <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      </span>
  </div>
</template>

<script>
export default {
  props:["title", "image", "subtitle", "imageTag"]
}
</script>
<style scoped>
  img{
    width: 100vw;
    height: 500px;
    grid-area: image;
    object-fit: cover;
  }
  div{
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
    grid-template-areas: 
    "image";
    justify-content: center;
    align-items: center;
    width:100vw;
    position: relative;
  }
  @media (max-width:1175){
    h2{
      margin:0;
    }
  }
  span{

    grid-area: image;
    max-width: 500px;
    align-self: center;
    margin: 0 auto;

  }
  h1{
    text-align: center;
    font-size: 180px;
    color:#fff;
    font-family: 'Khula', sans-serif;
  }
  h2{
    text-align: center;
    font-size: 70px;
    color:#fff;
    font-family: 'Khula', sans-serif;
    line-height: 1;
    
  }
  @media(min-width:1176px){
    h2{
      margin-right:-400px;
    }
  }
     @media (max-width:887px){
     
       h1{
         font-size: 80px;
       }
       h2{
         font-size: 60px;
       }
    }
</style>
