<template>

    <body class="bg-gray-100 h-screen flex justify-center items-center">
        <div class="max-w-md mx-auto bg-white rounded p-8 shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Signup Confirmation</h2>
            <p class="text-gray-700 mb-4">Your account has been created successfully. Please check your email for
                verification instructions.</p>
            <router-link :to="{ name: 'Login' }"
                class="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
                Log in
            </router-link>
        </div>
    </body>
</template>