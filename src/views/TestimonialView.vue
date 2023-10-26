<template>
<h1  class="m-1">My testimonial</h1>

<div class="container d-flex  align-items-center">
  <div class="hey col-6 align-items-center justify-content-center text-center">
    <h1 class="mt-5">What people say about me:</h1>
  </div>
  <div class="col-6 scrollable-div">
    <div v-if="testimonials" class="yho">
        <p>*scroll here</p>
   <TestCardComp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial" />
   </div>
   <div v-else><h1>Error:404</h1></div>
</div>
</div>
</template>

<script>
  import TestCardComp from "@/components/Testimonial-Card-Comp.vue"
  export default {
    computed:{
      testimonials(){
        return this.$store.state.testimonials
      }
    },
      mounted(){
        this.$store.dispatch("getTestimonials")
      },
      components: {TestCardComp}
   
  }
</script>

<style scoped>
@media (max-width:300px){ 
  .hey{
display: none;
}
.scrollable-div{
   
    width: 100%;
}
}
@media (max-width:700px){
  .hey{
display: none;
}
  .scrollable-div{
    width: 100% !important;
    overflow: hidden;
}
}
.hey{ 
  /* background-image: url("https://i.postimg.cc/PJz0CT2T/TABLES.png"); */
  width: 40%;
 }
.scrollable-div {
  width: 60%;
  height: 509px; 
  /* width: 50%; */
  overflow: auto; 
}
</style>