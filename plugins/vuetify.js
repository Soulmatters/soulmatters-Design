import Vue from 'vue'
import Vuetify from 'vuetify'

// You can also specify those components you are going to use for "a la carte" build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

Vue.use(Vuetify, {
  theme: {
    primary: '#9c27b0',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  }
})