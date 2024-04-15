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

                    <input type="text" v-model="newName" name="name" id="username" placeholder="name"
                        class="border-2 p-2 rounded-lg" required>
                    <button @click="updateUserName"
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

                    <input type="email" v-model="newEmail" name="email" id="email" placeholder="email"
                        class="border-2 p-2 rounded-lg" required>
                    <button @click="updateUserEmail"
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


                        <span v-if="invalidPassword" class="text-red-500 mb-2">Incorrect Password</span>
                        <input type="password" v-model="currentPass" name="currentPass" id="currentPass"
                            placeholder="Current Password" class="border-2 mb-2 p-2 rounded-lg w-full"
                            :class="{ 'invalid': invalidPassword }" required>
                        <input type="password" v-model="newPass" name="newPass" id="newPass" placeholder="New Password"
                            class="border-2 p-2 rounded-lg w-full" required>
                        <button @click="updateUserPass"
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
import { ref, defineEmits, defineProps } from 'vue';

const emit = defineEmits(['update-name', 'update-email', 'update-pass'])
const props = defineProps({
    invalidPassword: Boolean
})
const username = store.state.user.data.username
const email = store.state.user.data.email

let editName = ref(true)
let editEmail = ref(true)
let editPass = ref(true)

let newName = '';
let newEmail = '';
let currentPass = '';
let newPass = '';


function displayNameInput() {
    editName.value = !editName.value;
}
function displayEmailInput() {
    editEmail.value = !editEmail.value;
}
function displayPassInput() {
    editPass.value = !editPass.value;
}

const updateUserName = () => {
    emit('update-name', newName)
}
const updateUserEmail = () => {
    emit('update-email', newEmail)
}
const updateUserPass = () => {
    emit('update-pass', currentPass, newPass)
}

</script>

<style scoped>
.show {
    display: flex;
}

.invalid {
    background-color: rgb(187, 139, 139);
    border: none;
    outline: 2px solid red;
}
</style>