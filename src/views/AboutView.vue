<template>
  <br>
 

  <div class="container d-flex justify-content-center align-content-center text-center">
    <div class="col-2 mt-5">
     
     <h3 class="text-start">Profile</h3>
     <p class="text-start" style="font-size: 17px;">A little info about myself</p> 
     <!-- Information -->
   <h5 class="text-start">Full Name: </h5>
   <p class="text-start">Asiphe Ndimlana</p>
   <hr class="my-1" />
   <h5 class="text-start">DOB:</h5>
   <p class="text-start">03 September 2004</p>
   <hr class="my-1" />
   <h5 class="text-start">Languages:</h5>
   <p class="text-start">Xhosa and English</p>
   <hr class="my-1" />
   <h5 class="text-start">Gender:</h5>
   <p class="text-start">Male</p>
   <hr class="my-1" />
   <h5 class="text-start">Location:</h5>
   <p class="text-start">Phillip East, Cape Town</p>
   <hr class="my-1" />
   <h5 class="text-start">Cell Number:</h5>
   <p class="text-start">078 114 9972</p>
   <hr class="my-1" />
   <h5 class="text-start">Email:</h5>
   <p class="text-start email">asiphendimlana40@gmail.com</p>
   <hr class="my-1" />
   <h5 class="text-start">Willing to relocate:</h5>
   <p class="text-start">Yes</p>
   <hr class="my-1" />
    </div>
    <!-- End of information -->
    <div class="col-7 align-items-center justify-content-center text-center">
      <h1 class="text-center">About me</h1>
      <h3 class="text-center justify-content-center align-content-center align-items-center">Let me introduce myself</h3>
    
        <div class="img-container align-items-center justify-content-center text-center d-flex"></div>
      <div class="text-container text-center m-4">
        <p style="font-size: 20px;" class="text-start">
          I am a developer hailing from Cape Town.               
        My journey in coding began in 2019, during my Grade 10
         year.               
        Initially in High School I dabbled in Delphi 7 before
         pivoting to focus on HTML, CSS,  Javascript and many more.              
        As a developer, I adopt a formal tone of voice in my
         professional interactions.  
         On a more personal note, I spend my time working on my
         numerous <a class="text-link text-decoration-none" href="/projects">projects</a >.
          <br />
       Feel free to
      <a class="text-link text-decoration-none" href="/contact">reach out</a > if you want to talk about work or just geek out in general.
        </p>
     
    </div>
    </div>
    <div class="col-4 mt-5">
      <h2 class="mb-3">
       My hobbies
      </h2 >
        <br />
       
        <div id="interests-container" class="container">
          <!-- Soccer -->
          <img
            class="animate__animated animate__bounce animate__infinite"
            width="60px"
            src="https://i.postimg.cc/Bbp59qpM/soc-removebg-preview.png"
            alt=""
          />
          <!-- Coding -->
          <img
            class="animate__animated animate__bounce animate__infinite"
            width="60px"
            src="https://i.postimg.cc/853qZhHS/coding-removebg-preview.png"
            alt=""
          />
          <!-- Netflix -->
          <img
            class="animate__animated animate__bounce animate__infinite"
            width="60px"
            src="https://i.postimg.cc/ZYxxycmp/net-removebg-preview.png"
            alt=""
          />

          <!-- Chess -->
          <img
            class="animate__animated animate__bounce animate__infinite"
            width="60px"
            src="https://i.postimg.cc/dtWR5VL0/ch-removebg-preview.png"
            alt=""
          />
        </div>
        <!-- End of interests -->
        <!-- Inspirators -->
        <h1>My inspirators</h1>
        <div class="container" id="inspirators">
          <img src="https://i.postimg.cc/T3rsg4xx/messiwor.jpg" alt=""   class="inspirators-pic">
          <img src="https://i.postimg.cc/CxL8sZTK/mosh.jpg" alt=""    class="inspirators-pic">
          <img src="https://i.postimg.cc/VkJYCDxN/kh.jpg" alt=""    class="inspirators-pic">
                <img src="https://i.postimg.cc/BvD4htQ9/jp.jpg" alt=""    class="inspirators-pic">
          
        </div>

        <!-- End of inspirators -->
    </div>
 
  </div>
</template>

<script>
export default{
  
}
</script>

<style scoped>
.email{
  font-size : 13px !important;
}
.inspirators-pic {
  width: 9em;
  height: 9em;
  border-radius: 50%;
 
}

#inspirators{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px; 
}
#interests-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}
.img-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("https://i.postimg.cc/j5yJmsND/C12-Asiphe-Ndimlana-3.jpg");
  background-size: cover;
  background-position: center;
  margin: 0 auto; 
}


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
