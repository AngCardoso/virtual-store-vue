<template>
<div id="app">
  <Navbar/>
  <router-view/>
  <Footer/>
</div>

</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default{
  components:{
    Navbar, Footer
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'PoiretOne';
  src: local('PoiretOne'), url('./fonts/PoiretOne-Regular.ttf') format('truetype');
}

* {
    font-family: 'PoiretOne', Helvetica, sans-serif;
    color: #707070;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app{
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  min-height: 100vh;

  background:  hsl(340, 10%, 80%);
  background: linear-gradient(28deg, hsl(309, 18%, 60%) 0%, hsl(340, 10%, 80%) 50%);
}

</style>
