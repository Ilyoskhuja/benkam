<template>
  <div id="app">
     <header-nav/>
    
      <particles-bg type="ball" :color="white" :bg="true" />
     <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from './components/Header.vue'


export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
