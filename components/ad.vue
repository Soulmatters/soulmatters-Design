<template>
  <div>
      <h3>Ad {{name}}</h3>
  </div>
</template>
<style scoped>
div{
    background: red;
    width:100%;
}
h3{
    font-size: 50px;
}
</style>
<script>
export default {
  props: ["name"]
}
</script>
