<template>
<div class="container"> 
  </div>
  <h1>Hi, I am Asiphe Ndimlana</h1> 
  <div class="d-flex justify-content-center">
  <h3  id="word" ref="wordRef">[ I AM A </h3> <h3> ]</h3>
</div>
  <br>


<a href="https://drive.google.com/file/d/11juEq9DjzG_qHKykgx0XDvfwXEL8YkCl/view?usp=sharing" download target="_blank">
<button class="btn"><i  class="fa fa-download"></i>Resume</button>
</a>

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
/* Style buttons */
.btn {
  background-color: var(--secondary-color);
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}


.container{
 margin-top: 40px;
    width: 320px;
  height: 312px;
  border-radius: 50%;
  background-image: url("https://i.postimg.cc/j5yJmsND/C12-Asiphe-Ndimlana-3.jpg");
  background-size: cover;
  background-position: center;
}
@media (max-width: 300px)  and (max-width: 400px) {
  .container {
  background-image: url("https://i.postimg.cc/j5yJmsND/C12-Asiphe-Ndimlana-3.jpg");
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 225px;
  border-radius: 50%;
}

}

</style>
