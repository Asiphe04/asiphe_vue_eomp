<template>
 <NavBarComp/>
  <router-view/>
 
 <Footer/>
</template>
<script>
import NavBarComp from './components/NavBar-Comp.vue';
import Footer from './components/Footer.vue'
export default{
 components :{ NavBarComp, Footer,

  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    background-color: var(--primary-color);
  }

   /* rgb(226, 225, 225) */

  /* Dark mode styles */
  #app.dark-mode {
    background-color: white; 
    color:#121212;            
  }



  :root {
    --primary-color: #121212;
    --secondary-color: #FF004F;
    --tertiary-color: #2B2A2A;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>



