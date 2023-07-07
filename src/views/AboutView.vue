<template>
  <h1 class="text-center">About me</h1>

  <div class="container d-flex m-3">
      <div class="content col-6" id="img-container">
        <img src="https://i.postimg.cc/QxYF9Vrr/IMG-20220430-WA0004.jpg" alt="" id="content-img">
        <h2 id="desc" class="text-center">Front-End Developer</h2>
        <button>
    <a href="https://drive.google.com/file/d/1YV4iQE5YoQ7DcHBQ9Ce6L-Zs1qlpftJM/view?usp=sharing" target="_blank" class="text-white text-decoration-none">
        <img src="https://i.postimg.cc/rFv7yXwN/icons8-download-24.png" alt="">  CV
    </a>
</button> 
      </div>
      <div class="content col-6 ms-2" id="content-text">
      <p class="lead-text text-start" id="second-text">I'm Asiphe Ndimlana, an energetic and dedicated frontend developer based in Cape Town</p>
      <p class="lead-text text-start">My journey in coding began in 2019, during my Grade 10 year. Initially in High School I dabbled in Delphi 7 and 10 before pivoting to focus on HTML, CSS, Javascript and many more.</p>
      <p class="lead-text text-start"></p>
      <p class="lead-text text-start" id="second-last-text">As a dev, I adopt a formal tone of voice in my professional interactions.</p>
     
      <p class="lead-text text-start" id="last-text"> I spend my time working on my
      
      <a class="text-link text-decoration-none" href="/projects">projects</a >
       <br />
       Feel free to
      <a class="text-link text-decoration-none" href="/contact">reach out</a >
      </p>
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
  height: 479px;
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
 font-size: 20px;
}
.text-link{
  color: var(--secondary-color);
}
#content-text{
  /* padding-left: 20px; */
  width: 50% ;
}

#content-img{
  border-radius: 6%;
  height: 350px;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 767px) , (max-width: 776px) {
  .container {
    flex-direction: column;
  }
  #content-img{
    height: 150px;
  }
  .lead-text{
  margin: 5px ;
 font-size: 13px;
}
.content{
  margin: 5px;
  width:90% !important;
  height: 220px;
}
#desc{
  font-size: 18px !important;
}
button{
  display: none;
}
.container{
  margin: 0px !important;
}
/* #second-text{
  display: none;
} */
/* #second-last-text{
  display: none;
} */
#last-text{
  display: none;
}

 .lead-text{
         word-wrap: break-word;
    overflow-wrap: break-word;
    }


  }
  @media only screen and (min-width: 600px) and (max-width: 776px) {
     .container {
    display: flex;
  }
    .content{
      width: 50% !important;
    }
    .container{
      align-items: center;
    }
    .lead-text{
         word-wrap: break-word;
    overflow-wrap: break-word;
    }
}
</style>
