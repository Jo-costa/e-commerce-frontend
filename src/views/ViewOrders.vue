<template>
    <main class="p-5">

        <div class="container lg:w-2/3 xl:w-2/3 mx-auto" v-if="props.orders.length > 1">
            <h1 class="text-3xl font-bold mb-6">My Orders</h1>


            <div class="bg-white p-3 rounded-md shadow-md" v-for="order in props.orders">
                <table class="table table-auto w-full">
                    <thead class="border-b-2">
                        <tr class="text-left">
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <!-- <th class="w-64">Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class="w-1/4">
                                <a href="/src/order-details.html" class="text-purple-600 hover:text-purple-500">
                                    #{{ order.id }}
                                </a>
                            </td>
                            <td class="w-1/4">{{ convertDate(order.createdAt) }}</td>
                            <td class="w-1/4">
                                <span :class="{ 'bg-green-500': order.status === 'Paid' }"
                                    class="bg-gray-500 text-white p-1 rounded">{{ order.status }}</span>
                            </td>
                            <td class="w-1/4">£{{ formatPrice(order.total_price) }}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <div class="bg-red-500 text-white flex justify-center items-center rounded text-2xl w-1/2 m-auto h-12">
                <h1>{{ message }}</h1>
            </div>

        </div>
    </main>
</template>
<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import store from '../store/store';

let message = ref()
const props = defineProps({
    orders: Array,
})
onMounted(async () => {
    store.dispatch('getOrders').then(response => {

        message.value = response
    })

        .catch(error => {
            console.log('Error: ', error);
        })
})


function convertDate(d) {
    const date = new Date(d);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatDay = day < 10 ? '0' + day : day;
    const formatMonth = month < 10 ? '0' + month : month;

    const finalDate = `${formatDay}/${formatMonth}/${year}`

    return finalDate;
}

function formatPrice(p) {
    const price = (p / 100).toFixed(2)
    return price;
}

</script>