<template>
<div class="container"> 
  </div>
  <h1>Hi, I am Asiphe Ndimlana</h1> 
  <div class="d-flex justify-content-center">
  <h3  id="word" ref="wordRef">[ I AM A </h3> <h3> ]</h3>
</div>
  <br>

  <button>
    <a href="https://drive.google.com/file/d/1YV4iQE5YoQ7DcHBQ9Ce6L-Zs1qlpftJM/view?usp=sharing" target="_blank" class="text-white text-decoration-none">
        <img src="https://i.postimg.cc/rFv7yXwN/icons8-download-24.png" alt="">  CV
    </a>
</button>

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
