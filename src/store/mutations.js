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


export function addToWishList(state, productID) {
    if (!state.wishlist.includes(productID)) {
        state.wishlist.push(productID)
    }
}
export function removeFromWishList(state, productID) {
    const index = state.wishlist.findIndex(id => id === productID)
    if (index !== -1) {
        state.wishlist.splice(index, 1)
    }
}