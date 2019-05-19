<template>
    <div id="register">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <p class="text-center">Get started with your free account</p>

        <div class="text-center text-danger" v-show="errorMessage">{{errorMessage}}</div>
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
            </div>
            <p class="text-center">Have an account? <router-link to="/login">Log In</router-link> </p>
        </form>
    </div>
</template>
<script>
import UserService from '@/settings/UserService.js';
import router from "../router"
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
            errorMessage:''
        }
    },
    beforeCreate(){
      this.$store.commit('LoggedIn',false);
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
                UserService.checkEmail({email:this.register.email})
                .then((response)=>{
                    if(!response.data.status){
                      this.emailError = response.data.message;
                    }
                }).catch((error)=>{
                    this.errorMessage = "Some error occoured"
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
            this.checkName();
            this.checkEmail();
            this.checkPassword();
            this.checkRePassword();
            if(!this.nameError.length && !this.emailError.length && !this.passwordError.length && !this.rePasswordError.length){
                UserService.createAccount(this.register)
                .then((response)=>{
                  console.log(response);
                  if(response.data.status){
                    // jQuery.each(response.message,(key)=>{
                    //     this.key = response.message[key]
                    // })
                    this.errorMessage =  "Registration Failed";
                    router.push("/home")
                  } else{
                    console.log(response.data.message);
                  }
                })
                .catch((error) => {
//                    this.registrationSuccessMessage = ''
                    this.errorMessage =  "Registration Failed";
                });
            }
        }
    }
}
</script>
<style scoped>
#register{
  width:400px;
  margin:30px auto;
}
</style>
