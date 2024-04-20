<template>
    <div class="flex justify-center">
        <div
            class="rearrange bg-teal-500 py-2 px-3 w-[300px] h-[80px] flex flex-col justify-center mt-2 items-center mx-auto text-white rounded ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>


            {{
                message
            }}
        </div>
    </div>
</template>

<script setup>
import store from '../store/store';
import { onMounted, ref } from 'vue';

let message = ref()
onMounted(async () => {
    store.dispatch('order_confirmed').then(response => {

        message.value = response
        console.log(message);
    })

        .catch(error => {
            console.log('Error: ', error);
        })
})



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

@media (max-width: 445px) {

    .rearrange {
        width: 60%;
    }


}

@media (max-width: 626px) {



    .expand-container {
        width: 100%;
        text-align: center;
    }
}
</style>