<template>
<h1>My Resume</h1>
<div class="container d-flex">
  <div class="col-6" id="img-container">
</div>
<div class="col-6">
  <p>Hover for more details</p>
  <div class="radio-inputs m-3 justify-content-center align-items-center ">
  <label class="radio">
    <input type="radio" name="radio" checked="" v-model="activeTab" value="skills">
    <span class="name">Skills</span>
  </label>
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="experience">
    <span class="name ">Experience</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="education">
    <span class="name">Education</span>
  </label>
</div>
<div v-if="activeTab === 'skills'" class="d-flex flex-wrap">
  <SkillsComp v-for="skill of skills" :key="skill.id" :skill="skill" />
</div>
   <div v-else-if="activeTab === 'education'" class="timeline">
  <h2>Education</h2>
  <ul>
    <timelineComp v-for="timeline of timelines" :key="timeline.id" :timeline="timeline" />
  </ul>
</div>
<div v-if="activeTab === 'experience'" class="experience">
  <h1>None (Yet)</h1>

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
  color: darkgray !important;
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
@media (max-width:300px){
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
  width: 300px;
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
  font-weight: 600;
}
#img-container{
  margin-bottom: 15px;
  height: 494px;
  background-image: url("https://i.postimg.cc/j5yJmsND/C12-Asiphe-Ndimlana-3.jpg");
  background-size: cover;
  background-position: center;
}
</style>