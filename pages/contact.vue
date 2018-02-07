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
        <template>
  <form  id="form" action="/" name="contact" class="primary-font" netlify>
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
    ></v-text-field>
    <v-text-field name="message" multi-line label="Message" v-model="message" :rules="messageRules" :counter="50" required></v-text-field>
     <v-btn type="submit"
      >Submit</v-btn>
  </form>
</template>
      </div>
      </div>
  </div>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 900px 1fr;
  justify-content: center;
  align-items: center;
}
.contact-form{
  grid-column: 2/3;
  background: #fff;
  padding: 20px;

}
h1{
  grid-column: span 3;
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
     
    })
 
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