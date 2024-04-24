<template>
    <div class="font-[sans-serif] bg-gray-100 z-{-50]">
        <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="product in products" :key="product.id"
                    class="bg-white flex flex-wrap rounded-2xl p-3 relative transition-all w-full">


                    <div @click="toggleFavourite(product.id)"
                        class="bg-gray-100  w-10 h-10 flex hover:-translate-y-0.5 items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
                        :class="{ 'fill-gray-800': !props.fav.includes(product.id), 'fill-red': props.fav.includes(product.id) }">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="gray"
                            class="w-6 h-6">
                            <path
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                    <router-link :to="'/product' + product.id">
                        <div
                            class="w-full border-b-2 h-[220px] cursor-pointer overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">

                            <img :src="product.Images[0].img_url" :alt="product.name"
                                class="h-full w-full object-contain" />
                        </div>
                    </router-link>
                    <div class=" p-1 w-full">
                        <router-link :to="'/product' + product.id">
                            <h3 class="text-lg font-bold cursor-pointer text-gray-800">{{ product.name }}</h3>
                        </router-link>


                    </div>
                    <div class="flex flex-col self-end p-1">
                        <h4 class="text-lg text-gray-700 font-bold mt-4">£{{ product.price }}</h4>
                        <button @click="addItemToCart(product)"
                            class="bg-teal-700 rounded p-1 text-white px-2 hover:bg-teal-800 transition-colors">Add
                            to
                            cart</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script setup>
import ProductPage from '../views/ProductPage.vue';
import store from '../store/store'
import router from '../router/router'
import { ref, onMounted, computed } from 'vue'

const products = computed(() => store.state.products)
const props = defineProps({
    fav: Array,
    cart: Array,
    toggleFavourite: Function
})
const fav = store.state.wishlist
const emit = defineEmits(['toggle-favourite', 'add-to-cart'])
const toggleFavourite = (productID) => {
    emit('toggle-favourite', productID)
}

const addItemToCart = (product) => {
    emit('add-to-cart', product)
}

onMounted(() => {
    store.dispatch('getProducts').then(response => {
    })
        .catch(error => {
            console.log('Error: ', error);
        })
})


</script>

<style>
.fill-red path {
    fill: #de0000;
    stroke: none
        /* Change this to the desired fill color */
}
</style>