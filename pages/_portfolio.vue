<template>

<div id="post">
    <v-parallax class="cover" :src="post.image.replace(/static\//gi, '')"></v-parallax>
    <h1 >{{ post.title }}</h1>

    <div class="blur" ></div>
		<div class="article " v-html="post.body" />
    <img class="mockup" :src="post.mockup.replace(/static\//gi, '')" alt="">
</div>

</template>

<script>
export default {
   scrollToTop: true,
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/portfolio').get(route.path)
    }
  },
 
}
</script>
<style scoped>

.cover{
  height: 400px;
  width: 100vw;
  object-fit: cover;
  grid-area: intro;

  }
  .mockup{
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: block;
    grid-area: image;
  }
  h1{
    grid-area: intro;
    color:#fff;
    font-family: 'Khula', sans-serif;
    text-align: center;
    font-size: 112px;
    z-index: 99

  }
  #post{
    display: grid;
    grid-template-columns: auto 900px auto;
    grid-template-rows: auto;
    grid-template-areas:
      "intro intro intro"
      ". body ."
      ". image .";
      justify-content: center;
      align-items: center;
    
  }
  @media(max-width:1000px){
    #post{
    grid-template-columns: auto;
    grid-template-areas:
      "intro"
      "body"
      "image";  
    }
    h1{
      font-size: 50px;
    }
  }
  .article{
    grid-area: body;
        font-size: 21px;
    line-height: 1.58;
    letter-spacing: -.003em;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    margin:0 20px;
    box-sizing: border-box;
    position: relative;
    color:#212121;
  }
  .blur{
    background: inherit;
    width:100%; 
    max-width: 1200px;
    grid-area: body;   
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
  }
  .blur::before{
 content: "";
 background: inherit; 
 position: absolute;
 left: -250px;
 right: -250px;
 top: -250px; 
 bottom: -250px;
 box-shadow: inset 0 0 0 3000px rgba(255,255,255,1);
 filter: blur(10px);
}
</style>
