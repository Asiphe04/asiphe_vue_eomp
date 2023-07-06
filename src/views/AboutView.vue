<template>
  <h1 class="text-center">About me</h1>

  <div class="container d-flex m-4">
      <div class="content col-6">
        <img src="https://i.postimg.cc/QxYF9Vrr/IMG-20220430-WA0004.jpg" alt="" id="content-img">
        <h2 class="text-center">Front-End Developer</h2>
        <button >
         <img src="https://i.postimg.cc/rFv7yXwN/icons8-download-24.png" alt=""> 
         CV
</button>   
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
button {
  width: 5em;
  position: relative;
  height: 2.5em;
  border: 3px ridge  #FF004F;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  margin:14px
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: var(--primary-color);
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: var(--primary-color);
  transition: 0.5s;
}

button:hover::before, button:hover::after {
  transform: scale(0)
}

button:hover {
  box-shadow: inset 0px 0px 25px  #d10143;
}
.content{
  height: 469px;
  padding: 5px;
  border-radius: 5%;
  border: 1px solid var(--secondary-color);
}
.connect{
 color:  #FF004F;
  /* margin-top:0 10px !important ; */
  font-size: 45px !important;
}
.lead-text{
  margin: 5px ;
 font-size: 24px;
}
.text-link{
  color: var(--secondary-color);
}
#content-text{
  padding-left: 20px;
  width: 63% !important;
}
/* #content-img{
  border-radius: 6%;
    height: 350px;
    width: 100%;
} */
#content-img{
  border-radius: 6%;
  height: 350px;
  width: 100%;
  object-fit: cover;
}

@media (min-width: 300px) {
    .content {
      height: auto;
      margin-bottom: 20px;
    }
    #content-text {
      padding-left: 0;
      width: 100%;
    }
  }

  @media (min-width: 700px) {
    .content {
      height: 469px;
    }
  }
</style>
