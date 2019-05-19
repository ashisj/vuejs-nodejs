import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
    state:{
        isLoggedin:false
    },
    getters:{
      isLoggedIn(state){
            return state.isLoggedin;
        }
    },
    mutations:{
        LoggedIn(state,status){
            state.isLoggedin = status;
        }
    }
});
