<template>
    <div id="login" class="tab-pane fade in active">
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
            <p class="text-center">New User? <a data-toggle="tab" href="#register">Sign Up</a> </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
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
    methods: {
        loginUser(){
            axios({
                method:'post',
                url:'http://localhost:3000/api/login',
                data:{
                    email:this.login.email,
                    password:this.login.password
                }
            })
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                this.errorMessage = "Authentication Failed"
            });
            jQuery.each(this.login,(key)=>{
                this.login[key] = ''
            })
        },
        clearErrorMessage(){
            this.errorMessage = ''
        }
    },
}
</script>
<style scoped>

</style>
