<template>
 <h1  class="m-1">My projects</h1>
 <div class="container">
  <h3  class="text-start text-center">A list of projects I've done</h3>
<p>Hover for more details</p>
  <div class="radio-inputs m-3 justify-content-center align-items-center text-center">
 
  <label class="radio" id="experience-btn">
    <input type="radio" name="radio" v-model="activeTab" value="htmlCss">
    <span class="name ">Html/Css</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="Javascript">
    <span class="name">Javascript</span>
  </label>
   <label class="radio">
    <input type="radio" name="radio"  v-model="activeTab" value="Vue">
    <span class="name">Vue</span>
  </label>
   <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="Nuxt">
    <span class="name">Nuxt</span>
  </label>
</div>
</div>
   <div v-if="projects" class="products_container row row-cols-4 m-0">
   <CardComp v-for="project of projects" :key="project.id" :project="project" />
   </div>
   <!-- <div v-else><h1>Error:404</h1></div> -->
</template>
<script>
  import CardComp from "@/components/Card-Comp.vue"
  export default {
    computed:{
      projects(){
        return this.$store.state.projects
      }
    },
      mounted(){
        this.$store.dispatch("getProjects")
      },
      components: {CardComp}
   
  }
</script>
<style scoped>
  .radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 360px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  color: grey !important;
  font-weight: 600;
}
@media (max-width:300px){ 
  .products_container{
flex-direction: column;
}
}
@media (max-width:700px){
  .products_container{
flex-direction: column;
}
}

</style>


