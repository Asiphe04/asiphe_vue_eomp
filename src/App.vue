<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonial">Testimonial</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 5px;
}
:root{
     --primary-color: #121212;
     --secondary-color: #FF004F;
     ---tertiary: #2B2A2A;
    }

</style>
