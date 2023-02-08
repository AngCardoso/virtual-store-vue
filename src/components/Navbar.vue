<template>
  <nav>
    <router-link to="/"> <h1> Your online store</h1></router-link>
    <div id="others">
      <router-link to="/"><h1>Home</h1></router-link> 
      <router-link to="/login"><h1>Login</h1></router-link>
      <router-link to="/products"><h1>Products</h1></router-link>
      <router-link to="/about"><h1>About</h1></router-link>
      
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