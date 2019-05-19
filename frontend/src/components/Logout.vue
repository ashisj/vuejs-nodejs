<template>

</template>
<script>
import router from "../router"
export default {
    
    beforeCreate(){
      if(this.$cookies.get('token')){
          this.$cookies.remove("token");
      } 
      this.$store.commit('LoggedIn',false);
      router.push('/')
    }
}
</script>
<style scoped>
</style>
