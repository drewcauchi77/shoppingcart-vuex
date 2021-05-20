import axios from 'axios'

const state = {
    items: []
}

const getters = {
    allCartItems: (state) => state.items,
    cartTotalPrice: (state, getters) => {
        var total = 0

        for(var i = 0; i < getters.allCartItems.length; i++){
            total += getters.allCartItems[i].line_price
        }

        return total.toFixed(2)
    }
}

const actions = {
    async addProductToCart({ commit }, id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

        commit('pushProductToCart', response.data)
    }
}

const mutations = {
    pushProductToCart(state, item){
        var found = false
        var index = 0

        for(var i = 0; i < state.items.length; i++){
            if(state.items[i].id === item.id){
                found = true
                index = i
                break
            }
            index++
        }

        if(found == true){
            state.items[index].quantity++
            state.items[index].line_price = state.items[index].price * state.items[index].quantity
        }else{
            item.quantity = 1
            item.line_price = item.price
            state.items.push(item)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}