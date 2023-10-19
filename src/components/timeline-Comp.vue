<template>
    <div :to="{name: 'timelines', params: {id: timeline.id}}">  
   
      <li>
        <span>{{ timeline.period }}</span>
        <div class="content">
          <h4>{{timeline.place}}</h4>
          <h3>{{ timeline.course }}</h3>
          <p>
          {{timeline.desc}}
          </p>
        </div>
      </li>
   
  </div>
   

  </template>
  <script>
  export default{
  props: ["timeline"]
}

</script>
<style scoped>

 ul li{
  padding:20px 20px;
  position:relative;
  cursor:pointer;
  transition:.5s;
}
 ul li span{
  display:inline-block;
  background-color:var(--secondary-color);
  border-radius:25px;
  padding:2px 5px;
  font-size:15px;
  text-align:center;
}
 ul li .content h3{
  color:var(--secondary-color);
  font-size:17px;
  padding-top:5px;
}
 ul li .content p{
  padding:5px 0px 15px 0px;
  font-size:15px;
}
 ul li:before{
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
 ul li:hover{
  background-color:#ff83aa;
} ul li:hover:before{
  background-color:#0F0;
  box-shadow:0px 0px 10px 2px #0F0;
}
@media (max-width:300px){
 ul li .content h3{
    color:#34ace0;
    font-size:15px;
  }

}

</style>