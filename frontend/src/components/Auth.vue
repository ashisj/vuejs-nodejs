<template>
    <div class="container">
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

             <!-- Modal content-->
                <div class="modal-content">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="active">
                            <a data-toggle="tab" href="#login">Login</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#register">Register</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <app-login></app-login>
                        <app-registration></app-registration>
                    </div>
                </div>
            </div>
        </div>            
    </div>
</template>
<script>
import Registration from './Registration.vue'
import Login from './Login.vue'
export default {
    components:{
        'app-registration' : Registration,
        'app-login' : Login
    }
}
</script>
<style scoped>
.modal-content{
    padding: 15px;
    width: 400px; 
}
@media (min-width: 446px){
    .modal-dialog {
        margin-top: 100px;
        width: 400px;
    }
}
</style>
