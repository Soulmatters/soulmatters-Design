<template>
  <div id="grid">
      <h1 class="display-4 secondary-font">How do we work</h1>

      <div class="subgrid" v-for="item in work" :key="item.title">
        <div class="text">
      <h2 class="display-2 primary-font">{{ item.title }}</h2>
      <p class="primary-font headline"> {{ item.text }} </p>
      </div>
      <img :src="item.image" alt="">
</div>
  </div>
</template>
<style scoped>
  #grid{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    background: #fff;    
  }
  .subgrid{  
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 300px 1fr 1fr 300px;  
    grid-template-rows: 500px;
    align-items: center;
    justify-content: center;
    width: 100vw;    
  }
  @media (max-width:1204px){
    .subgrid{  
    grid-column: 1/2;
    grid-template-columns: 30px 1fr 1fr 30px;  
    grid-template-rows: 600px;
  }
  }
  @media (min-width:589px){
      img{
    max-width: 400px;
    width:100%;
    margin:0 auto;
  }
      #grid .subgrid:nth-child(odd) .text,
  #grid .subgrid:nth-child(even) img{   
    grid-column: 2/3;   
    justify-self: center;
    align-self: center;   
    grid-row: 1/2;
  }
  #grid .subgrid:nth-child(even) .text,  
  #grid .subgrid:nth-child(odd) img{    
    grid-column: 3/4;    
    grid-row: 1/2;  
  }
  }
  @media (max-width:588px){
    h2, p{
      margin:20px;
    }
    img{
      max-width: 200px;
      width:100%;
    margin:20px auto;
    }
    .subgrid{  
    grid-column: 1/2;
    grid-template-columns: auto;  
    grid-template-rows: auto auto;
    grid-template-areas: 
    "image" 
    "text";
  }
  #grid .subgrid .text{
    grid-area: text;
    
  }
  #grid .subgrid img{   
    grid-column: 1/4;  
    grid-area: image;
     
  }
 
  }


  h1{
    text-align: center;
    grid-column: 1/4;
   color:#212121;
   padding-top:100px;
    
  }
 h2, p{
   color:inherit;
 }
 p{
   font-weight: 300;
 }
 h2{
   margin-bottom: 40px;
   position: relative;
 }
 h2:after{
   content: "";
   position: absolute;
   width:20%;
   bottom:-10px;
   left:0;
   border-bottom: solid 10px var(--secondary);
 }

#grid .subgrid:nth-child(odd){
  background: var(--primary);
  color:#fff;
}
#grid .subgrid:nth-child(even){
  background: #fff;
  color:#212121;
}
</style>

<script>
export default {
  data(){
    return {
    work:[
      {title:"Directions", text:"We analyze business profile and try to understand the direction client wants to follow. Maybe an online store, a presentation website or just optimizing and securing services for an existing project.", image:"/uploads/direcction.png"},
      {title:"Strategy & Resources", text:"After we already established the directions, we discuss  about strategies and resources. We get a better view for the project needs and explain to our client about the resources involved. Each project is customized to the requirements of our client.", image:"/uploads/resources.png"},
      {title:"Collecting informations", text:"In this step, we gather all the information in order to build the site: we get a domain name, hosting services. If already were purchased we go further and ask our client for: text, images, section arrangement info, colour prefferences and other details.", image:"/uploads/information.png"},
      {title:"Preview", text:"A test version of the website will be shown to client. In this step, if it's the case, we talk with our client about the last website details. We gather the last informations in order to successfully finish the project.", image:"/uploads/preview.png"},
      {title:"Release process", text:"In this phase we setup the domain and configure the website on server and setting up the SSL Certificate. Also, we activate the building process to generate offline loading and setting up the HTTP/2 connection. We check the last detailes and... voilà.", image:"/uploads/release.png"},
      {title:"Maintenance", text:"We take care on our client website. We watch for a proper , server configuration, hosting and setting server to adapt it for a particular traffic.", image:"/uploads/maintenance.png"},
    ]
    }
  },
   head () {
    return {
      title: `How do we work | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: 'We analyze business profile and try to understand the direction client wants to follow. Maybe an online store, a presentation website or just optimizing and securing services for an existing project.' },
        { hid: 'og:image', property: 'og:image', content: '/uploads/kokiengros-mockup.jpg' },
      ]
    }
  },
}
</script>
