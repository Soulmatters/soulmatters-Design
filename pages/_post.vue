<template>
<div id="post">

    <v-parallax v-if="post.image !== undefined" class="img" :src="post.image.replace(/static\//gi, '')"></v-parallax>
    <div class="heading">
    <h1 class="display-4 small">{{ post.title }}</h1>
</div>
    <div class="blur" ></div>
		<div class="article " v-html="post.body" />
</div>

</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  },
   head () {
    return {
      title: `${this.post.title} | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'og:image', property: 'og:image', content: this.post.image.replace(/static\//gi, '') },
      ]
    }
  },
}
</script>
<style scoped>

.img{
  height: 400px;
  width: 100vw;
  object-fit: cover;
  grid-area: intro;

  }
 .heading{
    grid-area: intro;
    color:#fff;
    font-family: 'Khula', sans-serif;
    text-align: center;
    z-index: 99;
    background: rgba(46, 125, 50, .8);
    padding: 40px 20px;
    max-width: 900px;
    margin:0 auto;
    align-self: flex-end;
    width:100%;
  }
  #post{
    display: grid;
    grid-template-columns: auto 900px auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "intro intro intro"
      ". body .";
      justify-content: center;
      align-items: center;
    
  }
  @media (max-width:913px){
     #post{
    grid-template-columns: auto;
    grid-template-areas:
      "intro "
      "body ";
     }
  }
  @media (max-width:485px){
    h1.small{
      font-size: 70px !important;
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
