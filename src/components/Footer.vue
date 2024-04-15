<template>
    <footer class="flex flex-wrap justify-between w-full bg-cyan-800 shadow ">
        <div class="w-full flex footer-col items-center justify-between mx-auto  p-4">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="/"
                    class="hover:underline">DigitalDynasty</a>. All Rights Reserved.
            </span>
            <div class="w-1/2 footer-col">
                <ul class="mt-3 footer-col text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    <a href="#" class="hover:underline">Contact</a>
                </ul>
            </div>
        </div>
    </footer>


</template>

<script></script>

<style scoped>
@media (max-width: 550px) {

    .footer-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }


}
</style>