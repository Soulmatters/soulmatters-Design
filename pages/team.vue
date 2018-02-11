<template>
  <div>
      <div class="grid">
        <div class="about-us primary-font">
                <h1 class="secondary-font">{{team.title}}</h1>
              	<div class="article" v-html="team.body" />
        </div>
        <v-card class="items" v-for="item in team.team" :key="item.firstname">
          <v-card-media  height="500px" :src="item.image.replace(/static\//gi, '')"></v-card-media>
          <v-card-title primary-title>
            <div>
          <div class="primary-font headline ">{{item.firstname  + ' ' +item.lastname}}</div>
          <span class="gre--text">{{item.position}}</span>
          </div>
          <div class="description primary-font">{{item.description}}</div>
          </v-card-title>
          <div class="social">
             <v-card-actions>
          <div v-for="item in item.social" :key="item.name">
           <v-btn   fab  target="_blank" class="white primary-font" color="dark"  :href="item.link"> <v-icon class="icons"  :style="`color:${item.color}`">fa-{{item.name}}</v-icon></v-btn>
          </div>
             </v-card-actions>
          </div>
        </v-card>
      </div>
  </div>
</template>
<style scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  max-width: 1000px;
  margin: 40px auto;
  grid-gap: 20px;

}
.article{
  font-size: 19px;
}
@media (max-width:860px){
  .grid{
    grid-template-columns: 1fr;
  }
  .about-us{
    grid-column: span 1 !important;
  }
}
.white{
  background-color: #fff;
  color:#212121;
  
}
h3{
  font-weight: 800;
  font-size: 30px;
}
.description{
  font-size: 17px;
}
.items{
  max-width: 400px;
  background-color: #fff;
  justify-self: center;
  margin:10px;
  
}
.social{
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
}
.icons{
}
.about-us{
  grid-column: span 2;
  background: #fff;
  padding: 20px;
}
.about-us p{
  font-size: 19px;
}
</style>

<script>
export default {
async asyncData ({ app, route }) {
    return {
      team: await app.$content('/pages').get(route.path),

    }
  },
   head () {
    return {
      title: `Our team | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: 'SoulMatters Design it\'s a company that offers web design services. We use the latest technologies in web development and we successfully meet the most demanding requirements of our customers.' },
        { hid: 'og:image', property: 'og:image', content: '/home/space.jpg' },
      ]
    }
  },
}
</script>
