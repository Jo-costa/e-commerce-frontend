<template>
    <div class="flex justify-center w-full h-auto">
        <div class="mt-10 w-1/3 p-4">
            <div class="flex flex-col w-full border-2 p-6">
                <h1 class="text-2xl">Login Details</h1>
                <div class="flex flex-row justify-between items-center pb-10 pt-10">
                    <div class="flex flex-col">
                        <label for="name" class="text-xl font-medium">Username</label>
                        <span>{{ username }}</span>
                    </div>
                    <button @click="displayNameInput"
                        class="bg-white hover:bg-slate-100 rounded border-2 p-4 w-40 h-8 flex justify-center items-center">Edit</button>

                </div>
                <div class="hidden flex-row justify-between items-center" :class="{ 'show': !editName }">

                    <input type="text" name="name" id="" placeholder="name" class="border-2 p-2 rounded-lg">
                    <button
                        class="bg-teal-500 text-white hover:bg-teal-700 rounded border-2 p-4 w-30 h-8 flex justify-center items-center">Update</button>
                </div>
                <div class="flex flex-row justify-between items-center pb-10 pt-10">
                    <div class="flex flex-col">
                        <label for="email" class="text-xl font-medium">Email</label>
                        <span>{{ email }}</span>
                    </div>
                    <button @click="displayEmailInput"
                        class="bg-white hover:bg-slate-100 rounded border-2 p-4 w-40 h-8 flex justify-center items-center">Edit</button>
                </div>
                <div class="hidden flex-row justify-between items-center" :class="{ 'show': !editEmail }">

                    <input type="text" name="email" id="" placeholder="email" class="border-2 p-2 rounded-lg">
                    <button
                        class="bg-teal-500 text-white hover:bg-teal-700 rounded border-2 p-4 w-30 h-8 flex justify-center items-center">Update</button>
                </div>

                <div class="flex flex-row justify-between items-center pb-10 pt-10">
                    <div class="flex flex-col">
                        <label for="password" class="text-xl font-medium ">Password</label>
                        <span>********</span>
                    </div>
                    <button @click="displayPassInput"
                        class="bg-white hover:bg-slate-100 rounded border-2 p-4 w-40 h-8 flex justify-center items-center">Edit</button>
                </div>
                <div class="hidden flex-row justify-between items-center" :class="{ 'show': !editPass }">

                    <div class="flex flex-col w-full">


                        <input type="password" name="currentPass" id="" placeholder="Current Password"
                            class="border-2 p-2 rounded-lg w-full">
                        <input type="password" name="newPass" id="" placeholder="New Password"
                            class="border-2 p-2 rounded-lg w-full">
                        <button
                            class="bg-teal-500 text-white hover:bg-teal-700 rounded border-2 p-4 w-28  h-8 mt-2 flex justify-center items-center">Update</button>
                    </div>

                </div>
                <!-- <input placeholder="Name" type="text" name="name"
                    class="my-2 border border-black p-2 bg-gray-100 focus:border-gray-500 focus:outline-none focus:ring-purple-500 rounded-md w-full" />
                <input placeholder="Email" type="email" name="email"
                    class="my-2 border border-black p-2 bg-gray-100 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full" />
                <input placeholder="Password" type="password" name="password"
                    class="my-2 border border-black p-2 bg-gray-100 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full" /> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import store from '../store/store';
import { ref } from 'vue';
const username = store.state.user.data.username
const email = store.state.user.data.email
let editName = ref(true)
let editEmail = ref(true)
let editPass = ref(true)

function displayNameInput() {
    editName.value = !editName.value;
    console.log('clicked');
}
function displayEmailInput() {
    editEmail.value = !editEmail.value;
    console.log('clicked');
}
function displayPassInput() {
    editPass.value = !editPass.value;
}

</script>

<style scoped>
.show {
    display: flex;
}
</style>