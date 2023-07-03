<template>
    <!-- <header >
      <div class="container">
        <nav class="navbar navbar-expand-lg fixed-top">
         
          <a href="/src/views/HomeView.vue"
            ><img
              class="logo-img"
              src="https://i.postimg.cc/7ZFBqyKL/an.png"
              alt="Logo-image"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
            <i class="fas fa-bars fa-lg" style="color: #d7dce5"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/src/views/HomeView.vue">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="/src/views/AboutView.vue">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/views/ResumeView.vue">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/views/ProjectsView.vue">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/views/TestimonialView.vue">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/views/ContactView.vue">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header> -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light justify-content-center">  
      <div class="justify-content-center text-center align-items-center d-flex">
      <img
              class="logo-img"
              src="https://i.postimg.cc/7ZFBqyKL/an.png"
              alt="Logo-image"
          />   
    <div class="justify-content-center" id="navbarNav">
      <div id="myLinks" class="d-flex">
      <ul class="navbar-nav ml-auto collapse navbar-collapse" >
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects">Projects</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/testimonial">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
 
      </ul>
                    <label class="theme">
  <input class="input" checked="checked" type="checkbox">
  <svg width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="icon icon-sun"><circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line></svg>
  <svg viewBox="0 0 24 24" class="icon icon-moon"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>
</label> 
  </div>
    </div>
  
 </div>
   <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#myLinks"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
  </nav>  
  </header>
 
    <!-- Off-canvas menu for smaller screens -->
  <!-- <div id="offcanvas" class="offcanvas-collapse" :class="{ 'open': isOffcanvasOpen }">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div> -->
</template>

<script>
 export default {
  // setup() {
  //   const isOffcanvasOpen = ref(false);

  //   const toggleOffcanvas = () => {
  //     isOffcanvasOpen.value = !isOffcanvasOpen.value;
  //   };

  //   return {
  //     isOffcanvasOpen,
  //     toggleOffcanvas
  //   };
  // }
};
</script>
<style>
.theme{
  margin : 0px 15px;
}
  .logo-img{
   
    width: 3rem;
  
  }
  .nav-link{
    color : white;
  }
  #navbarNav a{
    color: white;
      width: 115px;
  height: auto;
  float: left;
  transition: .5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  margin: 0 2px;
  background: transparent;
  }
  #navbarNav a::before{
    color: white;
     position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
  }
  #navbarNav a:after{
    color: white;
      position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
  }
 #navbarNav a:hover{
  color: white;
  box-shadow: 0 5px 15px rgba( 0.5,0, 0, 0);
    /* background-color: var(--secondary-color); */
  }
   #navbarNav a:hover::before{
    color: white;
      border-color:var(--secondary-color);
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
   }
    #navbarNav a:hover:after{
      color: white;
        border-color: var(--secondary-color);
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .5s;
    }
    .nav-item{
       color: white;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
    }

    nav{

        background-color: var( --tertiary-color);
    }
    .navbar-toggler-icon{
      background-color: var( --primary-color);
    }
    .toggle-switch {
  position: relative;
  width: 100px;
  height: 50px;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.theme {
  --bg-color: #fff;
  --main-color: #323232;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-color);
  border-radius: 100%;
  border: 2px solid var(--main-color);
 
}

.input {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0;
}

.icon {
  position: absolute;
  top: calc(50% -13px);
  left: calc(50% -13px);
  width: 26px;
  height: 26px;
}

.icon.icon-moon {
  fill: var(--main-color);
}

.icon.icon-sun {
  stroke: var(--main-color);
  display: none;
}

.input:checked ~ .icon.icon-sun {
  display: block;
}

.input:checked ~ .icon.icon-moon {
  display: none;
}

.theme:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

</style>