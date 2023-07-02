<template>
 <NavBarComp/>
 <FooterComp/>
  <router-view/>
</template>
<script>

import NavBarComp from './components/NavBar-Comp.vue';
import FooterComp from './components/Footer-Comp.vue';
export default{
 components :{ FooterComp, NavBarComp}
}

</script>
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
