import Vuex from 'vuex'
import Vue from 'vue'

import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex);

// Create our store
export default new Vuex.Store({
    modules: {
        products,
        cart
    }
})