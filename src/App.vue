<template>
  <Navbar v-if="hideNavAndFooter" />
  <router-view @add-to-cart="addToCart" @remove-from-cart="removeFromCart" @decrease-qty="decreaseQty"
    @increase-qty="increaseQty" @toggle-favourite="toggleFav" :cart="cart" :fav="fav" class="flex-1"></router-view>
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
import { computed, ref } from 'vue'

const fav = ref(store.state.wishlist)
const cart = ref(store.state.cart)

const hideNavAndFooter = computed(() => {
  const routeName = router.currentRoute.value.name
  return routeName !== 'SignupVerify' && routeName !== 'pagenotfound' && routeName !== 'AccountVerified'
})


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
          console.log("removed!");
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

      })
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
