<template>
 <h1  class="m-1">My projects</h1>
 <div class="container">
  <h3  class="text-start text-center">A list of projects I've done</h3>
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


