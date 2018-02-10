<template>
  <div>
      <div class="grid">
        <div class="about-us primary-font">
                <h1 class="secondary-font">About us</h1>
               <p>SoulMatters Design it's a company that offers web design services. 
                   We use the latest technologies in web development and we successfully meet the most demanding requirements of our customers.</p>

<p>In our opinion, the first impression matters and the soul as well - fact which it can be observed in our work. It's Soulmatters Design and we create web pages with a unique, functional and user-friendly design.

We take care of creating the right image and functionality for every project and guiding our clients with valuable information.</p>

<p>In creating a website, our team use the latest web development technologies and this will drive our projects to new perspectives.</p>
<p> Soulmaters Design is a company with a young team, which constantly want to bring good changes for world wide web. Our team is ready to courageously accept the new challenges in web development.</p>

<p>Our team is extremely happy to "encode" a dream and then to reveal it as a successful website. Soulmatters Design is working with pleasure for it's customers and it's obtaining results through perseverence. </p>
<p>Now, among us, you can have a Web Progressive Application. Give to yourself a chance to have a performant website and the results won't be late.</p>
        </div>
        <v-card class="items" v-for="item in team" :key="item.name">
          <v-card-media  height="500px" :src="item.image"></v-card-media>
          <v-card-title primary-title>
            <div>
          <div class="primary-font headline ">{{item.name}}</div>
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
  data(){
    return {
      team:[
        {
          name:"Andra Niță",
          description: `My detail oriented skills have always been appreciated and were a great help to our team in every step of a project. I like to "code" web pages. It is a creative work that always come with new challenges. Also, I like to create written content for websites - adapting it to our client's requirements and optimizing search engine sites. I'll never stop earning because I'll never stop learning!`,
          image:'/uploads/andra.jpg',
          position: 'Fullstack developer, CEO',
          social: [
            {name:"facebook" , link:"https://www.facebook.com/soulmatters.ro", color:"#4267b2"},
            {name:"google-plus" , link:"https://plus.google.com/+AndraNitasoulmatters", color:"#db4437"},
            {name:"linkedin" , link:"https://www.linkedin.com/in/nita-andra/", color:"#0077B5"},
          ]
        },
        {
          name:"Paul Cozma",
          description: `Web design is one of the most important areas I have chosen to pursue. It is an exciting domain, in a continuous evolution, which offers new perspectives for those who want to represent themselves in a professional manner.
I can fulfill all my client's requirements in difficult projects. I help them in web design matters and putting all my soul for great results.`,
          image:'/uploads/paul.jpg',
          position: 'Fullstack developer, co-founder',          
          social: [
            {name:"twitter" , link:"https://twitter.com/PaulSoulMatters", color:"#1da1f2"},
            {name:"facebook" , link:"https://www.facebook.com/CozmaPaulSM?", color:"#4267b2"},
            {name:"google-plus" , link:"https://plus.google.com/+PaulCozma" ,color:"#db4437"},
            {name:"linkedin" , link:"https://www.linkedin.com/in/paul-cozma-68420b89/", color:"#0077B5"},
            
          ]
        }
      ]
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
