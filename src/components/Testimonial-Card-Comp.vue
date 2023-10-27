<template>
    <div :to="{name: 'testimonials', params: {id: testimonial.id}}" class="main m-2">
      <div class="container mb-2">
        <div class="card text-white justify-content-center align-items-center text-center">
         
            <img :src="testimonial.img" alt="" class="TestImg mt-2">
       
          <div class="card-body">
            <h5>{{ testimonial.fullName }}</h5>
            <p>{{ testimonial.role }}</p>
            <p class="text-start">"{{ testimonial.desc }}"</p>
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
.TestImg {
  border-radius: 50%;
  width: 250px;
  height: 250px; 
  object-fit: cover;
}

.card{
  /* width: 100%; */
 height: 455px;
  background-color: #313131;
}
.main{
  border-radius: 2%;
   background-color: #313131;
  border: 1px solid var(--secondary-color);;
}
@media (max-width:300px){ 
  .card{
    margin-top: 15px;
    height: 350px;
  }
  .main{
    height: 400px;
  width: 250px;
}
.TestImg{
  display: none;
}
}
@media (max-width:700px){ 

.TestImg{
  padding-top: 20px;
  /* display: none; */
}
}
</style>