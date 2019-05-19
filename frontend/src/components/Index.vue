<template>
  <div>
    <app-background></app-background>
  </div>
</template>

<script>
import Background from './Background.vue'
import UserService from '@/settings/UserService.js';
export default{
  name:'Index',
  components: {
   'app-background': Background
  },
  created(){
    this.token = this.$cookies.get('token')
    UserService.isValidToken(this.token)
    .then((response)=>{
        this.$store.commit('LoggedIn',true);
    })
    .catch((error)=>{
        
    });
  }
}
</script>
