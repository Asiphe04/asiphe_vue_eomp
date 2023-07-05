<template>
 <h1>My projects</h1>
 <h3  class="text-start text-center">A list of projects I've done</h3>
 <h4 class="text-start m-2">PS : I'm still designing this page, please visit my GitHub for better understanding of my work or skills.</h4>
 <div class="wrapper">
  <div class="option">
    <input class="input" type="radio" name="btn" value="option1" checked="">
    <div class="btn">
      <span class="span">Option</span>
    </div>
  </div>
  <div class="option">
    <input class="input" type="radio" name="btn" value="option2">
    <div class="btn">
      <span class="span">Option</span>
    </div>  </div>
  <div class="option">
    <input class="input" type="radio" name="btn" value="option3">
    <div class="btn">
      <span class="span">Option</span>
    </div>  
  </div>
</div>
   <div v-if="projects" class="products_container row row-cols-4 m-0">
   <CardComp v-for="project of projects" :key="project.id" :project="project" />
   </div>
   <div v-else><h1>Error:404</h1></div>
</template>
<script>
  import CardComp from "@/components/Card-Comp.vue"
  export default {
    computed:{
      projects(){
        return this.$store.state.projects
      }
    },
      mounted(){
        this.$store.dispatch("getProjects")
      },
      components: {CardComp}
   
  }
</script>
<style scoped>
  .wrapper {
  --font-color-dark: #323232;
  --font-color-light: #FFF;
  --bg-color: #fff;
  --main-color: #323232;
  position: relative;
  width: 250px;
  height: 36px;
  background-color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  box-shadow: 4px 4px var(--main-color);
}

.option {
  width: 80.5px;
  height: 28px;
  position: relative;
  top: 2px;
  left: 2px;
}

.input {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  appearance: none;
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.span {
  color: var(--font-color-dark);
}

.input:checked + .btn {
  background-color: var(--main-color);
}

.input:checked + .btn .span {
  color: var(--font-color-light);
}
</style>