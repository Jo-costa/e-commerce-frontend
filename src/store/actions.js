import axiosClient from "../axios";


export function getProducts({
    commit
}) {
    return axiosClient.get('/products').then(response => {

        commit('setProds', response.data)
        if (response.data.prods) {
            commit('setProds', response.data.prods)
        }
        if (response.data.cart) {
            commit('setCart', response.data.cart)
        }

        return response
    })
}

export function addToCart({
    state
}, product) {
    let cart = state.cart

    const productInCart = cart.findIndex(item => item.product_id === product.Inventory.product_id)
    if (product.Inventory.stock < 1) {
        return 'Out of stock!'
    } else if (productInCart !== -1) {
        cart[productInCart].quantity++
        product.Inventory.stock--
    } else {
        cart.push({
            product_id: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
            img_url: product.Images[0].img_url
        })
        product.Inventory.stock--
    }

    const cartItems = cart

    const productInventory = product.Inventory
    const userid = state.user.data.id;

    const sendData = {
        cart: cartItems,
        inventory: productInventory,
        user_id: userid
    }

    return sendData
}

export function addToCartServer({
    commit
}, data) {
    return axiosClient.post('/addToCart', data).then(({
        data
    }) => {
        console.log("add: ", data);
        commit('setCart', data.cart)
        return data
    })
}

export function removeFromCart({
    state
}, product) {

    const products = state.products
    const productInventory = products.find((item) => item.id === product.product_id)

    let cart = state.cart

    const updateStock = productInventory.Inventory.stock + product.quantity

    //iterate each element in array, check if id of current 
    //item === product id of item being removed
    //if true condition is negated, filter function removes item from array
    cart = cart.filter(item => !(item.product_id === product.product_id))

    const user_id = state.user.data.id
    const product_id = product.product_id

    const updateDB = {
        cart: cart,
        user_id: user_id,
        product_id: product_id,
        stock: updateStock,
        quantity: product.quantity
    }

    console.log(updateDB.product_id);
    return updateDB


}

export function removeFromCartServer({
    commit
}, data) {
    return axiosClient.post('/removeFromCart', data).then(({
        data
    }) => {
        console.log("remove: ", data);
        commit('setCart', data.cart)
        return data
    })
}


export function decreaseQty({
    state
}, product) {

    console.log("asd");
    const products = state.products
    let cart = state.cart

    let producStock = products.find((item) => item.id === product.product_id)

    //remove item from cart if qty === 1

    console.log("qty: ", product.quantity);
    if (product.quantity < 1) {

        console.log("in");
        product.quantity--;
        cart = cart.filter(item => !(item.product_id === product.product_id))

        producStock.Inventory.stock++;

    } else {
        product.quantity--;
        producStock.Inventory.stock++;
    }


    const user_id = state.user.data.id
    const product_id = product.product_id
    const quantity = product.quantity
    const stock = producStock.Inventory.stock

    const updateDB = {
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        stock: stock
    }




    return updateDB
}

export function decreaseQtyServer({
    commit
}, product) {
    return axiosClient.post('/decreaseQty', product)
        .then(({
            data
        }) => {
            console.log("remove: ", data);
            commit('setCart', data.cart)
            return product
        })
}

export function increaseQty({
    state
}, product) {

    const products = state.products
    const cart = state.cart

    let producStock = products.find((item) => item.id === product.product_id)

    if (producStock.Inventory.stock > 0) {
        product.quantity++;
        producStock.Inventory.stock--;
    }


    const user_id = state.user.data.id
    const product_id = product.product_id
    const quantity = product.quantity
    const stock = producStock.Inventory.stock

    const updateDB = {
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        stock: stock
    }



    return updateDB
}

export function increaseQtyServer({
    commit
}, product) {
    return axiosClient.post('/increaseQty', product)
        .then(({
            data
        }) => {
            console.log("remove: ", data);
            commit('setCart', data.cart)
            return product
        })
}

export function addToWishListServer({
    commit
}, product) {
    return axiosClient.post('/addToWishlist', product)
        .then(({
            data
        }) => {

            const wishlist = []
            data.forEach(item => {
                wishlist.push(item.id)
            })
            console.log(data);
            commit('setWishlist', wishlist)
        })
}

export function removeFromWishListServer({
    commit
}, product) {
    return axiosClient.post('/removeFromWishlist', product)
        .then(({
            data
        }) => {

            const wishlist = []
            data.forEach(item => {
                wishlist.push(item.id)
            })
            console.log(data);
            commit('setWishlist', wishlist)
        })
}
export function login({
    commit
}, data) {
    //login function makes a POST request to 
    // /login endpoint using axiosClient.post('/login', data)

    // 'data' parameter here is the adminUser object passed from the
    // Login.vue component


    return axiosClient.post('/userLogin', data)
        .then(({
            data
        }) => {

            //If the backend server successfully authenticates the user, 
            //the response data containing the user information (data.adminUser)
            // and token (data.token) is committed to the store using 
            //commit('setUser', data.newUser) and commit('setToken', data.token)
            commit('setUser', data.user)
            commit('setCart', data.cart)
            commit('setToken', data.token)
            return data
        })
}

export function signup({
    commit
}, data) {
    return axiosClient.post('/userSignup', data).then(({
        data
    }) => {
        // commit('setUser', data.newUser)
        // commit('setToken', data.token)
        return data
    })
}

export function logout({
    commit
}, data) {
    return axiosClient.get('userLogout', {
            params: data
        })
        .then((response) => {
            console.log(response.data);
            commit('setToken', null)
            commit('setCart', response.data.cart)


            return response;
        })
}


export function updateName({
    commit
}, data) {
    return axiosClient.post('/update-name', data).then(({
        data
    }) => {

        console.log(data.username);
        commit('setUsername', data.username)
        return data
    })
}
export function updateEmail({
    commit
}, data) {
    return axiosClient.post('/update-email', data).then(({
        data
    }) => {

        commit('setEmail', data.email)
        return data
    })
}
export function updatePass({
    commit
}, data) {
    return axiosClient.post('/update-pass', data).then(({
        data
    }) => {

        return data
    })
}


// export function getAdmin({
//     commit
// }, data) {
//     return axiosClient.post('/admin', data)
//         .then(response => {
//             commit('setAdmin', response.data)
//             return response
//         })
// }


// //execute requests to backend for user authentication
// export function login({
//     commit
// }, data) {
//     //login function makes a POST request to 
//     // /login endpoint using axiosClient.post('/login', data)

//     // 'data' parameter here is the adminUser object passed from the
//     // Login.vue component


//     return axiosClient.post('/adminlogin', data)
//         .then(({
//             data
//         }) => {

//             console.log("AdminData", data.user);
//             //If the backend server successfully authenticates the user, 
//             //the response data containing the user information (data.adminUser)
//             // and token (data.token) is committed to the store using 
//             //commit('setUser', data.adminUser) and commit('setToken', data.token)
//             commit('setUser', data.user)
//             commit('setToken', data.token)
//             return data
//         })
// }

// export function logout({
//     commit
// }) {

//     return axiosClient.get('/adminlogout')
//         .then((response) => {
//             commit('setToken', null)

//             return response;
//         })
// }