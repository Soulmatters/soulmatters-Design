<template>
<div id="grid">
   <div  v-for="post in data" :key="post.title">
  
      <no-ssr>
      <nuxt-link :to="post.permalink" class="card-style">
      <v-card hover color="white" class="black--text">
        <v-card-media   v-if="post.card !== undefined" :src="post.card.replace(/static\//gi, '')" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ post.title }}</h3>
            <div class="description"> {{ post.description.substring(0, 160) }}...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="btn secondary-color" nuxt :href="post.permalink">Read more  <v-icon large color="secondary-color">keyboard_arrow_right</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      </nuxt-link>
      </no-ssr>

</div>
</div>
</template>
<script>
  export default {

    props:["data"]  
  
  }

</script>
<style scoped>
*{
  text-decoration: none;
}
    .description, .btn, h3{
     font-family: 'Roboto', sans-serif;   
    }
    .description{
      font-size: 16px;
    }
    .black--text{
     border-bottom: 5px solid;
     border-radius: 7px;
    border-color: var(--secondary) !important;
    }
   
    h3{
      font-size: 25px;
      font-family: 'Khula', sans-serif;
    }
    .card-style{
      margin:20px; max-width: 400px; width:100%;
    }
    #grid{
      display: grid;
      justify-content: center;
      max-width: 1300px;
      margin:0px auto;
      padding: 50px 0;
      grid-template-columns: auto auto auto;
      grid-gap: 20px;
    }
    @media (max-width:1297px){
      #grid{
        grid-template-columns: 400px 400px;
      }
    }
        @media (max-width:887px){
      #grid{
        grid-template-columns: auto;
      }
       .white{
         max-width: 400px;
         margin:20px;
         }
       h1{
         font-size: 50px;
       }
    }
</style>
