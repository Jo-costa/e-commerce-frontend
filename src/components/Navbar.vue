<template>
    <header class="relative p-4 flex shrink-0 bg-teal-700 text-white   justify-between items-center z-50">
        <div class="p-2 text-xl">
            <a href="/">DigitalDynasty</a>
        </div>



        <div class="overflow-hidden hidden fixed justify-center rounded top-0 left-0 bottom-0 h-screen w-[200px]  bg-teal-500 z-50"
            :class="{ 'displayMenuBar': !isMobileMenuOpen, 'menu-transition': !isMobileMenuOpen }">
            <div class="z-50">
                <div class="text-2xl font-bold mt-6 h-20 w-full">
                    <a href="/">DigitalDynasty</a>
                </div>
                <ul class="w-full flex flex-col h-screen displayMenu  z-50">
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Home' }"
                        class="hover:text-teal-300 transition-colors mb-12 mt-12 text-2xl">Home</router-link>

                    <!-- <ProductsDropdown class="hover:text-teal-300 transition-colors" /> -->
                    <router-link @click="toggleMobileMenu" :to="{ name: 'Basket' }"
                        class="relative flex  items-center hover:text-teal-300 transition-colors mb-12 mt-12 text-2xl">
                        <span class="absolute left-0 top-0 text-xs">{{ cartItemCount }}</span>
                        <ShoppingCartIcon class="w-5 h-5 mr-1 " />
                        Basket
                    </router-link>
                    <MyAccountDropdown v-if="isAuth !== null"
                        class="mb-12 mt-12 text-2xl hover:text-teal-300 transition-colors z-50" />
                    <router-link @click="toggleMobileMenu" v-if="isAuth == null" :to="{ name: 'Login' }"
                        class="text-white hover:text-teal-300 transition-colors mr-5 mb-12 mt-12 text-2xl">Login</router-link>
                    <router-link @click="toggleMobileMenu" v-if="isAuth == null" :to="{ name: 'Signup' }"
                        class="text-white hover:text-teal-300 transition-colors mb-12 mt-12 text-2xl ">Signup</router-link>
                </ul>
            </div>

        </div>

        <div @click="toggleMobileMenu" class="overlay overflow-hidden" :class="{ 'overlay-active': !isMobileMenuOpen }">
        </div>

        <div class="flex w-1/2 justify-center items-center relative transition-colors	">

            <ul class="w-full flex justify-between hideMenu">
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
</template>

<script setup>
import MyAccountDropdown from '../components/MyAccountDropdown.vue';
import ProductsDropdown from '../components/ProductsDropdown.vue';
import store from '../store/store'
import { useStore } from 'vuex'
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/vue/20/solid'

import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
import router from '../router/router';

const isAuth = computed(() => {
    return store.state.user.token;
})

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

@media (max-width: 975px) {

    .hideMenu {
        display: none;
    }


}

@media (max-width: 625px) {

    .hideSearchBar {
        display: none;
    }


}

@media (max-width: 975px) {

    .displayMenuBar {
        display: flex;
        transition: all 1s ease-out;

    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(118, 93, 93, 0.5);
    z-index: 49;
    /* Ensure overlay is behind modal (z-index of modal is 50) */
    display: none;
    /* Initially hidden */
}

.overlay-active {
    display: block;
    overflow: hidden;
    /* Show overlay when modal is open */
}
</style>
