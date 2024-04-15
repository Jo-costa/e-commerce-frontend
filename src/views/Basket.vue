<template>
    <!-- <Layout class="w-full"> -->

    <div class="font-[sans-serif] bg-gray-100">
        <div class=" flex justify-between  gap-12 p-20" v-if="cart.length > 0">
            <div class="w-2/2">
                <div class="lg:col-span-2 divide-y w-full h-auto" v-for="(product, index) in cart " :key="index">

                    <div class="grid md:grid-cols-4 items-center gap-8 py-6 bg-white p-2">
                        <div class="md:col-span-2 flex items-center gap-6">
                            <div class="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                                <img :src="product.img_url" class="w-full h-full object-contain rounded-md" />
                            </div>
                            <div>
                                <h3 class="text-lg font-extrabold text-[#333]">{{ product.name }}
                                </h3>
                                <h6 class="text-md text-gray-500 mt-2">Color: <strong class="ml-2">Black</strong></h6>
                            </div>
                        </div>
                        <div class="flex">
                            <button @click="decreaseItemQty(product)" type="button"
                                class="bg-transparent py-2 font-semibold text-[#333]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 124 124">
                                    <path
                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>
                            <button type="button"
                                class="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                                <span>{{ product.quantity }}</span>
                            </button>
                            <button @click="increaseItemQty(product)" type="button"
                                class="bg-transparent py-2 font-semibold text-[#333]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
                                    <path
                                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <h4 class="text-lg font-bold text-[#333]">£{{ product.price }}
                            </h4>
                            <svg @click="removeItemFromCart(product)" xmlns="http://www.w3.org/2000/svg"
                                class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                                viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded p-6 grid-cols-1	">
                <h3 class="flex text-xl font-extrabold text-[#333] border-b pb-4">Order Summary</h3>
                <div class="flex flex-col">
                    <ul class="flex flex-col">
                        <li v-for="(product, index) in cart" :key="index"><span>Item {{ index + 1 }}- </span> {{
                            product.name
                        }} <span>({{ product.quantity }})</span></li>
                    </ul>

                </div>
                <ul class="text-[#333] ">
                    <li class="flex flex-wrap gap-2 lg:text-lg md:text-sm text-md py-4 font-bold">Total:<span
                            class="">£{{
                                subTotal()
                            }}</span>
                    </li>
                </ul>
                <button type="button"
                    class="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check
                    out</button>

                <div class="mt-10">
                    <h3 class="text-xl font-extrabold text-[#333] mb-6">Apply promo code</h3>
                    <div class="flex border border-blue-600 overflow-hidden max-w-md rounded">
                        <input type="email" placeholder="Promo code"
                            class="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5" />
                        <button type='button'
                            class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-md text-white">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="bg-white w-1/2 lg:h-[200px] rounded flex justify-center m-auto mt-12 items-center">
            <ul class="flex flex-col justify-center">
                <li class="flex justify-center">
                    <h1 class="lg:text-3xl md:text-lg">Empty Basket</h1>
                </li>
                <li class="flex justify-center "><router-link :to="{ name: 'Home' }">Continue
                        Shopping</router-link></li>
            </ul>
        </div>
    </div>
    <!-- </Layout> -->
</template>

<script setup>
import Layout from '../components/Layout.vue';
import { defineProps, defineEmits, ref } from 'vue';
import store from '../store/store';
import { useStore } from 'vuex';
import Products from '../components/Products.vue';
const props = defineProps({
    cart: Array,
    toggleFavourite: Function
})
const emit = defineEmits(['remove-from-cart', 'increase-qty', 'decrease-qty'])
const use_Store = useStore()
const cart = ref(store.state.cart)
const products = store.state.products
const empty = cart.length > 0



function subTotal() {
    let subTotal = 0

    for (let i = 0; i < cart.value.length; i++) {
        const price = cart.value[i].price
        console.log("price:", price);
        const quantity = cart.value[i].quantity
        console.log("quantity:", quantity);
        subTotal += price * quantity
    }
    return subTotal;
}

const removeItemFromCart = (product) => {
    emit('remove-from-cart', product)
}
const increaseItemQty = (product) => {
    emit('increase-qty', product)
}
const decreaseItemQty = (product) => {
    emit('decrease-qty', product)
}

</script>