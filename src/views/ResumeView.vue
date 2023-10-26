<template>
<h1 class="m-1">My Resume</h1>
<div class="container d-flex">
  <div class="lol col-6">
    <img src="https://i.postimg.cc/HsszXLvy/an-logo-letter-monogram-slash-with-modern-logo-designs-template-vector-removebg-preview-1.png" alt="" id="img-container">
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
    <span class="name">Prof. Skills</span>
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
  <ul>
    <timelineComp v-for="timeline of timelines" :key="timeline.id" :timeline="timeline" />
  </ul>
</div>
<div v-if="activeTab === 'experience'" class="experience">

  <div class="timeline">
  <ul class="unlisted"> 
      <li class="list">
        <span>Oct 2023 - Present</span>
        <div class="content">
          <h4>LC Studio</h4>
          <h3>Intern</h3>
          <p>
         Currently persuing an AWS certificate
          </p>
        </div>
      </li> 
</ul>
</div>
</div>
<div v-if="activeTab === 'Softskills'" class="Softskills">
  <div class="interests container">

      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
           <i class="fa fa-bullhorn fa-3x" aria-hidden="true"></i>
            <h4>Public Speaking</h4>
          </div>
        </div>
      
       
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
           <i class="fa fa-question-circle fa-3x" aria-hidden="true"></i>
            <h4>Problem-solving</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
          <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <h4>Team Work</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
           <i class="fa fa-paint-brush fa-3x" aria-hidden="true"></i>
            <h4>Creativity</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
           <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <h4>Leadership</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">   
  <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
            <h4>Adaptability</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
           <i class="fa fa-tasks fa-3x" aria-hidden="true"></i>
            <h4>Work Ethic</h4>
          </div>
        </div>
         <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="fa fa-comments-o fa-3x" aria-hidden="true"></i>
            <h4>Communication</h4>
          </div>
        </div>
        
      
      </div>

    </div>
</div>
<div v-if="activeTab === 'achievements'" class="achievements wrapper d-flex flex-wrap">
    <div class="card p-2">
           <div class="img">
      </div>
      <img class="img-achive" src="https://i.postimg.cc/Bb2KWXSL/Networking-Basics-Badge20231020-29-hvhdj7.png" alt="">
      <div class="info">
        <h4>Networking Basics</h4>
      

      </div>
    </div>
    <div class="card p-2">
           <div class="img">
      </div>
      <img class="img-achive" src="https://i.postimg.cc/pry4wZkT/aws-educate-introduction-to-cloud-101.png" alt="">
      <div class="info">
        <h4>AWS Intro to Cloud 101</h4>
      

      </div>
    </div>
    <div class="card p-2">
      <div class="img">
      </div>
         <img class="img-achive" src="https://i.postimg.cc/c4z3qyQW/Operating-Systems-Basics-Badge20231006-29-7ws0e0-1-page-0001.jpg" alt="" >
     
      <div class="info">
        <h4>Operating Systems</h4>
     
        
      </div>
    </div>
    <div class="card p-2">
      
      <img src="https://i.postimg.cc/QCbTMDXM/IMG-20230922-WA0007.jpg" alt="" class="img-achive">
      <div class="info">
        <h4>Full- Stack Development</h4>
     
        
      </div>
    </div>
     <div class="card p-2">
      
      <img src="https://i.postimg.cc/qvPM97nd/IMG-20230928-095750.jpg" alt="" class="img-achive">
      <div class="info">
        <h4>Top Capstone Project (99%)</h4>
     
        
      </div>
    </div>
    
    
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
/* #img-container.dark-mode{
  background-image: url('https://i.postimg.cc/WzVpDC22/634455157d2e665d824a49064524b49a-removebg-preview.png');
} */
.img-achive{
  width: 100%;
  height: 190px;
}
.wrapper{
  /* width: 70%; */
  color: white;
  background: transparent;
  justify-content: space-around;
}
.card{

  color: white;
  border: 0.1em solid 2B2A2A;
    background-color: transparent;
}

.card:hover{
  background-color: var(--secondary-color);
}


.interests{
    padding: 30px;
}
.interests h4:hover{
color: var(--secondary-color);
}
 .unlisted> li{
  padding:20px 20px;
  position:relative;
  cursor:pointer;
  transition:.5s;
}
 .unlisted> li> span{
  display:inline-block;
  background-color:var(--secondary-color);
  border-radius:25px;
  padding:2px 5px;
  font-size:15px;
  text-align:center;
}
 .unlisted> li .content h3{
  color:var(--secondary-color);
  font-size:17px;
  padding-top:5px;
}
  .unlisted> li .content p{
  padding:5px 0px 15px 0px;
  font-size:15px;
}
 .unlisted> li:before{
  position:absolute;
  content:'';
  width:10px;
  height:10px;
  background-color:#34ace0;
  border-radius:50%;
  left:-11px;
  top:28px;
  transition:.5s;
}
  .unlisted>li:hover{
  background-color:#ff83aa;
} ul li:hover:before{
  background-color:#0F0;
  box-shadow:0px 0px 10px 2px #0F0;
}
@media (max-width:300px){
  .unlisted>li .content h3{
    color:#34ace0;
    font-size:15px;
  }

}

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
  border-radius: 5%;
}

#img-container {
  width: 450px; 
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
}

</style>