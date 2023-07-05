<template>
 <h1>My projects</h1>
 <div class="container">
  <h3  class="text-start text-center">A list of projects I've done</h3>
 <h4 class="text-start m-2">PS : I'm still designing this page, please visit my GitHub for better understanding of my work or skills.</h4>
 <div class="radio-inputs m-3 justify-content-center align-items-center">
  <label class="radio">
    <input type="radio" name="radio" checked="">
    <span class="name">HTML,CSS</span>
  </label>
  <label class="radio">
    <input type="radio" name="radio">
    <span class="name">JS</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio">
    <span class="name">Vue</span>
  </label>
</div>
<p>Hover for more details</p>
</div>
   <div v-if="projects" class="products_container row row-cols-4 m-0">
   <CardComp v-for="project of projects" :key="project.id" :project="project" />
   </div>
   <div v-else><h1>Error:404</h1></div>
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
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
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
  font-weight: 600;
}
</style>


