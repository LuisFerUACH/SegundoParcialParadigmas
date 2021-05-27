<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <Sidebar></Sidebar>
    <div class="center">
        <router-view></router-view>
        <div class="clearfix"></div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'



export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    Footer
  },
}
</script>


<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import './assets/css/styles.css';
</style>
