<template>
    <div id="register" class="tab-pane fade">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <p class="text-center">Get started with your free account</p>
        <div class="text-center text-success" v-show="registrationSuccessMessage">{{registrationSuccessMessage}}</div>
        <div class="text-center text-danger" v-show="registrationErrorMessage">{{registrationErrorMessage}}</div>
        <!-- Registration Form -->
        <form>
            <div class="form-group">
                <input class="form-control" placeholder="Full name" type="text" v-model="register.name" @blur="checkName" @focus="clearNameError">
                <span class="error-message text-danger small">{{nameError}}</span>
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Email address" type="email" v-model="register.email" @blur="checkEmail" @focus="clearEmailError">
                <span class="error-message text-danger small">{{emailError}}</span>
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Create password" type="password" v-model="register.password" @blur="checkPassword" @focus="clearPasswordError">
                <span id="passwordError" class="error-message text-danger small">{{passwordError}}</span>
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Repeat the password" type="password" v-model="register.rePassword" @blur="checkRePassword" @focus="clearRePasswordError">
                <span class="error-message text-danger small">{{rePasswordError}}</span>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" id="signupBtn" @click.prevent="createAccount"> Create Account  </button>
            </div> <!-- form-group// -->
            <p class="text-center">Have an account? <a href="#login" data-toggle="tab">Log In</a> </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
//import JQuery from 'jquery'
export default {
    data() {
        return {
            register:{
                name:'',
                email:'',
                password:'',
                rePassword:''
            },
            nameError:'',
            emailError:'',
            passwordError:'',
            rePasswordError:'',
            registrationSuccessMessage:'',
            registrationErrorMessage:''
        }
    },
    methods: {
        checkName(){
            if(this.register.name.trim().length===0){
                this.nameError = "Name field is required";
  		    }else if(!/^[A-Za-z]+[A-Za-z ]*$/.test(this.register.name.trim())){
                this.nameError ="Name should contain only alphabets";
  		    } 
        },
        clearNameError(){
            this.nameError = ""
        },
        checkEmail(){
            if(this.register.email.trim().length===0){
  			    this.emailError = "Email field is required";
  		    }else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.register.email.trim())){
  			    this.emailError ="Please enter a valid email address eg:- a@gmail.com";
  		    } else {
                axios({
                    method:'post',
                    url:'http://localhost:3000/api/signup',
                    data:{
                        email:this.register.email
                    }
                }).then((response)=>{
                    this.emailError = ""
                }).catch((error)=>{
                    this.emailError = "Email is already exists"
                });
            }
        },
        clearEmailError(){
            this.emailError = ""
        },
        checkPassword(){
            if(this.register.password.trim().length===0){
  			    this.passwordError = "Password field is required";
  		    }else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.register.password.trim())){
  			    this.passwordError ="Password must contain at least 8 characters, including UPPER,lowercase and number";
  		    }
        },
        clearPasswordError(){
            this.passwordError = ""
        },
        checkRePassword(){
            if(this.register.rePassword.trim().length===0){
  			    this.rePasswordError = "Repeat Password field is required";
  		    }else if(this.register.password.trim() !== this.register.rePassword.trim()){
                this.rePasswordError = "Repeat password must match with password"
            }
        },
        clearRePasswordError(){
            this.rePasswordError = ""
        },
        createAccount(){
            if(!this.nameError.length && !this.emailError.length && !this.passwordError.length && !this.rePasswordError.length){
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/api/signup',
                    data:{
                        name:this.register.name,
                        email: this.register.email,
                        password: this.register.password,
                        rePassword : this.register.rePassword
                    }
                })
                .then((response)=>{
                    this.registrationErrorMessage = ''
                    this.registrationSuccessMessage =  response.data.message;
                })
                .catch((error) => {
                    this.registrationSuccessMessage = ''
                    this.registrationErrorMessage =  "You entered some invalid input";
                });
                jQuery.each(this.register,(key)=>{
                    this.register[key] = ''
                })    
            }
        }
    }
}
</script>
<style scoped>
 img{
   width: 100%;
   height: 100%;
} 
</style>
