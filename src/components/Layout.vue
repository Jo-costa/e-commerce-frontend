<template>
    <div class="flex min-h-screen flex-1 flex-col justify-center items-center m-0 px-6 py-12 lg:px-8 shrink-0">
        <div class="w-3/6 border rounded-md">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ title }}</h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

const { title } = defineProps({
    title: String
})

</script>

<style scoped></style>