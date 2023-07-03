<template>
  <h1 class="text-center">About me</h1>
  <div class="container d-flex m-4">
      <div class="content col-6" >
        <img src="https://i.postimg.cc/rwrkhW0f/cook.jpg" alt="" id="content-img">
        <h2 class="text-center">Front-End Developer</h2>
        <a href="https://github.com/Asiphe04" target="_blank"
            ><i class="connect fa-brands fa-github" id="Github"></i
          ></a>
      </div>
      <div class="content col-6 ms-2" id="content-text">
      <p class="lead-text text-start"> ... from pathways to lines of codes Hello world!,</p>
      <p class="lead-text text-start">I'm Asiphe Ndimlana, an energetic and dedicated frontend developer based in the famous city, Cape Town</p>

      <p class="lead-text text-start">My journey in coding began in 2019, during my Grade 10 year. Initially in High School I dabbled in Delphi 7 and 10 before pivoting to focus on HTML, CSS, Javascript and many more.</p>
  
      <p class="lead-text text-start"></p>
     
      <p class="lead-text text-start">As a developer, I adopt a formal tone of voice in myprofessional interactions.</p>
     
      <p class="lead-text text-start">On a more personal note, I spend my time working on my
                      numerous
                       <a class="text-link text-decoration-none" href="/projects">projects</a >
                      <br />
                      Feel free to
                      <a class="text-link text-decoration-none" href="/contact">reach out</a >
                      if you want to talk about work, technology or just geek
                      out in general</p>
      </div>

   
  </div>
</template>

<script>
export default{
  
}
</script>
<style scoped>
.connect{
  color: white !important;
  margin:0 10px !important ;
  padding: 5px !important;
  font-size: 45px !important;
}
.lead-text{
  margin: 5px ;
 font-size: 27px;
}
.text-link{
  color: var(--secondary-color);
}
#content-text{
  width: 63% !important;
}
#content-img{
  border-radius: 6%;
    height: 400px;
    width: 100%;
    /* background-size: cover; */
  /* background-position: center; */
  /* background: no-repeat; */
 /* background-image: url("https://i.postimg.cc/rwrkhW0f/cook.jpg"); */
}

</style>
