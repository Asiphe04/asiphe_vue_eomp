<template>
    <div :to="{name: 'testimonials', params: {id: testimonial.id}}">
      <div class="container">
        <div class="card">
          <div class="card-img">
            <img :src="testimonial.img" alt="" class="projImg">
          </div>
          <div class="card-body">
            <h6>{{ testimonial.fullName }}</h6>
            <p>{{ testimonial.role }}</p>
            <p>{{ testimonial.desc }}</p>
          </div>
        </div>
      </div> 

    </div>
</template>
<script>
    export default{
      props: ["testimonial"]
    }
</script>
<style scoped>

</style>