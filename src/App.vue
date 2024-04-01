<template>
  <Header/> <!-- Add this line to use the UpperMenu component -->
  <LandingPage></LandingPage>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
