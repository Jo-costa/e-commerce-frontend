<template>
    <Layout>
        <form class="space-y-6" method="POST">
            <!-- dont forget to add flex the below div -->
            <div v-if="errorMsg" class="flex rounded justify-center bg-red-300 p-1 relative">
                {{ errorMsg }}
                <span @click="errorMsg = ''" class="w-4 h-4 flex items-center 
                justify-center rounded-full transition-colors
                cursor-pointer hover:bg-black/10 absolute right-1.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </span>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                    address</label>
                <div class="mt-2">
                    <input id="email" v-model="user.email" name="email" type="email" autocomplete="email" required=""
                        class="block w-full p-2
                                rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                focus:ring-teal-700 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                        <router-link :to="{ name: 'forgotpassword' }">
                            <a href="" class="font-semibold 
                            text-black-600 hover:text-green-500">Forgot password? </a>
                        </router-link>
                    </div>
                </div>
                <div class="mt-2">
                    <input id="password" v-model="user.password" name="password" type="password"
                        autocomplete="current-password" required="" class="block w-full 
                            rounded-md border-0 p-2
                            py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset 
                            ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-teal-600 
                            sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div class="flex justify-center">
                <button type="button" @click="login" :class="{ 'hover:bg-green-200': loading }" class="flex w-2/5 
                        justify-center items-center  rounded-md mb-10
                        bg-teal-700 px-3 py-1.5 
                        text-xl font-semibold leading-6 
                        text-white shadow-sm hover:bg-green-500">
                    <svg v-if="loading" aria-hidden="true"
                        class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    Login</button>
            </div>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Not a member? <router-link :to="{ name: 'Signup' }"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup
                    here</router-link>
            </p>
        </form>
        <!-- <form class="space-y-6" @subimit.prevent="login" method="POST">
        <div class="flex rounded justify-center bg-red-300 p-1 relative" v-if="errorMsg">{{ errorMsg }}

            <span @click="errorMsg = ''" class="w-4 h-4 flex items-center 
                justify-center rounded-full transition-colors
                cursor-pointer hover:bg-black/10 absolute right-1.5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </span>
        </div>
        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                address</label>
            <div class="mt-2">
                <input id="email" v-model="adminUser.email" name="email" type="email" autocomplete="email" required=""
                    class="block w-full 
                                rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                    <router-link :to="{ name: 'resetPassword' }">
                        <a href="" class="font-semibold 
                            text-black-600 hover:text-green-500">Forgot password? </a>
                    </router-link>
                </div>
            </div>
            <div class="mt-2">
                <input id="password" v-model="adminUser.password" name="password" type="password"
                    autocomplete="current-password" required="" class="block w-full 
                            rounded-md border-0 
                            py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset 
                            ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-green-600 
                            sm:text-sm sm:leading-6" />
            </div>
        </div>

        <div class="flex justify-center">
            <button type="button" @click="login" :disabled="loading" :class="{ 'hover:bg-green-200': loading }" class="flex w-2/5 
                        justify-center items-center  rounded-md mb-10
                        bg-green-600 px-3 py-1.5 
                        text-xl font-semibold leading-6 
                        text-white shadow-sm hover:bg-green-500">
                <svg v-if="loading" aria-hidden="true"
                    class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                Login</button>
        </div>
    </form> -->
    </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import store from '../store/store'
import router from '../router/router';
import { ref, onMounted } from 'vue'

let loading = ref(false)
let errorMsg = ref(false)

const user = {
    email: '',
    password: ''
}

function login() {
    loading.value = store.dispatch('login', user)
        .then(() => {
            loading.value = false

            router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
            loading.value = false
            errorMsg.value = response.data.message
        })
}

</script>