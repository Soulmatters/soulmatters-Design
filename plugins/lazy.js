import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
 
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1,
  loading: '/uploads/loading.png'
})