import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store =new Vuex.Store({
    state:{
		user:'',
    },
    mutations:{
		setUser(state,user){
		    state.user=user
			uni.setStorage({
				key: 'user',  
				data: user  
			})  
		},
    },
    getters:{
       
    }
})
store.subscribe((mutation,state)=>{

})
export default store