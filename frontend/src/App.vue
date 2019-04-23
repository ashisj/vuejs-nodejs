<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-background></app-background>
    <app-auth></app-auth>
  </div>
</template>

<script>
import Background from './components/Background.vue'
import NavBar from './components/NavBar.vue'
import Auth from './components/Auth.vue'
export default {
  name: 'app',
  components: {
   'app-background': Background,
   'app-navbar': NavBar,
   'app-auth' : Auth
  },
  created() {
  },
}
</script>

<style>

</style>
