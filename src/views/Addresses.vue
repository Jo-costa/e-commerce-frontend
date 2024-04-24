<template>
    <div class="flex justify-center w-full h-auto">
        <div class="mt-10 w-2/3 p-4 expand-container">
            <div class="flex flex-col w-full  p-6">


                <div class="border-2 w-40 h-40 cursor-pointer flex flex-col text-center justify-center items-center">
                    <router-link :to="{ name: 'NewAddress' }"
                        class="flex flex-col text-center justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span>Add new Address</span>
                    </router-link>
                </div>


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

@media (max-width: 745px) {

    .rearrange {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }


}

@media (max-width: 626px) {



    .expand-container {
        width: 100%;
        text-align: center;
    }
}
</style>