<template>
  <div :to="{name: 'skills', params: {id: skill.id}}">
    <div class="card m-2">
      <img :src="skill.img" alt="" class="img">
  <div class="textBox">
    <h1 class="text head">{{skill.skillName}}</h1>
    
  </div>
</div>
  </div>

</template>
<script>
      export default{
      props: ["skill"]
    }
</script>
<style scoped>
.card {
  width: 110px;
  height: 110px;
  background: #313131;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;
}



.img {
  height: 63%;
  position: absolute;
  transition: 0.2s ease-in-out;
  z-index: 1;
  border-radius: 10%;
}

.textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}

.textBox > .text {
  font-weight: bold;
}

.textBox > .head {
  font-size: 20px;
}

.textBox > .price {
  font-size: 14px;
}

.textBox > span {
  font-size: 12px;
  color: lightgrey;
}

.card:hover > .textBox {
  opacity: 1;
}

.card:hover > .img {
  height: 60%;
  filter: blur(7px);
  animation: anim 3s infinite;
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.04) rotate(-1deg);
}
</style>