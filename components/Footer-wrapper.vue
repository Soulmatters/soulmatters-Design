<template>
  <div class="grid primary-bg">
     

    <!-- <div>© {{ new Date().getFullYear() }}</div> -->
    <div class="links">
        <h2>Usefull links</h2>
    <div v-for="item in items" :key="item.title">
        <nuxt-link class="link " :to="item.link">{{item.title}}</nuxt-link>
    </div>
        <a class="link " target="_blank" href="https://ec.europa.eu/consumers/odr/main/?event=main.home.show">SOL</a>
    
    </div>

    <div class="info">
        <h2>Company information</h2>
        <div class="infor"> <strong> Adress:</strong> Splaiul Independeței, 273, sector 6, Bucharest, Romania </div>
        <div class="infor"> <strong> Email:</strong> <a href="mailto:contact@sm-design.ro" class="link"> contact@sm-design.ro</a> </div>
        <div class="infor"> <strong> Phone:</strong> <a class="link" href="tel:+40727472226"> +40727472226</a></div>
        <div class="infor"> <strong> Soulmatters Design SRL-D</strong> <br/>Unic registration number: 35751973 <br />VAT Number: RO37121567 <br />EU ID: ROORNCJ40/3208/2016</div>
    </div>

     <div class="social">
          <h2>Social</h2>
     <Social-icons/>
     <img class="mobil" src="/uploads/3d-secure.png" alt="">
      </div>
  </div>
</template>
<style scoped>
    .grid{
        display: grid;
        grid-template-columns: auto repeat(3, 400px) auto;
        padding: 50px 0;
        grid-gap: 20px;
    }
    @media (max-width:826px){
        .grid{
            grid-template-columns: auto;
            padding: 20px;
        }
    }
    @media  (min-width:827px) and (max-width:1272px){
        .grid{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            justify-content: center;
          
        }
         .social{
             grid-column: span 2;
         }
    }
     @media (min-width:1273px){
        .social{
        grid-column: 4/5;
        justify-self: center;
    }
    .links{
        grid-column: 2/3;
    }
     }
    .social{
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
    .links{
        justify-self: center;
    }
    .link{
        color:#fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        transition: all .3s ease-in;
        line-height: 1.5;
    }
    .link:hover{
        color:var(--secondary)
    }
    h2{
        color:#fff;
        text-align: center;
        font-size: 25px;
    }
    .mobil{
        align-self: flex-end;
        justify-self: center;
        height: 32px;
    }
    .links h2{
        max-width: 150px;
    }
    .info{
        color:#fff;
        font-size: 19px;
        justify-self: center;
    }
    .infor{
        margin-bottom: 10px;
        line-height: 1.6;
    }
    .social h2{}
</style>

<script>
import SocialIcons from '~/components/social/Social-icons.vue'
export default {
  components:{
      SocialIcons
  },
  data(){
      return{
          items: [
          { title: 'Home',  link:'/#' },
          { title: 'SMD Team',  link:'/team' },
          { title: 'Portfolio',  link:'/portfolios' },
          { title: 'How do we work',  link:'/how-do-we-work' },
          { title: 'Contact',  link:'/contact' },
          { title: 'Blog',  link:'/blog' },
          { title: 'Terms and conditions',  link:'/terms' },
        ]
      }
  }
}
</script>
