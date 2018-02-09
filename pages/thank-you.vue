<template>
  <div>
      <div class="grid">
      <div class="content"><h1 class="display-4 secondary-font">Thank you!</h1>
        <div class="display-2 primary-font">We recieved your message and we are making sure you will get the response you need as soon as possible!</div>
        <v-btn class="white primary-font" large flat nuxt round outline to="/">Go to the front page</v-btn>
  </div>
  </div>
  </div>
</template>
<style scoped>
.grid{
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    color:#fff;
    min-height: 100vh;
}
.content{
    margin:40px;
}
.white{
    color:#fff;
    margin-top:40px;
}
</style>
<script>
export default {
   head () {
    return {
      title: `Thank you | SM-Design.ro`,
      meta: [
        { hid: 'description', name: 'description', content: '>We recieved your message and we are making sure you will get the response you need as soon as possible!' },
        { hid: 'og:image', property: 'og:image', content: '/home/space.jpg' },
      ]
    }
  },
}
</script>
