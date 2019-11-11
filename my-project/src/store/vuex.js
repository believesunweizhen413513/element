import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        search: {
            searchText: '',
        },
        // 存到token里面

        // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''

    },
    mutations: {
        setSearchText(state, newValue) {
            state.search = newValue
        },
        // 这里拿登录状态，查看是否有变化
        // changeLogin(state, user) {
        //     state.Authorization = user.Authorization;
        //     localStorage.setItem('Authorization', user.Authorization);
        // }

    },
    actions: {
        setSearchText(context, newValue) {
            context.commit('setSearchText', newValue)
        },


    },
    getters: {
        getSearchText(state) {
            return state.search
        },

    }
})