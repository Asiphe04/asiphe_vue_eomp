<template>
<div class="container">  
  </div>
  <h1>Hi, I am Asiphe Ndimlana</h1>
  <h3>[Developer, Creator , Dreamer]</h3>
  <br>

  <button>
   ! CV
</button>
</template>

<script>
export default {
 
}
</script>

<style scoped>

button {
  width: 10em;
  position: relative;
  height: 3.5em;
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

.container{
 margin-top: 40px;
    width: 320px;
  height: 320px;
  border-radius: 50%;
  background-image: url("https://i.postimg.cc/KjgrXp5K/messi.jpg");
  background-size: cover;
  background-position: center;
}
</style>
