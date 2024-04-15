<template>
    <header class="relative p-4 flex shrink-0 bg-teal-700 text-white   justify-between items-center ">
        <div class="p-2">
            <a href="/">DigitalDynasty</a>
        </div>
        <div class="w-full">

            <form class=" hideSearchBar flex items-center max-w-sm mx-auto w-full">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                        </svg>
                    </div>
                    <input type="text" id="simple-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search branch name..." required />
                </div>
                <button type="submit"
                    class="p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 rounded-lg border-teal-500 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>

        </div>

        <div class="bg-slate-300 w-full fixed z-50 	">
            <div class="overflow-hidden hidden fixed justify-center rounded top-0 left-0 bottom-0 h-screen w-[150px]  bg-teal-500 z-50"
                :class="{ 'displayMenuBar': !isMobileMenuOpen, 'menu-transition': !isMobileMenuOpen }">

                <div clas>
                    <div class="p-2 mt-2 text-xl">
                        <a href="/">DigitalDynasty</a>
                    </div>
                    <ul class="w-full flex flex-col displayMenu p-4  ml-2">
                        <router-link :to="{ name: 'Home' }"
                            class="hover:text-teal-300 transition-colors p-2">Home</router-link>

                        <!-- <ProductsDropdown class="hover:text-teal-300 transition-colors" /> -->
                        <router-link :to="{ name: 'Basket' }"
                            class="relative flex  items-center hover:text-teal-300 transition-colors p-2">
                            <span class="absolute left-0 top-0 text-xs">{{ cartItemCount }}</span>
                            <ShoppingCartIcon class="w-5 h-5 mr-1 " />
                            Basket
                        </router-link>
                        <MyAccountDropdown class="mb-2  hover:text-teal-300 transition-colors" />
                        <router-link v-if="isAuth == null" :to="{ name: 'Login' }"
                            class="text-white hover:text-teal-300 transition-colors mr-5 p-2">Login</router-link>
                        <router-link v-if="isAuth == null" :to="{ name: 'Signup' }"
                            class="text-white hover:text-teal-300 transition-colors p-2">Signup</router-link>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex w-1/2 justify-center items-center relative transition-colors	">

            <ul class="w-full justify-between hideMenu">
                <router-link :to="{ name: 'Home' }" class="hover:text-teal-300 transition-colors p-2">Home</router-link>

                <router-link :to="{ name: 'Basket' }"
                    class="relative flex justify-center items-center hover:text-teal-300 transition-colors p-2">
                    <span class="absolute left-0 top-0 text-xs">{{ cartItemCount }}</span>
                    <ShoppingCartIcon class="w-5 h-5 mr-1 " />
                    Basket
                </router-link>
                <MyAccountDropdown v-if="isAuth != null" class="hover:text-teal-300 transition-colors p-2" />

                <router-link v-if="isAuth == null" :to="{ name: 'Login' }"
                    class="text-white hover:text-teal-300 transition-colors mr-5 p-2">Login</router-link>
                <router-link v-if="isAuth == null" :to="{ name: 'Signup' }"
                    class="text-white hover:text-teal-300 transition-colors p-2">Signup</router-link>
            </ul>
            <button @click="toggleMobileMenu" class=" hidden displayMenuBar w-6 h-6 cursor-pointer absolute right-0">
                <Bars3Icon />
            </button>
        </div>

    </header>
    <CategoriesBar />
</template>

<script setup>
import MyAccountDropdown from '../components/MyAccountDropdown.vue';
import ProductsDropdown from '../components/ProductsDropdown.vue';
import CategoriesBar from '../components/CategoriesBar.vue';
import store from '../store/store'
import { useStore } from 'vuex'
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/vue/20/solid'

import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
import router from '../router/router';

const isAuth = computed(() => {
    return store.state.user.token;
})




// const props = defineProps({
//     cartItemCount: Function
// })

// const { cartItemCount } = props
const store1 = useStore()
const cartItemCount = computed(() => {

    return store1.getters.cartItemCount;
})


let isMobileMenuOpen = ref(true)

function toggleMobileMenu() {
    //change the the state of the variable whenever the menu is clicked
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    console.log("clicked", isMobileMenuOpen.value);
}








function logout() {
    store.dispatch('logout')
        .then(() => {
            router.push({ name: 'Login' })
        })
}
</script>

<style scoped>
.menu-transition {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
}

@media (max-width: 954px) {

    .hideMenu {
        display: none;
    }


}

@media (max-width: 625px) {

    .hideSearchBar {
        display: none;
    }


}

@media (max-width: 954px) {

    .displayMenuBar {
        display: flex;
        transition: all 1s ease-out;

    }
}
</style>
