import axios from 'axios'

const state = {
    items: [],
}

const getters = {
    allCartItems: (state) => state.items
}

const actions = {
    async addProductToCart({ commit }, id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

        commit('pushProductToCart', response.data)
    }
}

const mutations = {
    pushProductToCart(state, item){
        item.quantity = 1
        state.items.push(item)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}