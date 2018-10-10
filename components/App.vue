<template>
  <div class="base-image spread">
    <div class="layer">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods : {
    createMessage () {
      
    }
  },

  mounted (){
    this.$router.push("/")
  }
}
</script>

<style lang="css">
.layer {
    background-color: rgba(8, 8, 8, 0.596);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
@font-face {
  font-family: orbitron;
  src: url("fonts/Orbitron-Medium.ttf") format("ttf");
}
.welcome-text {
  grid-area: 2 / 2 / 2 / 2;
  color: aliceblue;
  text-align: center;
  font-family: orbitron, Arial, Helvetica, sans-serif;
  font-style:normal;
}
.get-started {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 3 / 2 / 3 / 2
}
html, 
body {
    height: 100%;
    width: 100%;
    margin : 0px
}
.spread {
   width: 100%;
  height: 100%;
}
.sms-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows : auto auto auto auto;
  width: 100%;
  height: 100%;
}
.base-image {
  background-image: url("img/pexels.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover
}
</style>
