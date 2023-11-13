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

 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap');
 
  #app {
font-family: 'Noto Sans Hebrew', sans-serif;
    text-align: center;
    color: white;
    background-color: var(--primary-color);
  }
h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Sans', sans-serif;

}
  #app.dark-mode {
    background-color: rgba(255, 255, 255, 0.771); 
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



