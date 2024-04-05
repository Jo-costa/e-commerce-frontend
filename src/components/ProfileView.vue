<template>
    <div class="p-12 bg-gray-100">
        <div class="flex justify-center ">
            <h1 class="text-2xl mb-10">Your Account</h1>
        </div>
        <div class="grid grid-cols-3 gap-36 ">
            <router-link :to="{ name: 'Orders' }">

                <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                    <h1 class="text-xl mb-4">View Orders</h1>
                    <p>Track your orders</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'Security' }">
                <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                    <h1 class="text-xl mb-4">Login DEtails</h1>
                    <p>Edit username, password and email</p>
                </div>
            </router-link>
            <div class="bg-white p-6 rounded border-2 cursor-pointer hover:bg-gray-200 transition-all">
                <h1 class="text-xl mb-4">Address</h1>
                <p>Manage Addresses</p>
            </div>

        </div>
    </div>
</template>