<template>
    <div :to="{name: 'testimonials', params: {id: testimonial.id}}" class="main m-2">
      <div class="container mb-2">
        <div class="card text-white justify-content-center align-items-center text-center">
          <!-- <div class="card-img mt-2"> -->
            <img :src="testimonial.img" alt="" class="TestImg mt-2">
          <!-- </div> -->
          <div class="card-body">
            <h5>{{ testimonial.fullName }}</h5>
            <p>{{ testimonial.role }}</p>
            <p>"{{ testimonial.desc }}"</p>
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
.card-img{
 
  width: 200px;
  height: 260px;
}
.TestImg{
  border-radius: 2%;
  width: 300px;
  height: 260px;
 object-fit: cover; 
}
.card{
 height: 455px;
  background-color: #141414;
}
.main{
  border-radius: 2%;
  border: 1px solid var(--secondary-color);;
}
</style>