<template>
  <nav>
    <router-link to="/"> <h2> Your online store</h2></router-link>
    <div id="others">
      <router-link to="/"><h2>Home</h2></router-link> 
      <router-link to="/login"><h2>Login | Create account</h2></router-link>
      <router-link to="/products"><h2>Products</h2></router-link>
      <router-link to="/about"><h2>About</h2></router-link>
      
    </div>
  </nav>   

</template>
<script>
export default{
    name: "Navbar",
}
</script>
<style lang="scss" scoped>
nav{
  display: grid;
  grid-auto-flow: column;
  align-items: center;  
  width: 90%;
  margin: 2vh auto;
  background-color: transparent;

  #others{
    @extend nav;
    grid-column: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
  }

  a{
    text-decoration: none;
  }
}
</style>