import Vue from 'vue';
import Vuex from 'vuex'
import CurrentUser from './modules/currentUser';
import UsersModule from './modules/user-module';
import ProductModule from './modules/product-module';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        CurrentUser,
        UsersModule,
        ProductModule,
    },
    state: {
    },
    mutations: {
    },
    actions: {
    },
})

export default store;


