import {
    createStore
} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'


const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem('TOKEN'),
            data: {
                id: null
            },
        },
        products: [],
        cart: [],
        wishlist: [],
        orders: []

    },
    getters,
    mutations,
    actions,
    plugins: [createPersistedState({
        storage: window.localStorage
    })]

})

export default store;