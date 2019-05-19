<template>
  <div class="text-center">
    <h1>Welcome {{user.name}}</h1>
    <h4>Your email id is {{user.email}}</h4>
  </div>
</template>
<script>
import UserService from '@/settings/UserService.js';
import router from "../router"
export default{
  data(){
    return {
      token:'',
      user:{
        name:'',
        email:''
      }
    }
  },
  beforeCreate(){
    this.$store.commit('LoggedIn',true);
  },
  created(){
    this.token = this.$cookies.get('token')
    UserService.isValidToken(this.token)
    .then((response)=>{
        this.user.name = response.data.data.name,
        this.user.email = response.data.data.email
    })
    .catch((error)=>{
        router.push('/login');
    });
  }
}
</script>
<style>

</style>
