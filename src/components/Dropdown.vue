<template>
    <div class="">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="flex items-center hover:text-black-400">
                    <ChevronRightIcon class=" ml-1 h-5 w-5 text-black-700" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute left-10  w-32 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">

                        <MenuItem v-slot="{ active }">
                        <button @click="logout" :class="[
                            active ? 'bg-green-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                        ]">
                            <UserIcon class="w-6 h-6 " />
                            Profile
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button @click="logout" :class="[
                            active ? 'bg-green-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all',
                        ]">
                            <ListBulletIcon class="w-6 h-6 " />
                            View Orders
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
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import { UserIcon, ArrowLeftOnRectangleIcon, ListBulletIcon } from '@heroicons/vue/20/solid'
// import store from '../store';
// import router from '../router';
// const name = store.state.user.data.name

</script>