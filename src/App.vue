<template>
  <Navbar v-if="hideNavAndFooter" />
  <router-view @add-to-cart="addToCart" @remove-from-cart="removeFromCart" @decrease-qty="decreaseQty"
    @increase-qty="increaseQty" @toggle-favourite="toggleFav" @checkout-items="checkout" :products="products"
    :orders="orders" :cart="cart" :fav="fav" @update-name="updateName" @update-email="updateEmail"
    @update-pass="updatePass" :invalidPassword="invalidPassword" class="flex-1"></router-view>
  <!-- :cartItemCount="cartItemCount" -->
  <Footer v-if="hideNavAndFooter" class="m-auto" />


</template>
<script setup>
import store from './store/store';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// import SignupVerify from './views/SignupVerify.vue';
// import PageNotFound from './views/PageNotFound.vue';
import router from './router/router';
import { computed, ref, onMounted } from 'vue'

const fav = ref(store.state.wishlist)
const cart = ref(store.state.cart)
const orders = ref(store.state.orders)
const products = ref(store.state.products)
const invalidPassword = ref(false)
console.log(typeof (invalidPassword));

// let stripe = null;

// onMounted(async () => {
//   stripe = Stripe(import.meta.env.VITE_PUBLISHABLE_KEY)
// })

const hideNavAndFooter = computed(() => {
  const routeName = router.currentRoute.value.name
  return routeName !== 'SignupVerify' && routeName !== 'pagenotfound' && routeName !== 'AccountVerified'
})

const checkout = async (cart) => {
  try {

    let productDetails = []

    cart.forEach(element => {

      productDetails.push({
        user_id: element.user_id,
        product_id: element.product_id,
        quantity: element.quantity,
        img_url: element.img_url
      })

    });



    store.dispatch('getCheckoutSession', productDetails).then(async (response) => {


      // stripe = await Stripe(import.meta.env.VITE_PUBLISHABLE_KEY)

      const checkout_session = await response
      const stripe = Stripe(import.meta.env.VITE_PUBLISHABLE_KEY)

      await stripe.redirectToCheckout({
        sessionId: checkout_session
      })

      console.log("stripe: ", stripe);
    })



  } catch (error) {
    console.log("Checkout error");
  }

}

const toggleFav = (product_id) => {
  if (fav.value.includes(product_id)) {
    const productDetails = { 'product_id': product_id, 'user_id': store.state.user.data.id }
    fav.value = fav.value.filter(id => id !== product_id)
    store.commit('removeFromWishList', product_id)
    store.dispatch('removeFromWishListServer', productDetails)

  } else {
    const productDetails = { 'product_id': product_id, 'user_id': store.state.user.data.id }
    fav.value.push(product_id)
    store.commit('addToWishList', product_id)
    store.dispatch('addToWishListServer', productDetails)

  }
}

const addToCart = (product) => {

  console.log("typeof:", typeof (product));
  store.dispatch('addToCart', product).then((response) => {
    if (response === 'Out of stock!') {
      return "Out of Stock"
    }
    store.dispatch('addToCartServer', response)
      .then(() => {
        console.log('Added!')
      })
  })


}

const removeFromCart = (product) => {
  store.dispatch('removeFromCart', product)
    .then((response) => {

      store.dispatch('removeFromCartServer', response)
        .then(() => {
          window.location.reload()
        })
    })
}

const increaseQty = (product) => {
  store.dispatch('increaseQty', product).then((response) => {
    store.dispatch('increaseQtyServer', response)
      .then(() => {

      })
  })
}
const decreaseQty = (product) => {
  store.dispatch('decreaseQty', product).then((response) => {

    console.log(product);
    store.dispatch('decreaseQtyServer', response)
      .then(() => {

        if (product.quantity < 1) {
          window.location.reload()

        }
      })
  })
}

const updateName = (username) => {
  const userDetails = { 'user_id': store.state.user.data.id, 'newUsername': username }
  store.dispatch('updateName', userDetails)
    .then((response) => {

      window.location.reload()
    })
}
const updateEmail = (email) => {
  const userDetails = { 'user_id': store.state.user.data.id, 'email': email }

  store.dispatch('updateEmail', userDetails)
    .then((response) => {

      window.location.reload()
    })
}

const updatePass = (currentPass, newPass) => {
  const userDetails = { 'user_id': store.state.user.data.id, 'newPass': newPass, 'currentPass': currentPass }

  store.dispatch('updatePass', userDetails)
    .then((response) => {

      if (response.message === 'Incorrect password') {
        invalidPassword.value = true
        return
      }

      window.location.reload()
    })
}

// const cartItemCount = () => {

//   return store.getters.cartItemCount;
// }



</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
