<template>
    <div class="container">
      <div class="card">
          <p class="title">Card title</p>
          <div class="card-hidden">
              <p class="title-in">Card title</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia.</p>
              <a href="https://github.com/Asiphe04" target="_blank"
            ><i class="fa-brands fa-github" id="Github"></i
          ></a>
          </div>

      </div>
      <div class="card-border"></div>
  </div>

</template>


<script>
    export default{}
</script>

<style>
.card-hidden a{
     color: white !important;
  margin:0 10px !important ;
  padding: 5px !important;
  font-size: xx-large !important;
}
#Github:hover {
  color:#171515;
  
}
.container {
  position: relative;
  width: 250px;
  height: 270px;
}

.card {
  position: relative;
  width: 250px;
  height: 270px;
  background-image: url(https://i.postimg.cc/NfgMyfLH/test.jpg);
  border-radius: 8px;
  color: #232323;
  padding: 16px;
  border: 1px solid #232323;
  transition: all .5s ease-in-out;
  overflow: hidden;
}

.card-hidden {
  display: flex;
  transform: translateY(200%);
  flex-direction: column;
  gap: .5rem;
  transition: transform .5s ease-in, opacity .3s ease-in;
  opacity: 0;
}

.card-border {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 1px dashed #232323;
  border-radius: 8px;
  z-index: -1;
}

/*Hovers*/
.card:hover {
  transform: translate(-15px, -15px);
  border-color: #5bc0eb;
}

.card:hover .card-hidden {
  transform: translateY(0);
  opacity: 1;
}

.card:hover .title {
  transform: translateY(200%);
}

/*Text*/
.title {
  position: absolute;
  bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  transition: transform .25s ease-out;
}

.title-in {
  font-weight: 700;
  font-size: 1.25rem;
}

/*Button*/
.button {
  display: inline-flex;
  justify-content: center;
  padding: 8px;
  border-radius: 24px;
  font-weight: 600;
  background-color: #5bc0eb;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button:hover {
  background-color: #53aed4;
}






</style>