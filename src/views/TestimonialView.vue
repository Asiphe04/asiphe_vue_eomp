<template>
<h1>This is testimonial page</h1>
<p>*scroll on testimonial</p>
<div class="container d-flex">
<div class="hey col-6 ">
  <h1>This is a list of people who I have testimonials of</h1>
</div>
    <div class="col-6 scrollable-div">
      <div v-if="testimonials">
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
.hey{ 
  /* background-image: url("https://i.postimg.cc/PJz0CT2T/TABLES.png"); */
  width: 40%;
 }
.scrollable-div {
  width: 60%;
    border-radius: 2px solid green;
  height: 600px; 
  /* width: 50%; */
  overflow: auto; 
}

</style>