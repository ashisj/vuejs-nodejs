<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">WebSiteName</router-link>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <template v-if="isLoggedIn()">
                      <li><router-link to="/home">Home</router-link></li>
                      <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </template>
                    <template v-else>
                      <li><router-link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
                      <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> LogIn</router-link></li>
                    </template>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  data(){
    return{
      isLogin: false
    }
  },
/*  created(){
      this.isLogin = this.$store.getters.isLoggedIn
  },
*/
  methods:{
    isLoggedIn(){
        return this.$store.getters.isLoggedIn
    }
  }

}
</script>
<style scoped>
.navbar{
    margin-bottom: 0px;
}
</style>
