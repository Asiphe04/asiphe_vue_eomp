<template>
<h1>This is testimonial page</h1>
  <div class="container d-flex">
    <div class="col-8">
    </div>
    <div class="col-4 scrollable-div">
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
      <h1>Testimonial</h1>
    </div>
</div>
</template>
<script>
  import TestimonialCardComp from "@/components/Testimonial-Card-Comp.vue"
  export default {
    computed:{
      testimonials(){
        return this.$store.state.testimonials
      }
    },
      mounted(){
        this.$store.dispatch("getTestimonials")
      },
      components: {TestimonialCardComp}
   
  }
</script>
<style scoped>
.scrollable-div {
    border-radius: 2px solid green;
  height: 600px; 
  width: 100%; 
  overflow: auto; 
}
.container{
  background-image: url("https://i.postimg.cc/Gm7wP3rp/hulu-1.png");
}
</style>
