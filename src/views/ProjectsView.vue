<template>
 <h1>My projects</h1>
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