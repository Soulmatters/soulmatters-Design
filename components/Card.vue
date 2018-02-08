<template>
<div id="grid">
   <div  v-for="post in data" :key="post.title">
  <v-layout>
    <v-flex>
      <nuxt-link :to="post.permalink">
      <v-card hover color="white" class="black--text" style="margin:20px; max-width: 300px; width:100%;">
        <v-card-media   v-if="post.image !== undefined" :src="post.image.replace(/static\//gi, '')" height="200px">
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
    </v-flex>
  </v-layout>
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
    #grid{
      display: flex;
      flex-flow: wrap row;
      justify-content: center;
      max-width: 1200px;
      margin:0px auto;
      padding: 50px 0;
    }
    
</style>
