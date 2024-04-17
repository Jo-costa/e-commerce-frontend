<template>
    <div class="flex justify-center w-full h-auto mb-10">

        <div class="mt-10 w-2/3 p-4 expand-container">
            <h1 class="text-2xl font-medium text-center mb-5">Add New Address</h1>

            <div class="flex w-full text-left justify-center">
                <form id="addressForm" class="flex flex-col w-full">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" required>
                    <label for="streetAddress">Street Address:</label>
                    <input type="text" id="streetAddress" required>
                    <label for="city">City:</label>
                    <input type="text" id="city" required>
                    <label for="state">State/Province:</label>
                    <input type="text" id="state" required>
                    <label for="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" required>
                    <button type="submit">Add Address</button>
                </form>
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
form {
    width: 70%;
}

button {
    background-color: teal;
    width: 100px;
    color: white;
}

input {
    border: 1px solid rgb(101, 98, 98);
    border-radius: 5px;
    height: 30px;
    margin-bottom: 10px;
    width: 100%;
}

label {
    width: 100%;
}

input[type="text"] {
    padding: 0 8px 0 8px;
}

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