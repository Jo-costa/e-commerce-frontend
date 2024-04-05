<template>

    <div class="font-[sans-serif] bg-gray-100  ">
        <div v-if="props.fav.length > 0" class="w-2/3 m-auto flex flex-col justify-center gap-12 p-20">
            <div class="lg:col-span-2 divide-y w-full h-auto" v-for="(product, index) in props.fav " :key="index">
                <div class="grid md:grid-cols-4 items-center gap-8 py-6 bg-white p-2 relative">
                    <div class="md:col-span-2 flex items-center gap-6">
                        <router-link :to="'/product' + product">
                            <div class="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                                <img :src="getProductsDetails(products, product).Images[0].img_url"
                                    class="w-full h-full object-contain rounded-md" />
                            </div>
                        </router-link>
                        <div>
                            <router-link :to="'/product' + product">

                                <h3 class="text-lg font-extrabold text-[#333]">{{ getProductsDetails(products,
                                    product).name }}
                                </h3>
                            </router-link>
                        </div>
                    </div>
                    <div class="flex">

                        <h3>£{{ getProductsDetails(products, product).price }}</h3>
                    </div>
                    <div class="flex items-center absolute right-0 top-0">

                        <div @click="toggleFavourite(product)"
                            class="bg-gray-100  w-10 h-10 flex hover:-translate-y-0.5 items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
                            :class="{ 'fill-gray-800': !props.fav.includes(product), 'fill-red': props.fav.includes(product) }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="gray"
                                class="w-6 h-6">
                                <path
                                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div v-else class="bg-white w-1/2 h-[200px] rounded flex justify-center m-auto mt-12 items-center">
            <ul class="flex flex-col justify-center">
                <li class="flex justify-center">
                    <h1 class="text-3xl">Your wishlist is currently empty
                    </h1>
                </li>
                <li class="flex justify-center "><router-link :to="{ name: 'Home' }">Continue
                        Shopping</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import { defineProps, defineEmits, ref } from 'vue';
import store from '../store/store';
import { useStore } from 'vuex';
import Products from '../components/Products.vue';
const props = defineProps({
    cart: Array,
    fav: Array,
    toggleFavourite: Function
})
const emit = defineEmits(['remove-from-cart', 'increase-qty', 'decrease-qty', 'toggle-favourite'])
const use_Store = useStore()
const cart = store.state.cart
const products = store.state.products
const empty = cart.length > 0


const removeItemFromCart = (product) => {
    emit('remove-from-cart', product)
}
const increaseItemQty = (product) => {
    emit('increase-qty', product)
}
const decreaseItemQty = (product) => {
    emit('decrease-qty', product)
}
const toggleFavourite = (product) => {
    emit('toggle-favourite', product)
}

function getProductsDetails(products, product) {
    return products.find(item => item.id === product)
}

</script>

<style>
.fill-red path {
    fill: #de0000;
    stroke: none
        /* Change this to the desired fill color */
}
</style>