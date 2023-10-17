<template>
<h1 class="m-1">My Resume</h1>
<div class="container d-flex">
  <div class="lol col-6">
    <img src="https://i.postimg.cc/HnxfC1bg/IMG-20230420-WA0018.jpg" alt="" id="img-container">
</div>
<div class="info-container col-6">
  <p class="hover-text">Hover for more details</p>
  <div class="radio-inputs m-3 justify-content-center align-items-center ">
  <label class="radio">
    <input type="radio" name="radio" checked="" v-model="activeTab" value="skills">
    <span class="name">Techn. Skills</span>
  </label>
  
  <label class="radio" id="experience-btn">
    <input type="radio" name="radio" v-model="activeTab" value="experience">
    <span class="name ">Experience</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="education">
    <span class="name">Education</span>
  </label>
   <label class="radio">
    <input type="radio" name="radio"  v-model="activeTab" value="Softskills">
    <span class="name">Soft Skills</span>
  </label>
   <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="achievements">
    <span class="name">Achievements</span>
  </label>
</div>
<div v-if="activeTab === 'skills'" class="d-flex flex-wrap">
  <SkillsComp v-for="skill of skills" :key="skill.id" :skill="skill" />
</div>
   <div v-else-if="activeTab === 'education'" class="timeline">
  <h2>Education</h2>
  <p>*hover</p>
  <ul>
    <timelineComp v-for="timeline of timelines" :key="timeline.id" :timeline="timeline" />
  </ul>
</div>
<div v-if="activeTab === 'experience'" class="experience">
  <h1 class="text-start">None (Yet)</h1>

</div>
</div>
</div>


</template>

<script>
import SkillsComp from "@/components/Skills-Comp.vue";
import timelineComp from "@/components/timeline-Comp.vue";

export default {
  data() {
    return {
      activeTab: 'skills'
    };
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
    timelines() {
      return this.$store.state.timelines;
    },
  },
  mounted() {
    this.$store.dispatch("getSkills");
    this.$store.dispatch("getTimelines");
  },
  components: { SkillsComp, timelineComp }
};
</script>

<style scoped>
.name{
  color: white !important;
}

.timeline ul{
  list-style-type:none;
  border-left:2px solid var(--secondary-color);
  padding:10px 5px;
}
.timeline{
  width:500px;
  color:#fff;
  padding:30px 20px;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
}
@media (max-width:700px){
#experience-btn{
  display: none;
}
  .info-container{
    width: 100% !important;
  }
  .hover-text{
    display: none;
  }
  .lol{
    display: none;
  }
}
@media (max-width:300px){
  .hover-text{
    display: none;
  }
  .lol{
    display: none;
  }
  .timeline{
    width:100%;
    padding:30px 5px 30px 10px;
  }

}
  .radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  /* width: 360px; */
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  color: grey !important;
  font-weight: 600;
}
.lol{
  margin-bottom: 15px;
  height: 486px;
  border-radius: 5%;
  background-repeat: no-repeat;
}
#img-container{
  margin-bottom: 15px;
  height: 486px;
  background-image: url("https://i.postimg.cc/HnxfC1bg/IMG-20230420-WA0018.jpg");
 border-radius: 5%;
  background-repeat: no-repeat;
}
</style>