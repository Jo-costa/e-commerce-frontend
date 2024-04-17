<template>
    <div class="p-12 bg-gray-100">
        <div class="flex justify-center ">
            <h1 class="text-2xl mb-10">Your Account</h1>
        </div>
        <div class="grid grid-cols-3 gap-32 rearrange">
            <router-link :to="{ name: 'Orders' }">

                <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                    <h1 class="text-xl mb-4">View Orders</h1>
                    <p>Track your orders</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'Security' }">
                <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                    <h1 class="text-xl mb-4">Login Details</h1>
                    <p>Edit username, password and email</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'Address' }">
                <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                    <h1 class="text-xl mb-4">Address</h1>
                    <p>Manage Addresses</p>
                </div>
            </router-link>

        </div>
    </div>
</template>

<style scoped>
@media (max-width: 1255px) {

    .rearrange {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 845px) {

    .rearrange {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
</style>