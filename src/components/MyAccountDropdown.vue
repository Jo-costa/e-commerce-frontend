<template>
    <div class="">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="flex items-center hover:text-black-400">
                    <p>My account</p>
                    <ChevronDownIcon class=" ml-1 h-5 w-5 text-black-700" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute left-0 mt-4 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">

                        <router-link :to="{ name: 'Profile' }">
                            <MenuItem v-slot="{ active }">

                            <button :class="[
                                active ? 'bg-teal-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                            ]">
                                <UserIcon class="w-6 h-6 " />
                                Profile
                            </button>

                            </MenuItem>
                        </router-link>

                        <router-link :to="'/vieworders?user_id=' + user_id">
                            <MenuItem v-slot="{ active }">

                            <button :class="[
                                active ? 'bg-teal-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                            ]">
                                <ListBulletIcon class="w-6 h-6 " />
                                View Orders
                            </button>
                            </MenuItem>
                        </router-link>


                        <router-link :to="{ name: 'Wishlist' }">

                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-teal-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                            ]">
                                <HeartIcon class="w-6 h-6 " />
                                Wish List
                            </button>
                            </MenuItem>
                        </router-link>

                        <MenuItem v-slot="{ active }">
                        <button @click="logout" :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                        ]">
                            <ArrowLeftOnRectangleIcon class="w-6 h-6" />
                            Logout
                        </button>
                        </MenuItem>
                    </div>

                </MenuItems>
            </transition>
        </Menu>
    </div>

</template>


<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import { UserIcon, ArrowLeftOnRectangleIcon, ListBulletIcon, HeartIcon } from '@heroicons/vue/20/solid'
import store from '../store/store';
import router from '../router/router';
// const name = store.state.user.data.name


const user_id = store.state.user.data.id ? store.state.user.data.id : null;
const token = store.state.user.token;
const userData = {
    user_id: user_id,
    token: token
}
function logout() {
    store.dispatch('logout', userData)
        .then(() => {
            router.push({ name: 'Login' })
        })
}
</script>