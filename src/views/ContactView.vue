<template>
<!-- <h1  class="m-1">Contact</h1> -->
<div class="container d-flex">
    <!-- <div class="contact-form col-6 m-4">
        <span class="title">Leave a Message</span>
       <form
        class="form"
        action="https://formspree.io/f/mzblbdga"
        method="POST"
        @submit.prevent="submitForm"
      >
        <div class="group">
          <input placeholder="‎" type="text" v-model="formData.name" />
          <label for="name">Name</label>
        </div>
        <div class="group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
          />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea
            placeholder="‎"
            id="comment"
            name="comment"
            rows="5"
            v-model="formData.comment"
          ></textarea>
          <label for="comment">Message</label>
        </div>
        <button type="submit">Send!</button>
       
      </form>
    </div>
    <div class="col-6 m-4" id="contact-img">  
    </div> -->
</div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    async submitForm() {
  
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.comment
      ) {
        await Swal.fire({
          icon: "error",
          title: "Error",
          color: "white",
          background: "#FF004F",
          text: "Please fill in all fields",
        });
        return;
      }

     
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Form submitted successfully!",
        confirmButtonText: "OK",
        background: "#FF004F",
        color: "white",
      });
    },
  },
};
</script>
<style scoped>
.container{
  background-image: url('https://i.postimg.cc/1XH0DQGm/71-Ugwa-C4-Dj-L-AC-UF1000-1000-QL80-Dp-Weblab.jpg');
  height: 512px;
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  width: 100%;
}

@media (max-width:700px){
  .contact-form{
    width: 90% !important;
  }
  .title{
    display: none;
  }
  #contact-img{
    display: none;
  }
}
#contact-img{
  border-radius: 3%;
    height: 350px;
    width: 500px;
    background-image: url("https://i.ibb.co/X7G7842/IMG-20220430-WA0017.jpg");
    background-size: cover;
  background-position: center;
}
/* .container {
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
} */
.title {
  font-size: 24px;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 14px;
  color: white;
  position: absolute;
  top: -20px;
  left: 10px;
  /* background-color: yellow; */
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  color: var(--secondary-color);
  background-color: var(--tertiary-color);
}

.form .group input:placeholder-shown+ label, .form .group textarea:placeholder-shown +label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  background-color: white;
  border-color: var(--secondary-color);
}

.form .group input:focus+ label, .form .group textarea:focus +label {
  top: -20px;
  left: 10px;
  background-color: transparent;
  border-radius: 5%;
  color: var(--secondary-color);
  font-size: 14px;
}

.form .group textarea {
  height: 100px;
}
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
  margin:14px
}



button:hover {
  box-shadow: inset 0px 0px 25px  #d10143;
}


</style>