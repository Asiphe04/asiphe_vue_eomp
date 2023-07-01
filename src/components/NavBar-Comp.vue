<template>
    <header >
      <div class="container">
        <nav class="navbar navbar-expand-lg fixed-top">
          <!-- Logo-image -->
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
    </header>
</template>

<script>
    export default{}


</script>
<style>
    header{
        background-color: var( --primary-color);
    }
</style>