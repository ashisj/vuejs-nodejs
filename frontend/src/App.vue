<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
   'app-navbar': NavBar
  },
  created() {
  },
}
</script>

<style>

</style>
