<template>
    <div class="container">
      <div id="login">
          <h4 class="text-center">Login Account</h4>
          <div class="text-danger text-center">{{errorMessage}}</div>
          <form>
              <div class="form-group">
                  <input class="form-control" placeholder="Email" type="text" v-model="login.email" @focus="clearErrorMessage">
              </div>
              <div class="form-group">
                  <input class="form-control" placeholder="Password" type="password" v-model="login.password" @focus="clearErrorMessage">
              </div>
              <div class="form-group">
                 <button type="submit" class="btn btn-primary btn-block" @click.prevent="loginUser"> Login </button>
              </div>
              <p class="text-center">New User? <router-link to="/register">Sign Up</router-link> </p>
          </form>
      </div>
    </div>
</template>
<script>
import UserService from '@/settings/UserService.js';
import router from "../router"
export default {
    data() {
        return {
            login:{
                email:'',
                password:''
            },
            errorMessage:''
        }
    },
    created(){
      this.$store.commit('LoggedIn',false);
    },
    methods: {
        loginUser(){
            UserService.loginAccount(this.login)
            .then((response)=>{
                if(response.data.status){
                    this.$cookies.set('token',response.data.token);
                    if(this.$route.params.nextUrl != null){
                        this.$router.push(this.$route.params.nextUrl)
                    } else {
                        router.push("/")
                    }
                } else {
                    jQuery.each(this.login,(key)=>{
                        this.login[key] = ''
                    })
                    this.errorMessage = response.data.message
                }
            })
            .catch((error)=>{
                this.errorMessage = "Authentication Failed"
            });
        },
        clearErrorMessage(){
            this.errorMessage = ''
        }
    },
}
</script>
<style scoped>
#login{
  width:400px;
  margin:30px auto;
}
</style>
