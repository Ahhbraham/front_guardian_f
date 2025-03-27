<template>
    <div class="container">
      <img src="../assets/header.png" alt="header" />
      <h4 class="text__left">GUAR</h4>
      <h4 class="text__right">DIAN</h4>
  
      <button class="btn explore" @click="redirectToRegister">REGISTER</button>
  
      <h5 class="feature-1">Secure</h5>
      <h5 class="feature-2">Safeguard</h5>
      <h5 class="feature-3">Alert</h5>
      <h5 class="feature-4">Protect</h5>
    </div>
  </template>
  
  <script>
  import ScrollReveal from "scrollreveal";
  
  export default {
    name: "GuardianIntro",
    methods: {
      redirectToRegister() {
        this.$router.push("/RegisterPage");
      },
    },
    mounted() {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
  
      ScrollReveal().reveal(".container img", {
        duration: 1000,
        delay: 1200,
      });
      
      ScrollReveal().reveal(".container .text__left", {
        ...scrollRevealOption,
        origin: "right",
        delay: 2000,
      });
      
      ScrollReveal().reveal(".container .text__right", {
        ...scrollRevealOption,
        origin: "left",
        delay: 2000,
      });
      
      ScrollReveal().reveal(".container .explore", {
        duration: 1000,
        delay: 2500,
      });
      
      ScrollReveal().reveal(".container h5", {
        duration: 1200,
        interval: 300,
        delay: 3000,
      });
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap");
  
  :root {
    --primary-color: #E2E2F3;
    --text-dark: #232637;
    --white: #ffffff;
    --max-width: 1200px;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .btn {
    position: absolute;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    transition: 0.3s;
  }
  
  body {
    font-family: "Noto Sans JP", sans-serif;
  }
  
  .container {
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    max-width: var(--max-width);
    margin-inline: auto;
    overflow: hidden;
    background-color: #dbdce0;
  }
  
  .container::after {
    position: fixed;
    content: "";
    height: 100%;
    width: 0;
    top: 0;
    right: 0;
    background-color: var(--text-dark);
    z-index: -1;
    animation: body-bg 1s ease-in-out forwards;
  }
  
  @keyframes body-bg {
    0% {
      width: 0vw;
    }
    100% {
      width: 50vw;
    }
  }
  
  .container::before {
    position: fixed;
    content: "0";
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    font-size: 70rem;
    font-weight: 200;
    color: var(--white);
    z-index: -1;
    opacity: 0.5;
  }
  
  .container img {
    position: absolute;
    width: 100%;
    max-width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.8));
  }
  
  .container h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 5rem;
    color: var(--white);
    letter-spacing: 25px;
  }
  
  .text__left {
    transform: translate(calc(-50% - 250px), -50%);
  }
  
  .text__right {
    transform: translate(calc(-50% + 250px), -50%);
  }
  
  .container .explore {
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 225px));
    color: var(--text-dark);
    background-color: var(--white);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  }
  
  .container h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.2rem;
    font-weight: 500;
  }
  
  .container h5::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100px;
    top: 50%;
  }
  
  .feature-1 {
    color: var(--text-dark);
    transform: translate(calc(-50% - 300px), calc(-50% - 200px));
  }
  
  .feature-2 {
    color: var(--white);
    transform: translate(calc(-50% + 300px), calc(-50% - 200px));
  }
  
  .feature-3 {
    color: var(--text-dark);
    transform: translate(calc(-50% - 300px), calc(-50% + 200px));
  }
  
  .feature-4 {
    color: var(--white);
    transform: translate(calc(-50% + 300px), calc(-50% + 200px));
  }
  
  .feature-1::after,
  .feature-3::after {
    right: 0;
    transform: translate(calc(100% + 40px), -50%);
    background-color: var(--text-dark);
  }
  
  .feature-2::after,
  .feature-4::after {
    left: 0;
    transform: translate(calc(-100% - 40px), -50%);
    background-color: var(--white);
  }
  </style>