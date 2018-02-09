<template>
  <div>
      <div class="grid">
      <h1 class="display-3 secondary-font ">Contact</h1>
      <!-- <div class="map">
        <gmap-map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
      </div> -->
      <div class="contact-data">
       
      </div>
      <div class="contact-form">
  <v-form color="grey darken-4" v-model="valid"  name="contact" action="/thank-you" method="post" netlify>
   <v-card  flat>
      <v-container fluid>
          <v-layout row>
            <v-flex xs12>
      <v-card-text>
    <v-text-field
      label="Name"
      name="name"
      v-model="name"
      :rules="nameRules"
      :counter="20"
      required
    ></v-text-field>
    <v-text-field 
      label="E-mail"
      name="email"
      v-model="email"
      :rules="emailRules"
      required
      dark
    ></v-text-field>
    <v-text-field name="message" multi-line label="Message" v-model="message" :rules="messageRules" :counter="50" required></v-text-field>
    <input type="hidden" name="form-name" value="contact" />
    <v-btn
      type="submit"
      :disabled="!valid"
      elevated
    >
      submit
    </v-btn>
    
      </v-card-text>
      </v-flex>
          </v-layout>
        </v-container>
   </v-card>
  </v-form>
      </div>
      </div>
  </div>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  grid-template-rows: 100px auto;
  align-items: center;
  min-height: 100vh;
  grid-template-areas: 
    "title title title"
    ". form .";
    padding:20px;
}
@media (max-width:931px){
  .grid{
    grid-template-columns: auto;
    grid-template-areas: 
    "title"
    "form ";
  }
  .contact-form{
    grid-column: form;
  }
}
.contact-form{
  grid-area: form;
  background: #fff;
  padding: 20px;
  margin:20px;
  justify-self: center;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;

}
h1{
  grid-area: title;
  justify-self: center;

}
</style>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules: [
        (v) => !!v || 'Message is required',
        (v) => v && v.length >= 50 || 'Please explain yourself better :) !'
      ]
     
    }),
     head () {
    return {
      title: `Contact | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: 'Contact us for a web development inqury. We will get in touch as soon as possible' },
        { hid: 'og:image', property: 'og:image', content: '/contact/contact.jpg' },
      ]
    }
  },
 
  }
</script>


 <!--
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

import Vue from 'vue';
 
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC7Fs970nKhxtRuObdhU3MkarylObSdZFI',
      // libraries: 'places', //// If you need to use place input
    }
  });
 
  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }]
      }
    }
  }

-->