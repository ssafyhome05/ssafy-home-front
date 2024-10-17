<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Home />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
    /* @import './assets/css/home.css';
    @import './assets/css/styles.css';
    @import './assets/css/nav.css';  */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
      /* position:relative;
      display: flex;
      overflow: hidden;
      top:0;
      width:100%;
      height:100vh;
      transition: 0.5s;
      margin: 0;
      padding: 0; */
    /* margin-top: 60px; */
    /* width:100%;
    height:100%;
    margin: 0;
    overflow: hidden;
    padding: 0; */
  }

  html {
      /* height: 100%;
      width: 100%;
      margin: 0;
      padding: 0; */
      overflow: hidden;
  }

  body {
      /* height: 100%;
      width: 100%; */
      overflow: hidden;
      /* height: 100%; */
      /* margin: 0;
      padding: 0;
      border: 0; */
  }
</style>
