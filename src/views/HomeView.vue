<template>
<div class="container blur-animation"> 
  <!-- </div>
  <h1>Asiphe Ndimlana</h1> 
  <div class="d-flex justify-content-center">
  <h3  id="word" ref="wordRef">[ I am a </h3> <h3> ]</h3> -->
</div>
  <br>



<!-- <a href="/files/blue professional modern CV resume.pdf" download target="_blank"> -->
  
<!-- <button class="btn"><i  class="fa fa-download"></i>Resume</button> -->
<!-- </a> -->



</template>

<script>
export default {
  data() {
    return {
      words: [
        { text: "DEVELOPER", color: "red" },
        { text: "DREAMER", color: "#FF004F" },
        { text: "CREATOR", color: "#2B2A2A" },
      ],
      currentWordIndex: 0,
      currentLetterIndex: 0,
      currentWord: "",
      currentColor: "",
      wordElement: null,
    };
  },
  mounted() {
    this.wordElement = this.$refs.wordRef;
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.currentWord = this.words[this.currentWordIndex].text;
      this.currentColor = this.words[this.currentWordIndex].color;
      this.type();
    },
    type() {
      if (this.currentLetterIndex < this.currentWord.length) {
        let letterSpan = document.createElement("span");
        letterSpan.style.color = this.currentColor;
        letterSpan.textContent = this.currentWord.charAt(
          this.currentLetterIndex
        );
        this.wordElement.appendChild(letterSpan);
        this.currentLetterIndex++;
        setTimeout(this.type, 100);
      } else {
        setTimeout(this.erase, 1500);
      }
    },
    erase() {
      if (this.currentLetterIndex > 0) {
        this.wordElement.removeChild(this.wordElement.lastChild);
        this.currentLetterIndex--;
        setTimeout(this.erase, 50);
      } else {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.currentWord = this.words[this.currentWordIndex].text;
        this.currentColor = this.words[this.currentWordIndex].color;
        setTimeout(this.type, 1000);
      }
    },
  },
};
</script>

<style scoped>


.container {
  /* transition: filter 0.5s;  */
  background-image: url('https://i.postimg.cc/1XH0DQGm/71-Ugwa-C4-Dj-L-AC-UF1000-1000-QL80-Dp-Weblab.jpg');
  height: 512px;
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  width: 100%;
}

@keyframes blur {
  0% {
    filter: blur(10px);
  }

  50% {
    filter: blur(5px);
  }

  100% {
    filter: blur(0);
  }
}


.blur-animation {
  animation: blur 1s forwards;
}

.btn {
  background-color: #2B2A2A;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

/* Darker background on mouse-over */
/* .btn:hover {
  background-color: var(--secondary-color);
}


.container{
 margin-top: 40px;
    width: 320px;
  height: 312px;
  border-radius: 50%;
 background-image: url("https://i.ibb.co/DDRywPM/stereo.png");
  background-size: cover;
  background-position: center;
}
@media (max-width: 300px)  and (max-width: 400px) {
  .container {
 background-image: url("https://i.ibb.co/DDRywPM/stereo.png");
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 225px;
  border-radius: 50%;
}

} */

</style>
