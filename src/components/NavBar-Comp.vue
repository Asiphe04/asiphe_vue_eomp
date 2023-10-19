<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
      <div class="justify-content-center text-center align-items-center d-flex">
        <img
          class="logo-img m-1"
          src="https://i.postimg.cc/7ZFBqyKL/an.png"
          alt="Logo-image"
        />
        <button @click="navbarNav"
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
        <div class="justify-content-center" >
          <div id="myLinks" class="d-flex">
            <ul class="navbar-nav ml-auto collapse navbar-collapse" id="navbarNav">
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
          </div>
        </div>
      </div>
    </nav>
  </header>


  
</template>

<script>
export default {
  methods: {
    'navbarNav': function() {
      const navbar = document.getElementById('navbarNav');
      navbar.classList.toggle('show');
    }
  }
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

