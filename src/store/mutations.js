export function setProds(state, products) {
    state.products = products
}

export function setCart(state, cart) {
    state.cart = cart
}

export function setUser(state, user) {
    state.user.data = user;
    state.user.data.id = user.id;
}

export function setToken(state, token) {

    if (token) {
        state.user.token = token;
        sessionStorage.setItem('TOKEN', token)
    } else {
        sessionStorage.removeItem('TOKEN')
        state.user.token = null
    }
}


export function addToWishList(state, product_id) {
    if (!state.wishlist.includes(product_id)) {
        state.wishlist.push(product_id)
    }
}

export function removeFromWishList(state, product_id) {

    const index = state.wishlist.findIndex(id => id === product_id)
    if (index !== -1) {
        state.wishlist.splice(index, 1)
    }
}